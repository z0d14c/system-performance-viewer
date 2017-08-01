# System Peformance Viewer
## a react-d3 / golang exercise
seed used: https://github.com/davezuko/react-redux-starter-kit
modifications from that project:
* use golang app server instead of node app server
* redux-saga instead of redux-thunk (not fully removed)

# requirements
* golang
* yarn

# how-to
## install golang pkgs
cd $GOPATH
go get github.com/julienschmidt/httprouter
## `yarn build` (must build before serving)
## `yarn goserve` to start (nav localhost:3000)
## `yarn test` to test

# design considerations
color scheme: https://scontent.fsnc1-1.fna.fbcdn.net/v/t31.0-8/18319153_795996577233857_534382761112645666_o.jpg?oh=ddd588c898c5613ba16e7fab5f3f3b7b&oe=5A07E89B

# things to do with more time
## add eslint
## add flow
## add go testing
## separate out go modules
## make data look appropriately different across timescales
