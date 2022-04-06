
class messages{
    constructor() {
        this.messages = [] 
    }
    add(text, time) {
        message = [text, time]
        this.messages.push(message)
    }
}
class contact{
    constructor(name, phoneNumber, img) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.img = img;
        this.message = new messages()
    }
    getname(){
        return this.name
    }
    getimg(){
        return this.img
    }
}

var contacts = []
contacts.push(new contact("bhem1", "123", "images.jpg"))
contacts.push(new contact("bhem2", "123", "images.jpg"))
contacts.push(new contact("bhem3", "123", "images.jpg"))
contacts.push(new contact("bhem4", "123", "images.jpg"))
contacts.push(new contact("bhem5", "123", "images.jpg"))
contacts.push(new contact("bhem1", "123", "images.jpg"))
contacts.push(new contact("bhem2", "123", "images.jpg"))
contacts.push(new contact("bhem3", "123", "images.jpg"))
contacts.push(new contact("bhem4", "123", "images.jpg"))
contacts.push(new contact("bhem5", "123", "images.jpg"))
contacts.push(new contact("bhem1", "123", "images.jpg"))
contacts.push(new contact("bhem2", "123", "images.jpg"))
contacts.push(new contact("bhem3", "123", "images.jpg"))
contacts.push(new contact("bhem4", "123", "images.jpg"))
contacts.push(new contact("bhem5", "123", "images.jpg"))

// contacts.forEach(elem =>{
//     document.write("<a href=\"#\" class=\"list-group-item list-group-item-action\">" +
//                     "<div class=\"d-flex w-100 justify-content-between\">" +
//                     "<h5 class=\"mb-1\">" + elem.getname() + "</h5>" +
//                     "<small class=\"text-muted\">3 days ago</small>" +
//                     "</div>"+ 
//                     "<p class=\"mb-1\">message</p>" +
//                     "</a>")
// });

let message = "<div class=\"align-self-end self p-1 my-1 mx-3 rounded bg-white shadow-sm message-item\">"
                    "<div class=\"options\">" +
                        "<a href=\"#\"><i class=\"fas fa-angle-down text-muted px-2\"></i></a>" +
                    "</div>" +
                    "<div class=\"d-flex flex-row\">" +
                        "<div class=\"body m-1 mr-2\">if you go to the movie, then give me a call</div>" +
                        "<div class=\"time ml-auto small text-right flex-shrink-0 align-self-end text-muted\" style=\"width:75px;\">" +
                            "22:41" +
                            "<i class=\"fas fa-check-circle\"></i>" +
                        "</div>" +
                    "</div>" +
               "</div>"

function showMessages(i){
    let elem = document.getElementById('messages')
    let user = contacts[i]
    elem.innerHTML = "<div class=\"bg-light\">" + 
                        "<img src=\"images.jpg\" class=\"profileimage\">" +
                        "<span clas=\"d-flex\">" + user.getname() + "</span>" +
                            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-search\" viewBox=\"0 0 16 16\">" +
                                "<path d=\"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z\"/>" +
                            "</svg>" +
                        "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-three-dots-vertical\" viewBox=\"0 0 16 16\">" + 
                            "<path d=\"M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z\"/>" +
                        "</svg>" +
                    "</div>" +
                    "<div class=\"d-flex flex-column chat-de  overlay\" id=\"\">" +
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
                            "<input type=\"text\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\" placeholder=\"Type a message\">" +
                            "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-mic\" viewBox=\"0 0 16 16\">" +
                                "<path d=\"M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z\"/>" +
                                "<path d=\"M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z\"/>" +
                            "</svg>" +
                        "</span>" +
                    "</div>"
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
    contacts.push(new contact(name, "123", img))
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