class Contact2{
    constructor(name, img) {
        this.name = name;
        this.img = img;
        this.messages = []
    }
    addmessage(who, time, msg, type){
        this.messages.push(new Messages(who,time,msg, type))
    }
}
class user{
    constructor(name, nickname, password, img, type){
        this.name = name
        this.nickname = nickname
        this.password = password
        this.img = {'img' : img , 'type' : type}
        this.contactslist = []
    }
}
class Message{
    constructor(who, time, msg, type){
        this.who = who
        this.time = time
        this.msg = msg
        this.type = type
    }
}

var contacts_list = {'Naser' : new Contact2("Naser", 'images/img1.jpg'),'Hiba' : new Contact2("Hiba", 'images/img2.jpg'),
                    'Emily Smith' : new Contact2("Emily Smith", 'images/img3.jpg'), 'j3fr' : new Contact2("j3fr", 'images/img4.png'),
                    'Emily Smith2' : new Contact2("Emily Smith2", 'images/img5.jpg')}

var ml = [new Message('Naser', '12:37', 'hi there can you tell me how the homework in going with you','m'),
        new Message('Naser', '12:37', 'im aleardy 2 weeks into it and its so hard','m')]
contacts_list['Naser'].messages = ml

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
            users[name] = new user(name, nickname, password, img2, type)
            users[name].contactslist = contacts_list
            sessionStorage.setItem("jsArray", JSON.stringify(users[name]))
        }
        reader.readAsDataURL(img)
        window.location="ChatPage.html";
    }
}

function check(name, nickname, password, repassword, img){
    if(name.length === 0){
        let elem = document.getElementById("bhem-m4")
        elem.setAttribute("class", 'wrong-show')
        return false
    }
    for (const [key, value] of Object.entries(users)) {
         if(name === value.name){
            return false
        }
    }
    if(nickname.length === 0){
        return false
    }

    if(password.length === 0){
        return false
    }
    if(password !== repassword){
        return false
    }
    return true
}
