package main

import (
  "log"
  "fmt"
  "net/http"
  "github.com/julienschmidt/httprouter"
  "strings"
  "strconv"
  "math/rand"
)

func intArrayToString(a [168]int) string {
  b := make([]string, len(a))
  for i, v := range a {
    b[i] = strconv.Itoa(v)
  }
  return strings.Join(b, ",")
}

func genHardDriveSpace() string {
  // max 512gb, min 0gb
  var data [168]int
  start := 512
  data[0] = start
  the_range :=[]int{0, 512}
  for i := 1; i < 168; i++ {
    data[i] = data[i-1] - rand.Intn(5)
  }
  output := intArrayToString(data)
  json := fmt.Sprintf("{\"range\":[%v,%v],\"static_name\":\"HARD_DRIVE_SPACE\",\"unit\":\"gb available\",\"data\":[%v]}",the_range[0],the_range[1],output)
  return json
}

func genNetworkUtilization() string {
  // max 11mbps, min 0mbps
  the_range :=[]int{0, 11}
  var data [168]int
  for i := 0; i < 168; i++ {
    data[i] = rand.Intn(11)
  }
  output := intArrayToString(data)
  json := fmt.Sprintf("{\"range\":[%v,%v],\"static_name\":\"NETWORK_UTILIZATION\",\"unit\":\"mbps\",\"data\":[%v]}",the_range[0],the_range[1],output)
  return json
}

func genMemoryUtilization() string {
  // max 16gb, min 0gb
  the_range := []int{0, 16}
  var data [168]int
  for i := 0; i < 168; i++ {
    data[i] = rand.Intn(16)
  }
  output := intArrayToString(data)
  json := fmt.Sprintf("{\"range\":[%v,%v],\"static_name\":\"MEMORY_UTILIZATION\",\"unit\":\"gb in use\",\"data\":[%v]}",the_range[0],the_range[1],output)
  return json
}

func genCPUUtilization() string {
  // 0-100%
  the_range := []int{0, 100}
  var data [168]int
  for i := 0; i < 168; i++ {
    data[i] = rand.Intn(100)
  }
  output := intArrayToString(data)
  json := fmt.Sprintf("{\"range\":[%v,%v],\"static_name\":\"CPU_UTILIZATION\",\"unit\":\"percent\",\"data\":[%v]}",the_range[0],the_range[1],output)
  return json
}

func genFakeData() string {
  hds := genHardDriveSpace()
  nwu := genNetworkUtilization()
  mu := genMemoryUtilization()
  cpu := genCPUUtilization()
  output := fmt.Sprintf("[%v, %v, %v, %v]", hds, nwu, mu, cpu)
  return output
}

func Index(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
    w.Header().Set("Content-Type", "application/json")
    output := genFakeData()
    fmt.Fprintf(w, "{\"data\": %v}", output)
} 

func main() {
  router := httprouter.New()
  router.GET("/data", Index)
  log.Println("Listening...")  
  // sort of a hack to reroute non-"/data" endpoints to their appropriate static files
  router.NotFound = http.FileServer(http.Dir("./dist"))
  http.ListenAndServe(":3000", router)
}