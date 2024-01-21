function loginUserMessage(username){
    if(!username){
        console.log("please enter a name");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());