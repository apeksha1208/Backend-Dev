const greet= ()=>{
    console.log("Hello, welcome to the practice task!")
}
function fun(cb){
    console.log("this is fun function")
    cb()
}
fun(greet)
fun(()=>{
    console.log("This is an anonymous callback function")
})