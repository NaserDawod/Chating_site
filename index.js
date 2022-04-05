
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

let contacts = []
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



function printContacts(contacts) {
    contacts.forEach(elem =>{
        document.write("<a href=\"\" class=\"list-group-item list-group-item-action\">" + 
                            "<div class=\"d-flex justify-content-between\">" +
                                "<img src=\"" + elem.getimg() + "\" alt=\"Profile Photo\" class=\"img-fluid rounded-circle mr-2\" style=\"height:40px;\">" +
                                "<div class=\"placeee\">" + 
                                    "<h6 class=\"mb-1\">" + elem.getname() + "</h6>" + 
                                    "<p class=\"mb-1\">message</p>" +
                                "</div>" + 
                                "<small class=\"text-muted\">3 days ago</small>" + 
                            "</div>" +
                        "</a>")
    });
}



function addcont(contacts){
    let str = ""
    contacts.forEach(elem => { str += "<a href=\"\" class=\"list-group-item list-group-item-action\">" + 
                                        "<div class=\"d-flex justify-content-between\">" +
                                            "<img src=\"" + elem.getimg() + "\" alt=\"Profile Photo\" class=\"img-fluid rounded-circle mr-2\" style=\"height:40px;\">" +
                                            "<div class=\"placeee\">" + 
                                                "<h6 class=\"mb-1\">" + elem.getname() + "</h6>" + 
                                                "<p class=\"mb-1\">message</p>" +
                                            "</div>" + 
                                            "<small class=\"text-muted\">3 days ago</small>" + 
                                        "</div>" +
                                    "</a>"})
    return str
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
        str += ("<a href=\"\" class=\"list-group-item list-group-item-action\">" + 
                    "<div class=\"d-flex justify-content-between\">" +
                        "<img src=\"" + elem.getimg() + "\" alt=\"Profile Photo\" class=\"img-fluid rounded-circle mr-2\" style=\"height:40px;\">" +
                        "<div class=\"placeee\">" + 
                            "<h6 class=\"mb-1\">" + elem.getname() + "</h6>" + 
                            "<p class=\"mb-1\">message</p>" +
                        "</div>" + 
                        "<small class=\"text-muted\">3 days ago</small>" + 
                    "</div>" +
                "</a>")
    });
    elem.innerHTML = "<table class=\"table table-bordered table-striped mb-0\">" + 
                        str +
                     "</table>"
}

