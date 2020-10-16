function first(){
    second()
    console.log("First")
}
function second(){
third()
console.log("Second")
}
function third(){
console.log("Third")
}
first()