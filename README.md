# System Peformance Viewer
## a react-d3 / golang exercise
displays fake system data across timescales (1 hr, 1 week)
golang server serves up webpack'd files and fake data
seed used: https://github.com/davezuko/react-redux-starter-kit
features and significant modifications from seed:
* use golang app server instead of node app server
* redux-saga instead of redux-thunk
* add react-d3
* material-ui instead of bootstrap
* added scoped styling and regular css instead of using sass
* responsive

# system package requirements
* golang
* node/npm
* yarn

# how-to
1. `yarn install` install yarn pkgs
2. install golang pkgs
* cd $GOPATH
* go get github.com/julienschmidt/httprouter
3. `yarn build` (must build before serving, and each time after changing code)
4. `yarn goserve` to start (nav localhost:3000)
5. `yarn test` to test

# future work / pain points
* add eslint
* add flow
* add go testing
* more js tests
* separate out go modules (e.g. have a mock data generation golang module)
* make data look appropriately different across timescales
* add color theme
* theres a few hacks and bad separation of concerns
* more/smaller components
* this react-d3 wrapper does NOT make it easy to label axes -- find way around it or switch to different lin

# other notes and thoughts
* I'm trying quite a bit of new tech here {material-ui / react-d3 / golang / yarn} are all pretty new to me so i spent some time I could've spent on making the app "better" on learning/experimenting with those tech instead.
* also created wireframes in photoshop which i dont usually use. yes they are ugly http://imgur.com/a/wQmIS
* on that note, i didnt do a lot of tech evaluation here -- i simply picked some new stuff and dove in. for example, had i known that react-d3's line chart didn't make it easy to label x/y axes, i probably would've just used regular d3 or some other lib for the charts!
* using material-ui's v1 beta. seems to work fine.
* overall, I think +1 day of iteration/refinement would go a long way towards making this a more "production-ready" app
* golang was really fun to work with
* it hurts to not have flow or typescript
* switching timescale between 1 hr / 1 week just triggers a randomization of data, would be better to actually have consistency between the two
* i ran into a few webpack/packaging issues along the way; the main one being that i had to move to a whitelisting `config.test` pattern for the loader to load up react-d3 correctly, and then found out that that broke tests (so testing needs to keep the blacklisting pattern)
* in the interest of time i ran with the existing seeds style of no semicolons. usually i would configure my own eslint (and add flow or typescript as mentioned) but i didn't this time
