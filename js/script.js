function myFirstApp(name, age) { 

alert("Привет, меня зовут " + name + " и это моя первая программа!"); 

	function showSkills() { 
		let skills = ["html5 " , "css ", "windows 10 ", "ios 12"]; 

		for (let i = 0; i < skills.length; i++) { 
		document.write("Я владею: " +skills[i]+ "<br>"); 
		} 
	} 

	showSkills(); 

	function checkAge() { 
		if (age > 18) { 
		document.write("Добро пожаловать, " +name); 
		} else { 
		document.write("Покиньте эту страницу."); 
		} 
	} 

	checkAge(); 

	function calcPow(num) { 
		document.write(num * num); 
	} 

	calcPow(4); 
	} 

myFirstApp("Артем", 19)