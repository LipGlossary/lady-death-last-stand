// used to display form on index.html
let showForm = function() {
    document.getElementById("contactForm").style.visibility="visible";
    document.getElementById("show_form").style.visibility="hidden";
}

// used to hide the form on index.html
let cancelForm = function() {
    document.getElementById("contactForm").style.visibility="hidden";
    document.getElementById("show_form").style.visibility="visible";
}

// used for waiting text after form submission
let waitForm = function() {
    document.getElementById("newsletterForm").style.visibility="hidden";  
    let waiting = document.createElement("div");
    waiting.innerHTML= "<h1>WAITING...</h1>";
    waiting.setAttribute("id", "waiting");
    document.getElementById("contactForm").appendChild(waiting);
}

let accepted = function() {
    let accepted = document.getElementById("waiting");
    accepted.setAttribute("id", "accepted");
    accepted.innerHTML="<h2>YOUR SUBMISSION IS ACCEPTED</h2>";
}

let entryTextToggle = function (){
    document.getElementById("emailAddress").value="";
}

$(document).ajaxStart(()=>{
        waitForm();
});

$('#submitForm').on('click', function(e){
    e.preventDefault();
    let email = document.getElementById('emailAddress').value,
    url = 'https://script.google.com/macros/s/AKfycbyGVZrr-8zrh2zWzQ9L4aDm3l3VHOCQwSX7LwsxKaXgDitQd1sc/exec';
    let packet = {'emailAddress':email};

    let sub = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: packet
    }).done(()=>{
        accepted();
        setTimeout(()=>{
        cancelForm();
        let form = document.getElementById("show_form");
        form.style.visibility="hidden";
        },2000);
    }).fail(()=>{
        console.log("Try again later.")
    });
});
