/*let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';
function multiply(num1,num2){
	result = num1*num2;
	console.log(result);
}
multiply(4,7);
multiply(20,20);
document.querySelector("html").onclick = function(){
	alert("Ouch! Stop poking me!");
}*/
let myImage = document.querySelector('img');

myImage.onclick = function(){
let mySrc=myImage.getAttribute("src");
if (mySrc==="IMG_7592.JPG"){
	myImage.setAttribute ("src","IMG_8142.JPG");
}else{
	myImage.setAttribute("src","IMG_7592.JPG");
}
}
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
	let userName = prompt("Please enter your name.");
	if(!userName){
		setUserName();
	}else{
		localStorage.setItem("name",userName);
		myHeading.textContent = "Hello, "+userName;
	}
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello, ' + storedName;
}
myButton.onclick = function(){
	setUserName();
}
