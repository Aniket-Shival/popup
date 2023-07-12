
var button = document.createElement("button");
button.innerText = "Open Popup";


button.style.position = "fixed";
button.style.bottom = "20px";
button.style.right = "40px";
button.style.padding = "10px";
button.style.backgroundColor = "blue";
button.style.color = "white";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.zIndex = "9999";

document.body.appendChild(button);

function openPopup() {

    var popup = document.createElement("div");
    popup.style.position = "fixed";
    popup.style.bottom = "15px";
    popup.style.right = "10px";
    popup.style.padding = "20px";
    popup.style.minWidth = "200px";
    popup.style.width = '30%'
    
    popup.style.height = "70%"
    popup.style.marginLeft = "2px";
    popup.style.marginRight = "20px";
  popup.style.padding = "2px";
  popup.style.paddingTop = "40px";
    popup.style.backgroundColor = "none";
   
    popup.style.zIndex = "9999";

    var iframe = document.createElement("iframe");
    iframe.style.minWidth = "300px";
    iframe.style.width = "95%"
    iframe.style.height = "100%";
    iframe.style.border = "none";
     iframe.style.padding = '0';
  iframe.style.backgroundColor='none';
   iframe.style.position = "relative";
    iframe.style.bottom = "0px";
    iframe.style.right = "-20px";

    popup.appendChild(iframe);
    
    var closeButton = document.createElement("button");
    closeButton.innerText = "Close";
    closeButton.style.position = "absolute";
    closeButton.style.top = "0px";
    closeButton.style.right = "0px";
    closeButton.style.padding = "5px";
    closeButton.style.backgroundColor = "red";
    closeButton.style.color = "white";
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "5px";

    popup.appendChild(closeButton);

    document.body.appendChild(popup);

    function closePopup() {
        document.body.removeChild(popup);
    }

    closeButton.addEventListener("click", closePopup);
  const scriptElement = document.getElementById("popup");
console.log("S",scriptElement)
const credValue = scriptElement.getAttribute("cred");
 

    function loadContent(fileUrl) {
        iframe.src = `http://localhost:3000/chatPage/${credValue}`;
      // 
      
    }
    loadContent("yourfile.html");

}

button.addEventListener("click", openPopup);
