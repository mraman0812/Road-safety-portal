function pledge(){
    alert("Thank you for pledging to follow road safety rules.");
}

document.getElementById("feedbackForm").addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("thankYouMsg").style.display = "block";

});

function toggleMenu() {
  document.querySelector("nav ul").classList.toggle("active");
}
