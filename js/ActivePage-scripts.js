// JavaScript Document

var nav = document.getElementById("nav");

var menu = nav.getElementsByClassName("menu");

	for(var i = 0; i < menu.length; i++)
	{
	 menu[i].addEventListener("click", function() {
				
	 var current = document.getElementsByClassName("active");
		 
		 current[0].className = current[0].className.replace(" active", "");
		 
		 this.className += " active";
		 
		 
			});
		}