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
    getmessages(){
        return this.messages
    }
    addmessage(who, time, msg){
        this.messages.push(new Messages(who,time,msg))
    }
}

// var contacts = []
contacts_map = {}
contacts_map["bhem1"] = new contact("bhem1", "images.jpg")
contacts_map["bhem2"] = new contact("bhem2", "images.jpg")
contacts_map["bhem3"] = new contact("bhem3", "images.jpg")
contacts_map["bhem4"] = new contact("bhem4", "images.jpg")
contacts_map["bhem5"] = new contact("bhem5", "images.jpg")
contacts_map["bhem6"] = new contact("bhem6", "images.jpg")
contacts_map["bhem7"] = new contact("bhem7", "images.jpg")
contacts_map["bhem8"] = new contact("bhem8", "images.jpg")
contacts_map["bhem9"] = new contact("bhem9", "images.jpg")
contacts_map["bhem10"] = new contact("bhem10", "images.jpg")


function readMessage(key){
    let elem = contacts_map[key].getmessages()
    let str = ''
    elem.forEach(msg =>{
        if(msg.getwho()===key){ //bhem
            str+="<div class=\"flex-row d-flex align-self-start self p-1 my-1 mx-3 rounded bg-white shadow-sm message-item\">"+          
                    "<div class=\"d-flex flex-row\">"+
                        "<div class=\"body m-1 mr-2\">"+ msg.getmsg() +"</div>"+
                        "<div class=\"time ml-auto small text-right flex-shrink-0 align-self-end text-muted\" style=\"width:75px;\">"+
                            msg.gettime() +
                            "<i class=\"fas fa-check-circle\"></i>"+
                        "</div>"+
                    "</div>"+
                "</div>"
        }
        else{ //a7na
            str+="<div class=\"flex-row d-flex align-self-end self p-1 my-1 mx-3 rounded shadow-sm message-item greenbackground\">"+          
                    "<div class=\"d-flex flex-row\">"+
                        "<div class=\"body m-1 mr-2\">"+ msg.getmsg() +"</div>"+
                        "<div class=\"time ml-auto small text-right flex-shrink-0 align-self-end text-muted\" style=\"width:75px;\">"+
                            msg.gettime() +
                            "<i class=\"fas fa-check-circle\"></i>"+
                        "</div>"+
                    "</div>"+
                "</div>"
        }
    });
    return str
}

function showMessages(i){
    let elem = document.getElementById('messages')
    let user = contacts_map[i]
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
                    "<div class=\"table-wrapper-scroll-y my-custom-scrollbar d-flex flex-column chat-de  overlay\" id=\"chat_p\">"+
                        "<table class=\"table table-bordered table-striped mb-0\">" +
                            readMessage(i)+
                        "</table>" +
                    "</div>" +
                    "<div class=\"input-group Typehere\">" +
                        "<span class=\"input-group-text iconsandinput\">" +
                            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-emoji-laughing\" viewBox=\"0 0 16 16\">" +
                                "<path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>" + 
                                "<path d=\"M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z\"/>" +
                            "</svg>" +
                            // "<ul class=\"dropup iconsandinput\">"+
                            "<button class=\"dropup\">"+
                            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-paperclip\" viewBox=\"0 0 16 16\">" +
                            "<path d=\"M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z\"/>" +
                            "</svg>"+
                            "<div class=\"dropup-content\" id=\"hiden\">"+
                                "<div class=\"clipdivs\">"+
                                "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-person biclips\" viewBox=\"0 0 16 16\">"+
                                "<path d=\"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z\"/>"+
                                "</svg>"+
                                "</div>"+
                                "<div>"+
                                "<div>"+
                                "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-file-earmark biclips\" viewBox=\"0 0 16 16\">"+
                                "<path d=\"M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z\"/>"+
                                "</svg>"+
                                "</div>"+
                                "<div>"+
                                "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-camera biclips\" viewBox=\"0 0 16 16\">"+
                                "<path d=\"M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z\"/>"+
                                "<path d=\"M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z\"/>"+
                                "</svg>"+
                                "</div>"+
                                "<div>"+
                                "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-image biclips\" viewBox=\"0 0 16 16\" data-bs-toggle=\"modal\" data-bs-target=\"#staticBackdrop2\">"+
                                "<path d=\"M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z\"/>"+
                                "<path d=\"M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z\"/>"+
                                "</svg>"+
                                "</div>"+
                                "</div>"+
                            "</button>"+

                            // "<ul/>"+
                            "<input type=\"text\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\" placeholder=\"Type a message\" id=\"typem\">" +
                            "<div onclick=\"sendMessage()\">"+
                            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-send-fill\" viewBox=\"0 0 16 16\">"+
                                "<path d=\"M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z\">"+
                              "</svg>" +
                            "</div>" +
                        "</span>" +
                    "</div>"
}

// function temp(){
//     let element = document.getElementById('hiden')
//     element.setAttribute("style", "display: block;");
// }

function sendMessage() {
    let message = document.getElementById('typem').value
    document.getElementById('typem').value = ''
    let name = document.getElementById('contact_name').innerText
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    contacts_map[name].addmessage('bhemali', time, message)
    if((message.trim()).length===0){
        return
    }else{
        let elem = document.getElementById('chat_p')
        elem.innerHTML += "<div class=\"flex-row d-flex align-self-end self p-1 my-1 mx-3 rounded shadow-sm message-item greenbackground\">"+          
                            "<div class=\"d-flex flex-row\">"+
                                "<div class=\"body m-1 mr-2\">"+ message +"</div>"+
                                "<div class=\"time ml-auto small text-right flex-shrink-0 align-self-end text-muted\" style=\"width:75px;\">"+
                                    time +
                                    "<i class=\"fas fa-check-circle\"></i>"+
                                "</div>"+
                            "</div>"+
                        "</div>"
        document.getElementById(name+'-t').innerText = time
        document.getElementById(name+'-m').innerText = message
    }
}


function sendImage(){
    var elem = document.getElementById('chay-p')
    elem.innerHTML += "<div class=\"flex-row d-flex align-self-end self p-1 my-1 mx-3 rounded shadow-sm message-item greenbackground\">"+          
                        "<div class=\"d-flex flex-row\">"+
                            // "<div class=\"body m-1 mr-2\">"+ 
                            "<img src=\"\" hight='150px' id='img-i'>" +
                            // +"</div>"+
                            // "<div class=\"time ml-auto small text-right flex-shrink-0 align-self-end text-muted\" style=\"width:75px;\">"+
                            //     time +
                            //     "<i class=\"fas fa-check-circle\"></i>"+
                            // "</div>"+
                        "</div>"+
                    "</div>"
    var image = document.getElementById("input-img").files[0];

    var reader = new FileReader();

    reader.onload = function(e) {
      document.getElementById("img-i").src = e.target.result;
    }

    reader.readAsDataURL(image);
    
}

function printContacts(contacts) {
    for (const [key, user] of Object.entries(contacts_map)) {
        document.write("<div class=\"chat-list-item d-flex flex-row w-100 p-2 border-bottom\" onclick=\"showMessages("+ "\'" +key+ "\'" +")\">" + 
                            "<img src=\"" + user.getimg() + "\" alt=\"Profile Photo\" class=\"img-fluid rounded-circle mr-2\" style=\"height:50px;\">" +
                            "<div class=\"w-50\">" +
                                "<h5 class=\"mb-1\">" + user.getname() + "</h5>" +
                                "<p class=\"mb-1\" id=\""+ key +"-m\">message</p>" +
                            "</div>" +
                            "<div class=\"flex-grow-1 text-right\">" +
                                "<div class=\"small time\" id=\""+ key +"-t\">15:41</div>" + 
                            "</div>" +
                        "</div>")
    }
}

function addContact(contacts){
    let name = document.getElementById('Username').value
    let img = document.getElementById('upload').value
    document.getElementById('Username').value = ''
    contacts_map[name]= new contact(name, img)
    let elem = document.getElementById('contact_div')
    str = ""
    i = 0
    for (const [key, user] of Object.entries(contacts_map)) {
        str += ("<div class=\"chat-list-item d-flex flex-row w-100 p-2 border-bottom\" onclick=\"showMessages("+ i +")\">" + 
                            "<img src=\"" + contacts_map[key].getimg() + "\" alt=\"Profile Photo\" class=\"img-fluid rounded-circle mr-2\" style=\"height:50px;\">" +
                            "<div class=\"w-50\">" +
                                "<h5 class=\"mb-1\">" + contacts_map[key].getname() + "</h5>" +
                                "<p class=\"mb-1\">message</p>" +
                            "</div>" +
                            "<div class=\"flex-grow-1 text-right\">" +
                                "<div class=\"small time\" id=\""+ key +"-t\">15:41</div>" + 
                            "</div>" +
                        "</div>")
        i += 1
    }
    elem.innerHTML = "<table class=\"table table-bordered table-striped mb-0\">" + 
                        str +
                     "</table>"
}

// function readURL(input) {
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();
//         reader.onload = function (e) {
//             $('#blah').attr('src', e.target.result).width(150).height(200);
//         };
//         reader.readAsDataURL(input.files[0]);
//     }
// }
// function handleImageUpload() 
// {

// var image = document.getElementById("upload").files[0];

//     var reader = new FileReader();

//     reader.onload = function(e) {
//       document.getElementById("display-image").src = e.target.result;
//     }

//     reader.readAsDataURL(image);

// } 

