# System Peformance Viewer
## a react-d3 / golang exercise
displays fake (generated by go server on pageload) system data across timescales (1 hr, 1 week)
golang server serves up webpack'd files and fake data
seed used: https://github.com/davezuko/react-redux-starter-kit
features and significant modifications from seed:
* use golang app server instead of node app server
* redux-saga instead of redux-thunk
* add react-d3
* material-ui instead of bootstrap
* added scoped styling and regular css instead of using sass
* responsive design (should look good and function on tablet/phone)

# system package requirements
* golang
* node/npm (node at least version 7.9)
* yarn

# how-to
This how-to should be run from the root of this project directory unless otherwise noted
1. `yarn install` install yarn pkgs
2. install golang pkgs (see bullets)
* cd $GOPATH (you must have set your $GOPATH -- see: https://github.com/golang/go/wiki/SettingGOPATH)
* go get github.com/julienschmidt/httprouter
* cd <PROJECT_DIR> (wherever this project is cloned)
3. `yarn build` (must build before serving, and each time after changing code)
* this will place packaged code inside `dist/`
4. `yarn goserve` to start
* (navigate to localhost:3000 to view the application)
5. `yarn test` to test

# future work / pain points
* add eslint
* add flow or typescript
* add go testing
* separate out go modules (e.g. have a mock data generation golang module)
* tests for sagas, additional js test coverage
* custom color theming
* more and smaller components
* the react-d3-basic components do not make it easy to label axes or have other granular customization -- should use one of the lower level react-d3 libs or switch to regular d3
* more comments
* remove location reducer/vestigial code

# other notes and thoughts
* I'm trying quite a bit of new-to-me tech here {material-ui / react-d3 / golang / yarn} 
* also created wireframes in photoshop which i dont usually use. yes they are ugly http://imgur.com/a/wQmIS
* using material-ui's v1 beta. seems to work fine. the pre-v1 version doesn't have a grid system
* golang was really fun to work with; next steps would be modularizing it and testing
* it hurts to not have flow, typescript, or linting -- these would be next priority for javascript additions
* i ran into a few webpack/packaging issues along the way; the main one being that i had to move to a whitelisting `config.test` pattern for the loader to load up react-d3 correctly, and then found out that that broke tests (so testing needs to keep the blacklisting pattern)
* i prefer to use `redux-little-router` https://github.com/FormidableLabs/redux-little-router but didn't really need to worry about it as there is only one page in this app