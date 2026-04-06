if(!localStorage.getItem("loggedIn") && !window.location.href.includes("login.html")){
  window.location = "login.html";
}
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("show");
});

/* PAGE TRANSITION */
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e){
    if(this.href){
      e.preventDefault();
      document.body.classList.remove("show");
      setTimeout(() => {
        window.location = this.href;
      }, 400);
    }
  });
});

