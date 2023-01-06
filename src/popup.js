let state = false;
const popupDiv = document.getElementById("popup");
let img = document.createElement('img');
img.setAttribute('style','width: 150px; height: 150px; border-radius:100px');
popupDiv.append(img);
const btnPopup = document.getElementById("btnPopup");

function createPopup(popupBody) {
  let state = false;
  const options = {
      "isCloseByClickOutside": false,
      "popupClassName": "popup",
  };

  const openClose = {
      open: function open() {
          popupDiv.setAttribute('style','visibility: visible');
          img.setAttribute('src', popupBody);
          state = true;
      },
      close: function close() {
          popupDiv.setAttribute('style','visibility: hidden');
          state = false;
      }
  };

  function popup() {
      if (state === false) {
          openClose.open();
      } else {
          openClose.close();
      }
  }

  function closeByClickOutside() {
      openClose.close();
  }

  function init() {
      btnPopup.addEventListener('click', (event) => {
          event.stopPropagation();
          popup();
      });
      body.addEventListener('click', closeByClickOutside);
  }

  init();
}

const popupBody = "https://avatars.githubusercontent.com/u/80945323?v=4";
createPopup(popupBody);
