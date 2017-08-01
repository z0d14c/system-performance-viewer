package main

import (
  "log"
  "fmt"
  "net/http"
  "math/rand"
  "github.com/julienschmidt/httprouter"
)

func genHardDriveSpace() {
  // max 512gb, min 0gb
  // slowly decreasing amount like [500, 498, 496, 493, 491, 489, 487, 485]
}

func genNetworkUtilization() {
  // max 11mbps, min 0mbps
  // spike around [11, 5, 8, 2, 3, 6, 8, 4]
}

func genMemoryUtilization() {
  // max 16gb, min 0gb
  // [16, 14, 12, 14, 12, 13, 12, 16]
}

func genCPUUtilization() {
  // 0-100%
  // spike around [100, 44, 77, 33, 22, 11, 44, 55]
}

func genFakeData() {

}

func Index(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
    w.Header().Set("Content-Type", "application/json")
    fmt.Fprint(w, "{data: \"test\"}")
} 

func main() {
  router := httprouter.New()
  router.GET("/data", Index)
  log.Println("Listening...")  
  // sort of a hack to reroute non-"/data" endpoints to their appropriate static files
  router.NotFound = http.FileServer(http.Dir("./dist"))
  http.ListenAndServe(":3000", router)
}