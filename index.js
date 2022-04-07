class Messages{
    constructor(who, time, msg){
        this.who = who
        this.time = time
        this.msg = msg
    }
    getwho(){
        return this.who
    }
    gettime(){
        return this.time
    }
    getmsg(){
        return this.msg
    }
}
class contact{
    constructor(name, img) {
        this.name = name;
        this.img = img;
        this.messages = []
    }
    getname(){
        return this.name
    }
    getimg(){
        return this.img
    }
    addmessage(who, time, msg){
        this.messages.push(new Messages(who,time,msg))
    }
}

var contacts = []
contacts.push(new contact("bhem1", "images.jpg"))
contacts.push(new contact("bhem2", "images.jpg"))
contacts.push(new contact("bhem3", "images.jpg"))
contacts.push(new contact("bhem4", "images.jpg"))
contacts.push(new contact("bhem5", "images.jpg"))
contacts.push(new contact("bhem1", "images.jpg"))
contacts.push(new contact("bhem2", "images.jpg"))
contacts.push(new contact("bhem3", "images.jpg"))
contacts.push(new contact("bhem4", "images.jpg"))
contacts.push(new contact("bhem5", "images.jpg"))
contacts.push(new contact("bhem1", "images.jpg"))
contacts.push(new contact("bhem2", "images.jpg"))
contacts.push(new contact("bhem3", "images.jpg"))
contacts.push(new contact("bhem4", "images.jpg"))
contacts.push(new contact("bhem5", "images.jpg"))

// contacts.forEach(elem =>{
//     document.write("<a href=\"#\" class=\"list-group-item list-group-item-action\">" +
//                     "<div class=\"d-flex w-100 justify-content-between\">" +
//                     "<h5 class=\"mb-1\">" + elem.getname() + "</h5>" +
//                     "<small class=\"text-muted\">3 days ago</small>" +
//                     "</div>"+ 
//                     "<p class=\"mb-1\">message</p>" +
//                     "</a>")
// });

// var message = "<div class=\"align-self-end self p-1 my-1 mx-3 rounded bg-white shadow-sm message-item\">"
//                     "<div class=\"d-flex flex-row\">" +
//                         "<div class=\"body m-1 mr-2\">if you go to the movie, then give me a call</div>" +
//                         "<div class=\"time ml-auto small text-right flex-shrink-0 align-self-end text-muted\" style=\"width:75px;\">" +
//                             "22:41" +
//                             "<i class=\"fas fa-check-circle\"></i>" +
//                         "</div>" +
//                     "</div>" +
//                "</div>"

function readMessage(){
    str = "<div class=\"mx-auto my-2 bg-primary text-white small py-1 px-2 rounded\">"+
            "27/03/2018"+
        "</div>"
    return str
}

function showMessages(i){
    let elem = document.getElementById('messages')
    let user = contacts[i]
    elem.innerHTML = "<div class=\"bg-light\">" + 
                        "<img src=\"images.jpg\" class=\"profileimage\">" +
                        "<span id=\"contact_name\" clas=\"d-flex\">" + user.getname() + "</span>" +
                            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-search\" viewBox=\"0 0 16 16\">" +
                                "<path d=\"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z\"/>" +
                            "</svg>" +
                        "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-three-dots-vertical\" viewBox=\"0 0 16 16\">" + 
                            "<path d=\"M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z\"/>" +
                        "</svg>" +
                    "</div>" +
                    "<div class=\"d-flex flex-column chat-de  overlay\" id=\"chat_p\">"+
                    "</div>" +
                    "<div class=\"input-group Typehere\">" +
                        "<span class=\"input-group-text iconsandinput\">" +
                            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-emoji-laughing\" viewBox=\"0 0 16 16\">" +
                                "<path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>" + 
                                "<path d=\"M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z\"/>" +
                            "</svg>" +
                            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-paperclip\" viewBox=\"0 0 16 16\">" +
                                "<path d=\"M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z\"/>" +
                            "</svg>" +
                            "<input type=\"text\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\" placeholder=\"Type a message\" id=\"typem\">" +
                            "<div onclick=\"sendMessage()\">"+
                            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-send-fill\" viewBox=\"0 0 16 16\">"+
                                "<path d=\"M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z\">"+
                              "</svg>"+
                            "</div>" +
                        "</span>" +
                    "</div>"
}

function sendMessage() {
    let message = document.getElementById('typem').value
    document.getElementById('typem').value = ''
    let contactn = document.getElementById('contact_name').value
    console.log(contactn.innerText)
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    if((message.trim()).length===0){
        return
    }else{
    let elem = document.getElementById('chat_p')
    elem.innerHTML += "<div class=\"align-self-end self p-1 my-1 mx-3 rounded bg-white shadow-sm message-item\">"+          
                    "<div class=\"d-flex flex-row\">"+
                        "<div class=\"body m-1 mr-2\">"+ message +"</div>"+
                        "<div class=\"time ml-auto small text-right flex-shrink-0 align-self-end text-muted\" style=\"width:75px;\">"+
                            time +
                            "<i class=\"fas fa-check-circle\"></i>"+
                        "</div>"+
                    "</div>"+
                "</div>"
    }
}


function printContacts(contacts) {
    let i = 0
    contacts.forEach(elem =>{
        document.write("<div class=\"chat-list-item d-flex flex-row w-100 p-2 border-bottom\" onclick=\"showMessages("+ i +")\">" + 
                            "<img src=\"" + elem.getimg() + "\" alt=\"Profile Photo\" class=\"img-fluid rounded-circle mr-2\" style=\"height:50px;\">" +
                            "<div class=\"w-50\">" +
                                "<h5 class=\"mb-1\">" + elem.getname() + "</h5>" +
                                "<p class=\"mb-1\">message</p>" +
                            "</div>" +
                            "<div class=\"flex-grow-1 text-right\">" +
                                "<div class=\"small time\">15:41</div>" + 
                            "</div>" +
                        "</div>")
        i += 1
    });
}

function addContact(contacts){
    let name = document.getElementById('Username').value
    let img = document.getElementById('img-input').value
    document.getElementById('Username').value = ''
    console.log(img)
    contacts.push(new contact(name, img))
    let elem = document.getElementById('contact_div')
    str = ""
    i = 0
    contacts.forEach(elem =>{
        str += ("<div class=\"chat-list-item d-flex flex-row w-100 p-2 border-bottom\" onclick=\"showMessages("+ i +")\">" + 
                            "<img src=\"" + elem.getimg() + "\" alt=\"Profile Photo\" class=\"img-fluid rounded-circle mr-2\" style=\"height:50px;\">" +
                            "<div class=\"w-50\">" +
                                "<h5 class=\"mb-1\">" + elem.getname() + "</h5>" +
                                "<p class=\"mb-1\">message</p>" +
                            "</div>" +
                            "<div class=\"flex-grow-1 text-right\">" +
                                "<div class=\"small time\">15:41</div>" + 
                            "</div>" +
                        "</div>")
        i += 1
    });
    elem.innerHTML = "<table class=\"table table-bordered table-striped mb-0\">" + 
                        str +
                     "</table>"
}



// "<div class=\"bg-light\">" + 
//                         "<img src=\"images.jpg\" class=\"profileimage\">" +
//                         "<span clas=\"d-flex\">" + "bheadasd" + "</span>" +
//                             "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-search\" viewBox=\"0 0 16 16\">" +
//                                 "<path d=\"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z\"/>" +
//                             "</svg>" +
//                         "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-three-dots-vertical\" viewBox=\"0 0 16 16\">" + 
//                             "<path d=\"M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z\"/>" +
//                         "</svg>" +
//                     "</div>"

// "<a href=\"\" class=\"list-group-item list-group-item-action\">" + 
//                     "<div class=\"d-flex justify-content-between\">" +
//                         "<img src=\"" + elem.getimg() + "\" alt=\"Profile Photo\" class=\"img-fluid rounded-circle mr-2\" style=\"height:40px;\">" +
//                         "<div class=\"placeee\">" + 
//                             "<h6 class=\"mb-1\">" + elem.getname() + "</h6>" + 
//                             "<p class=\"mb-1\">message</p>" +
//                         "</div>" + 
//                         "<small class=\"text-muted\">3 days ago</small>" + 
//                     "</div>" +
//                 "</a>"