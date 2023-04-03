var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);// Dekh yahan setGradient() is liye call nhi kiya kuki hame fuction suddenly
                                              //call nhi karana a hame usse just eventlistener m add karna h aur batana h
                                              //ki jab bhi event ho to ye function chale.
color2.addEventListener("input", setGradient);