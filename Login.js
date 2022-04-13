

function login(users){
    let name = document.getElementById('username-l').value
    let password = document.getElementById('password-l').value
    if(typeof(users[name]) !== 'undefined' && users[name].password === password){
        // call a function that recive the user 
        // then prints the user data to chatpage users[name]
        // then window.location.href="ChatPage.html";
        window.location.href="ChatPage.html";
    } else{
        let elem = document.getElementById("bhem-m")
        elem.setAttribute("class", 'wrong-show')
    }
}

