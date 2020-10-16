/*function CallTenTimes(callback){
    for(let i=0; i<10; i++){ callback(); }
}
//두번째(축약)
CallTenTimes(function(){
    console.log("함수 호출함 - callback");
});*/

function returnFunction(){
    return function(){
        console.log('함수를 리턴함');
    }
}
var ret = returnFunction();
ret();

returnFunction()();

function a(x){
    console.log("a");
}
function a(){
    console.log("b");
}
a();
//첫번째
// let callback = function(){
//     console.log("함수 호출");
// }
// CallOneTime(callback);

