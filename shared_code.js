function portrait_warning_visibility() {
  if (window.innerHeight > window.innerWidth)
  {
    document.getElementById("portrait_warning_div").style.display = "block";
  }
  else 
  {
    document.getElementById("portrait_warning_div").style.display = "none";
  }
}

screen.orientation.addEventListener("change", (event) => {
  location.reload();
});
