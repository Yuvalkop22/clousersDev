let state = false;
const body = document.getElementById("body");
const popupDiv = document.getElementById("popup");
let img = document.createElement('img');
img.setAttribute('style','width: 150px; height: 150px; border-radius:100px');
popupDiv.append(img);   
const btnPopup = document.getElementById("btnPopup");
const options = {
    "isCloseByClickOutside": false,
    "popupClassName": "popup",

}
const openClose = {
    open: function open(popupBody){
        popupDiv.setAttribute('style','visibility: visible');
        img.setAttribute('src', popupBody);
        state = true;
    },
    close: function close(){
        popupDiv.setAttribute('style','visibility: hidden');
        state = false;
    }
}
function popup(popupBody, options){
    if (state == false){
        options.open(popupBody);
    }else{
        options.close();
    }
}
function init(){
    const popupBody = "https://avatars.githubusercontent.com/u/80945323?v=4"
    body.addEventListener('click',()=>{
        popup(popupBody,openClose);
    })
    btnPopup.addEventListener('click',()=>{
        popup(popupBody,openClose);
    })
}
init();