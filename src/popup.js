let state = false;
// const body = document.getElementById("body");
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
function closeByClickOutside(options){
    options.close();
}
function init(){
    const popupBody = "https://avatars.githubusercontent.com/u/80945323?v=4"
    btnPopup.addEventListener('click',(event)=>{
        event.stopPropagation();
        popup(popupBody,openClose);
    })
    body.addEventListener('click',()=>{
        closeByClickOutside(openClose);
    })
}
init();