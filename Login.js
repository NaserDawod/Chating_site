

function login(users){
    let name = document.getElementById('username-l').value
    let password = document.getElementById('password-l').value
    if(typeof(users[name]) !== 'undefined' && users[name].password === password){
      sessionStorage.setItem("jsArray", JSON.stringify(users))
      sessionStorage.setItem("temp", JSON.stringify(name))
      window.location.href="ChatPage.html";
    } else{
        let elem = document.getElementById("bhem-m")
        elem.setAttribute("class", 'wrong-show')
    }
}



