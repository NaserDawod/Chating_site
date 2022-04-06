
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
    contacts.forEach(elem =>{
        str += ("<div class=\"chat-list-item d-flex flex-row w-100 p-2 border-bottom\">" + 
                            "<img src=\"" + elem.getimg() + "\" alt=\"Profile Photo\" class=\"img-fluid rounded-circle mr-2\" style=\"height:50px;\">" +
                            "<div class=\"w-50\">" +
                                "<h5 class=\"mb-1\">" + elem.getname() + "</h5>" +
                                "<p class=\"mb-1\">message</p>" +
                            "</div>" +
                            "<div class=\"flex-grow-1 text-right\">" +
                                "<div class=\"small time\">15:41</div>" + 
                            "</div>" +
                        "</div>")
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