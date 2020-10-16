//Blocking
function longRunningTast(){
    //file 읽기와 같은 오래 걸리는 명령어
    console.log("10초 경과 후 작업 끝")

}
console.log("Start")
longRunningTast()
console.log("End")