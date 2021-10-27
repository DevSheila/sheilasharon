const form = document.getElementById("contactForm")
const username = document.getElementById("username");
const useremail = document.getElementById("useremail");
const subject = document.getElementById("subject");
const message = document.getElementById("message");


form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const name = username.value;
    let msg= `${name} your message has been sent succcessfully`;
    let msgClass = 'alert-success';
    displayFeedback(msg,msgClass);
    clearFields();
    
});

function displayFeedback(message , msgClass) {
    const feedback = document.querySelector('.feedback');
    
    //make the feedback view visible 

    feedback.classList.add('showItem', 'alert', msgClass);
    //set the timeout for feedback 

    feedback.innerHTML = `${message}`;

    setTimeout(function(){
        feedback.classList.remove('showItem', 'alert', msgClass);
        feedback.innerHTML='';
    
    }, 3000);
};

function clearFields(){
    username.value ='';
    useremail.value =''; 
    subject.value ='';
    message.value ='';
    
};

