# System Peformance Viewer
## a react-d3 / golang exercise
displays fake system data across timescales (1 hr, 1 week)
golang server serves up webpack'd files and fake data
seed used: https://github.com/davezuko/react-redux-starter-kit
modifications from that project:
* use golang app server instead of node app server
* redux-saga instead of redux-thunk (not fully removed)

# system package requirements
* golang
* node/npm
* yarn

# how-to
1. `yarn install` install yarn pkgs
2. install golang pkgs
* cd $GOPATH
* go get github.com/julienschmidt/httprouter
3. `yarn build` (must build before serving)
4. `yarn goserve` to start (nav localhost:3000)
5. `yarn test` to test

# things to do with given more time
* add eslint
* add flow
* add go testing
* separate out go modules
* make data look appropriately different across timescales
* more/smaller components
