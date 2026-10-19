
var to = nameGirl;
var gift_url = giftUrl;
var gift_image_url = giftImage || giftImageBase64;

var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");
var backToPresent = document.getElementById("back-to-present-new");
var legacyBackButton = document.querySelector("#card + #back-to-present");

if (legacyBackButton) {
  legacyBackButton.remove();
}

function init() {
  var graphElem = document.querySelector('.present-box > .side.top .to');
  graphElem.setAttribute('data-before', eventName);
  document.querySelector('#card .title-card').innerHTML = `💘${titleCard}💘`;
  document.querySelector('#card .content-card').innerHTML = `${contentCard}`;
  document.querySelector('#card #gift-photo-one').setAttribute('src', `${giftImage}`);
  document.querySelector('#card .photo-grid .honey:last-child').setAttribute('src', `${giftImageCard}`);

  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
    document.querySelector('.parent').classList.add('card-open');
    backToPresent.classList.add('visible');
  }, false);

  backToPresent.addEventListener("click", function(e){
    e.stopPropagation();
    var parent = document.querySelector('.parent');
    parent.classList.add('card-returning');
    present.classList.remove("open");
    document.getElementById('card').classList.remove('card-show');
    parent.classList.remove('card-open');
    backToPresent.classList.remove('visible');
    window.setTimeout(function(){
      parent.classList.remove('card-returning');
    }, 3600);
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

