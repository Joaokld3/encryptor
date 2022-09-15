function encrypt() {  
  var text = document.getElementById("inputText").value.toLowerCase();//All text in lower case 
  if (text == "") {
    document.getElementById("secure").style.display = "none";
    alert("Please input any text")
    inputText.focus();
  } else {
    var ciphertext = text.replace(/e/gim, "enter");//acording to the requirement these are the specs to this function: 
    var ciphertext = ciphertext.replace(/o/gim, "ober");
    var ciphertext = ciphertext.replace(/i/gim, "imes");
    var ciphertext = ciphertext.replace(/a/gim, "ai");
    var ciphertext = ciphertext.replace(/u/gim, "ufat");
    document.getElementById("textResult").innerHTML = ciphertext;//Text encrypted will be displayed in the textarea:
    document.getElementById("btnCopy").style.display = "show";//show the copy button
    document.getElementById("btnCopy").style.display = "inherit"; 
    document.getElementById("question").style.display = "none";//question image dissapear
    document.getElementById("alert").style.display = "none";//alert message dissapear
    document.getElementById("secure").style.display = "show";//show b-max secure
    document.getElementById("secure").style.display = "inherit";//the same position than its father image
    document.getElementById("answer").style.display = "none";//image answer dissapear
    document.getElementById("inputText").value = "";//makes the inputText blank    
    alert('Press accept, later click Copy button to obtain the encrypted text');
  }
}
function decrypt() {
  var text = document.getElementById("inputText").value.toLowerCase();//this is the opposite of the previous one  
  if (text == "") {
    document.getElementById("answer").style.display = "none";
    alert("Please input any text")
    inputText.focus();
  }else{
  var ciphertext = text.replace(/enter/gim, "e");  
  var ciphertext = ciphertext.replace(/ober/gim, "o");
  var ciphertext = ciphertext.replace(/imes/gim, "i");
  var ciphertext = ciphertext.replace(/ai/gim, "a");
  var ciphertext = ciphertext.replace(/ufat/gim, "u");
  document.getElementById("textResult").innerHTML = ciphertext;//Text decrypted will be displayed in the textarea 
  document.getElementById("answer").style.display = "show";
  document.getElementById("answer").style.display = "inherit";
  document.getElementById("secure").style.display = "none";// the other two images dissapear
  document.getElementById("question").style.display = "none";
  document.getElementById("inputText").value = "";
  inputText.focus();
  }
}
function copy() {
  var content = document.querySelector("#textResult");//save in the var what exists in the textarea
  content.select(); //selec all the content of the textArea
  document.execCommand("copy");//copy command
  alert("¡TEXT COPIED! Press accept and later ctr+v and click decrypt");  
  inputText.focus();//makes the cursor focus later of click copy button
}
