function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("login")
            resolve()
        },2000)     
    })
}
function userDetails(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("user details")
            resolve()
        },1000) 
    })
}
function password(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("password")
            resolve()
        },3000)
    })  
}
//callback promise
login()
.then(()=>{
    return userDetails();
})
.then(()=>{
    return password();
})
.then(()=>{
    console.log("All tasks completed")
}).catch((error)=>{
    console.log("Error:",error)
})    