class Contact2{
    constructor(name, img, t) {
        this.name = name;
        this.img = img;
        this.messages = []
        this.lastTalk = t
    }
    addmessage(who, time, msg, type){
        this.messages.push(new Messages(who,time,msg, type))
    }
}
class user{
    constructor(name, nickname, password, img){
        this.name = name
        this.nickname = nickname
        this.password = password
        this.img = img
        this.contactslist = {}
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

var Eren_list = {'Naser' : new Contact2("Naser", 'images/img1.jpg', '00:00'),'Hiba' : new Contact2("Hiba", 'images/img2.jpg', '00:00'),
                    'Nsr' : new Contact2("Nsr", 'images/img8.jpg', '00:00'), 'j3fr' : new Contact2("j3fr", 'images/img4.png', '00:00')}

var Naser_list = {'Eren' : new Contact2("Eren", 'images/img6.jpg', '00:00'),'Hiba' : new Contact2("Hiba", 'images/img2.jpg', '10:38'),
                    'Nsr' : new Contact2("Nsr", 'images/img8.jpg', '10:38'), 'Naseem' : new Contact2("Naseem", 'images/img4.png', '12:37')}

var Hiba_list = {'Naser' : new Contact2("Naser", 'images/img1.jpg', '10:38'),'Eren' : new Contact2("Eren", 'images/img6.jpg', '00:00'),
                    'Nsr' : new Contact2("Nsr", 'images/img8.jpg', '00:00'), 'j3fr' : new Contact2("j3fr", 'images/img4.png', '00:00')}

var Nsr_list = {'Naser' : new Contact2("Naser", 'images/img1.jpg', '10:38'),'Naseem' : new Contact2("Naseem", 'images/img3.jpg', '00:00'),
                    'Hiba' : new Contact2("Hiba", 'images/img2.jpg', '00:00')}

var ml = [new Message('Naser', '12:37', 'hi there can you tell me how the homework in going with you','m'),
        new Message('Naser', '12:37', 'im aleardy 2 weeks into it and its so hard','m')]

// var ml2 = [new Message('Nsr', '14:57', 'are you coming to class today','m'),
//         new Message('Naser', '14:58', 'yse','m')]

var ml3 = [new Message('Naser', '10:38', 'did you finish the homework ?','m')]

var ml4 = [new Message('Eren', '12:37', 'wanna free the world together?','m'),
        new Message('Naser', '12:37', 'what!!','m')]

Hiba_list['Naser'].messages = ml3
Nsr_list['Naser'].messages = ml3

Naser_list['Naseem'].messages = ml
// Naseem_list['Naser'] = ml

Naser_list['Nsr'].messages = ml3
Naser_list['Hiba'].messages = ml3

Eren_list['Naser'].messages = ml4
Naser_list['Eren'].messages = ml4

var users = {"Naser": new user("Naser", "naser", "12345","images/img1.jpg"),
            "Hiba": new user("Hiba", "Hiba", "12345","images/img2.jpg"),
            "j3fr": new user("j3fr", "j3fr", "12345","images/img4.png"),
            "Nsr": new user("Nsr", "Nsr", "12345","images/img8.jpg"),
            "Naseem": new user("Naseem", "Naseem", "12345","images/img3.jpg"),
            "Eren": new user("Eren", "Eren", "12345","images/img6.jpg"),
            "Emily Smith": new user("Emily Smith", "Emily Smith", "12345","images/img5.jpg") }

users['Naser'].contactslist = Naser_list
users["Hiba"].contactslist = Hiba_list
users["Nsr"].contactslist = Nsr_list
users["Eren"].contactslist = Eren_list

function loadData() {
    if(sessionStorage.getItem("jsArray") !== null) {
        users = JSON.parse(sessionStorage.getItem("jsArray"));
        console.log(users)
    }
}

function adduser(){
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
        var base64data
        var reader = new FileReader();
        reader.onloadend = function(e) {
            base64data = e.target.result
            users[name] = new user(name, nickname, password, base64data)
            console.log(users)
            sessionStorage.setItem("jsArray", JSON.stringify(users))
            sessionStorage.setItem("temp", JSON.stringify(name))
        }
        reader.readAsDataURL(img)
        console.log('asdasds')
        // alert("account created successfully you can login now")
        if (window.confirm('account created successfully you can login now by clicking ok')){
            // window.open('Login2.html', '_blank');
            window.location="Login2.html";
        };
        // window.location="ChatPage.html";

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
            let elem = document.getElementById("bhem-m2")
            elem.setAttribute("class", 'wrong-show')
            return false
        }
    }
    if(nickname.length === 0){
        return false
    }

    if(password.length < 5 || password.length > 12){
        let elem = document.getElementById("bhem-m5")
        elem.setAttribute("class", 'wrong-show')
        return false
    }
    if(password !== repassword){
        let elem = document.getElementById("bhem-m3")
        elem.setAttribute("class", 'wrong-show')
        return false
    }
    if(/\d/.test(password) == 0){
        let elem = document.getElementById("bhem-m7")
        elem.setAttribute("class", 'wrong-show')
        return false
    }
    return true
}
