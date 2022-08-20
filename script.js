function encrypt() {
  var text = document.getElementById("inputText").value.toLowerCase();//All text in lower case 
  var ciphertext = text.replace(/e/gim, "enter");//acording to the requirement these are the specs to this function: 
  var ciphertext = ciphertext.replace(/o/gim, "ober");
  var ciphertext = ciphertext.replace(/i/gim, "imes");
  var ciphertext = ciphertext.replace(/a/gim, "ai");
  var ciphertext = ciphertext.replace(/u/gim, "ufat");
  document.getElementById("textResult").innerHTML = ciphertext;//Text encrypted will be displayed in the textarea:
  document.getElementById("btnCopy").style.display = "show";//show the copy button
  document.getElementById("btnCopy").style.display = "inherit";
  document.getElementById("question").style.display = "none";
  document.getElementById("alert").style.display = "none";
  document.getElementById("secure").style.display = "show";
  document.getElementById("secure").style.display = "inherit";
  document.getElementById("answer").style.display = "none";
}
function decrypt() {
  var text = document.getElementById("inputText").value.toLowerCase();//this is the opposite of the previous one  
  var ciphertext = text.replace(/enter/gim, "e");  
  var ciphertext = ciphertext.replace(/ober/gim, "o");
  var ciphertext = ciphertext.replace(/imes/gim, "i");
  var ciphertext = ciphertext.replace(/ai/gim, "a");
  var ciphertext = ciphertext.replace(/ufat/gim, "u");
  document.getElementById("textResult").innerHTML = ciphertext;//Text decrypted will be displayed in the textarea
  document.getElementById("answer").style.display = "show";
  document.getElementById("answer").style.display = "inherit";
  document.getElementById("secure").style.display = "none";
  document.getElementById("question").style.display = "none";
}
function copy() {
  var content = document.querySelector("#textResult");//save in the var what exists in the textarea
  content.select(); //selec all the content
  document.execCommand("copy");//cut it for paste
  alert("¡TEXT COPIED! Press acept and later ctr+v and clic decrypt");  
  inputText.focus();
  inputText.select();
}
