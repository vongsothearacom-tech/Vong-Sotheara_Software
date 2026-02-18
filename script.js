let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Backend Developer", "QA tester"],
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 1200,
  loop: true,
});
// Initialize EmailJS
// Initialize EmailJS
emailjs.init("7fxDh6ahSxTko2nnC");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // stop page refresh

    emailjs
      .sendForm(
        "service_5vdwkzl", // your service ID
        "template_jn3bm48", // your template ID
        this,
      )
      .then(function () {
        alert("Message has been sent successfully! ✅");
        document.getElementById("contact-form").reset();
      })
      .catch(function (error) {
        console.error("EmailJS Error:", error);
        alert("Failed to send message ❌");
      });
  });
