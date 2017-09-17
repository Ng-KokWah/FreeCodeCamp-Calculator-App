var input=""; 

function updateString(value) {
    input=input+value;
	document.getElementById("inputString").value=input;
}
function calculate() {
	var result=eval(input);
	document.getElementById("inputString").value=result;
	input="";
}
function resetString() {
	input="";
	document.getElementById("inputString").value="";
}