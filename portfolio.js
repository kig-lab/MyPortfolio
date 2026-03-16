var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
   
function opentab(tabname, event){
  for(let tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(let tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

//CONTACT FORM EMAIL LOGIC
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();  //Prevents the page from refreshing so that js can handle the background data submission


  //Select the submit button

  const submitBtn = this.querySelector("button[type='submit']");

  //Change text while sending
  submitBtn.innerText = "Sending...";
  submitBtn.disabled = true; //Disable the  button to prevent multiple submissions
  emailjs.sendForm(  //grabs user input in html and sends it an email instantly
  //The sending function
  EMAIL_CONFIG.SERVICE_ID,
  EMAIL_CONFIG.TEMPLATE_ID,
   this //THE FORM ITSELF
).then(
  function () {
    submitBtn.innerText = "Successful!";

    //Reset form after a short delay
    setTimeout(() => {
      submitBtn.innerText = "Submit"; //Reset back to submit
      submitBtn.disabled = false; //Re-enable the button
      document.getElementById("contact-form").reset();
    }, 3000); //3 seconds delay
    

 
},
function(error){
  alert("Failed to send the message. Please try again later.");
  console.error(error);
  submitBtn.innerText = "Oops! Try later"; //Revert text
  submitBtn.disabled = false;

     }
 );
});