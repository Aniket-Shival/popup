
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
    popup.style.bottom = "20px";
    popup.style.right = "-20px";
    popup.style.padding = "20px";
    popup.style.minWidth = "340px";
    popup.style.width = '30%'
    // popup.style.minHeight = "90vh";
    popup.style.height = "70%"
    popup.style.marginLeft = "2px";
    popup.style.marginRight = "20px";
  popup.style.padding = "2px";
  popup.style.paddingTop = "40px";
    popup.style.backgroundColor = "white";
   
    // popup.style.border = "1px 5px 5px solid black";
    popup.style.zIndex = "9999";


//     var urlheading = document.createElement("div");
//     urlheading.innerText = window.location.href;
//     urlheading.style.width = "100%";

//     urlheading.style.border = "none";

//     popup.appendChild(urlheading);



    var iframe = document.createElement("iframe");
    iframe.style.width = "100%";
    iframe.style.height = "95vh";
    iframe.style.border = "none";
     iframe.style.padding = '-20px';
  iframe.style.backgroundColor='whitesmoke';


    popup.appendChild(iframe);


    var closeButton = document.createElement("button");
    closeButton.innerText = "Close";
    closeButton.style.position = "absolute";
    closeButton.style.top = "10px";
    closeButton.style.right = "10px";
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

    function loadContent(fileUrl) {
        iframe.src = 'http://localhost:3000/';
    }
    loadContent("yourfile.html");

}

button.addEventListener("click", openPopup);

console.log(window.location.href)

const idValueDirect = element.cred;
console.log(idValueDirect);
