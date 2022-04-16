class contact{
    constructor(name, img) {
        this.name = name;
        this.img = img;
        this.messages = []
    }
}
class user{
    constructor(name, nickname, password, img){
        this.name = name
        this.nickname = nickname
        this.password = password
        this.img = img
        this.contactslist = []
    }
}

let users = {"Emily Smith": new user("Emily Smith", "Emily", "12345","images.jpg"),
"James Thomas": new user("James Thomas", "James", "12345","images.jpg"),
"Sarah Smith": new user("Sarah Smith", "Sarah", "12345","images.jpg"),
"David Smith": new user("David Smith", "David", "12345","images.jpg"),
"Robert Thomas": new user("Robert Thomas", "Robert", "12345","images.jpg") }

function adduser(){
    let name = document.getElementById('name').value
    let nickname = document.getElementById('nickname').value
    let password = document.getElementById('password').value
    let repassword = document.getElementById('repassword').value
    let img = document.getElementById('input_img').files[0]    
    console.log(check(name, nickname, password, repassword, img))
    if(!(check(name, nickname, password, repassword, img) === false)){
    document.getElementById('name').value = ''
    document.getElementById('nickname').value = ''
    document.getElementById('password').value = ''
    document.getElementById('repassword').value = ''
    document.getElementById('input_img').value = ''
    users[name] = new user(name, nickname, password, img)
    console.log(users)
    // window.location.href="ChatPage.html";
    }
}

function check(name, nickname, password, repassword, img){
    if(name.length === 0){
        // let elem = document.getElementById("bhem-m4")
        // elem.setAttribute("class", 'wrong-show')
        return false
    }
    for (const [key, value] of Object.entries(users)) {
         if(name === value.name){
            // let elem = document.getElementById("bhem-m2")
            // elem.setAttribute("class", 'wrong-show')
            return false
        }
    }
    if(nickname.length === 0){
        // let elem = document.getElementById("bhem-m6")
        // elem.setAttribute("class", 'wrong-show')
        return false
    }

    if(password.length === 0){
        // let elem = document.getElementById("bhem-m5")
        // elem.setAttribute("class", 'wrong-show')
        return false
    }
         if(password !== repassword){
            // let elem = document.getElementById("bhem-m3")
            // elem.setAttribute("class", 'wrong-show')
            return false
        }
        return true
    }