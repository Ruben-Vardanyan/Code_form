function f() {
	return click();
}
function s(){
	var x = document.getElementById("i");
	if (x.type == "password") {
		x.type = "text";
	}
	else{
		x.type = "password";
	}
}
function click(){
var i = document.getElementById("i");
var f = document.getElementById("f");
var s = document.getElementById("s");
var p =	document.getElementById("p");
var h1 = document.getElementById("h1");
var box = document.getElementById("box");
var logo = document.getElementById("logo");
	
	if (i.value == "") {
		i.style.borderBottom =  "1px solid orange";
		i.style.color =  "orange"; 
		s.style.color =  "orange"; 
		p.style.color =  "orange"; 
		p.innerHTML = "Code is not filled";
		h1.style.color =  "orange";
		box.style.border =  "5px solid orange";
		f.style.border =  "3px solid orange";
		f.style.color =  "orange";
		logo.style.background = "orange";
		logo.style.border =  "5px solid orange";
	}
	else if(i.value == "Ruben-Vardanyan" || i.value == "Ruben"){
		i.style.borderBottom =  "1px solid lightblue";
		i.style.color =  "lightblue"; 
		s.style.color =  "lightblue"; 
		p.style.color =  "lightblue"; 
		p.innerHTML = "The code is correct";
		h1.style.color =  "lightblue";
		box.style.border =  "5px solid lightblue";
		f.style.border =  "3px solid lightblue";
		f.style.color =  "lightblue";
		logo.style.background = "lightblue";
		logo.style.border =  "5px solid lightblue";
	}
	else{
		
		p.innerHTML = "Code is incorrect";
		i.style.borderBottom =  "1px solid red";
		i.style.color =  "red"; 
		s.style.color =  "red"; 
		p.style.color =  "red"; 
		
		h1.style.color =  "red";
		box.style.border =  "5px solid red";
		f.style.border =  "3px solid red";
		f.style.color =  "red";
		logo.style.background = "red";
		logo.style.border =  "5px solid red";
	}
}
function g(){
	var i = document.getElementById("i");
	var f = document.getElementById("f");
	var s = document.getElementById("s");
	var p =	document.getElementById("p");
	var h1 = document.getElementById("h1");
	var box = document.getElementById("box");
	var logo = document.getElementById("logo");
		i.style.borderBottom =  "1px solid green";
		i.style.color =  "green"; 
		s.style.color =  "green"; 
		p.style.color =  "green"; 
		p.innerHTML = "";
		i.value = "";
		h1.style.color =  "green";
		box.style.border =  "5px solid green";
		f.style.border =  "3px solid green";
		f.style.color =  "green";
		logo.style.background = "green";
		logo.style.border =  "5px solid green";
}
