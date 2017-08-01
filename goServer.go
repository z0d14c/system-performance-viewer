package main

import (
  "log"
  "fmt"
  "net/http"
  "github.com/julienschmidt/httprouter"
)

func Index(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
    fmt.Fprint(w, "Welcome!\n")
} 

func main() {
  router := httprouter.New()
  router.GET("/data", Index)
  log.Println("Listening...")  
  // sort of a hack to reroute non-"/data" endpoints to their appropriate static files
  router.NotFound = http.FileServer(http.Dir("./dist"))
  http.ListenAndServe(":3000", router)
}