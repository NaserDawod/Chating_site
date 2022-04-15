class contacts{
    constructor(name, img) {
        this.name = name;
        this.img = img;
        this.messages = []
    }
}
class user{
    constructor(name, password, email, img, type){
        this.name = name
        this.nickname = nickname
        this.password = password
        this.email = email
        this.img = {'img' : img , 'type' : type}
        this.contactslist = []
    }
}

let users = {"Emily Smith": new user("Emily Smith", "Emily", "12345","images.jpg"),
            "James Thomas": new user("James Thomas", "James", "12345","images.jpg"),
            "Sarah Smith": new user("Sarah Smith", "Sarah", "12345","images.jpg"),
            "David Smith": new user("David Smith", "David", "12345","images.jpg"),
            "Robert Thomas": new user("Robert Thomas", "Robert", "12345","images.jpg") }


async function adduser(){
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
    var type = img.type
    var base64data
    var reader = new FileReader();
    reader.onloadend = function() {
        base64data = reader.result;
        var img2 = base64data.split(',')[1]
        users[name] = new user(name, password, email, img2, type)
        sessionStorage.setItem("jsArray", JSON.stringify(users[name]))
    }
    reader.readAsDataURL(img)
    window.location="ChatPage.html";
}

function check(name, nickname, password, repassword, img){
    if(name.length === 0){
        let elem = document.getElementById("bhem-m4")
        elem.setAttribute("class", 'wrong-show')
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
