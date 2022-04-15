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
        this.password = password
        this.email = email
        this.img = {'img' : img , 'type' : type}
        this.contactslist = []
    }
}

let users = {"ahmad1": new user("ahmad1", "ahmad2@gmail.com", "12345","images.jpg"),
        "ahmad2": new user("ahmad2", "ahmad2@gmail.com", "12345","images.jpg"),
        "ahmad3": new user("ahmad3", "ahmad2@gmail.com", "12345","images.jpg") }


async function adduser(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let img = document.getElementById('input_img').files[0]
    for (const [key, value] of Object.entries(users)) {
        if(name === value.name){
            let elem = document.getElementById("bhem-m2")
            elem.setAttribute("class", 'wrong-show')
        }
    }
    document.getElementById('name').value = ''
    document.getElementById('password').value = ''
    document.getElementById('repassword').value = ''
    document.getElementById('email').value = ''
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


