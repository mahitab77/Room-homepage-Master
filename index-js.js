
////////////image and text carousel /////////////////////////////

function carousel(imagearray) {
  var headerarray=document.getElementsByClassName("upheader")
  var paraarray=document.getElementsByClassName("upparagraph")
  var nextbutton = document.getElementById("next")
  var prevbutton = document.getElementById("prev")
  var imagecontainer=document.getElementById("upperleft")
  //initial values for text 
  var currentIndex = 0
  var intialheader=document.getElementById("firsth").innerText
  var intialparag=document.getElementById("firstpar").innerText

  function changeBackgroundAndText(index) {
    imagecontainer.style.backgroundImage = `url(${imagearray[index]})`
    document.getElementById("firsth").innerText =headerarray[index].innerText
    document.getElementById("firstpar").innerText= paraarray[index].innerText
    if (index==0) {
      document.getElementById("firsth").innerText =intialheader
      document.getElementById("firstpar").innerText=intialparag
    }
  }
  function shownextimage (){
    currentIndex=currentIndex+1
    if (currentIndex >= imagearray.length) {
      currentIndex = 0
    }
    changeBackgroundAndText(currentIndex)
  }
  function showprevimage  (){
    currentIndex = currentIndex - 1
    if (currentIndex < 0) {
      currentIndex = imagearray.length - 1
    }
    changeBackgroundAndText(currentIndex);
  }
  prevbutton.onclick = showprevimage 
  nextbutton.onclick = shownextimage
}
//////////////////////////////hover over shop anchor///////////
var anchorcontainer=document.getElementById("anchorwitharrow")
var shopanchor=document.getElementById("shopanc")
var arrowanchor=document.getElementById("arrowanc")
function greywhenhover(){
  shopanchor.style.color = 'hsl(0, 0%, 63%)'
  arrowanchor.style.backgroundImage="url('./images/icon-arrow-grey.svg')"
  arrowanchor.style.backgroundSize='55px, 15px, cover'
}
function blackwhenout(){
  shopanchor.style.color='black'
  arrowanchor.style.backgroundImage="url('./images/icon-arrow.svg')"
}
///////function to hide and show navbar in mobile display/////
var menuicon = document.getElementById("navmenu")
var closeicon = document.getElementById("navclose")
var navbar = document.getElementById("navbar")
function shownavbar() {
  navbar.style.display = 'flex'
  closeicon.style.display = 'flex'
  document.getElementById("navlogo").style.display='none'
  menuicon.style.display='none'
  document.getElementById("dimmingcontainer").style.display = 'block'
}
function hidenavbar() {
  navbar.style.display = 'none';
  closeicon.style.display = 'none';
  document.getElementById("navlogo").style.display='flex'
  menuicon.style.display='flex'
  document.getElementById("dimmingcontainer").style.display = 'none'
}
///////////////////////////////////////////////////////////

function checkViewport() {
  if (window.matchMedia("(max-width: 375px)").matches) {
      console.log("Mobile view")
      menuicon.style.display='flex'
      navbar.style.display = 'none'
      document.getElementById("dimmingcontainer").style.display = 'none'

      menuicon.onclick = shownavbar
      closeicon.onclick = hidenavbar

      anchorcontainer.onmouseover=blackwhenout
      
      var imagearray=["./images/mobile-image-hero-1.jpg",
      "./images/mobile-image-hero-2.jpg",
      "./images/mobile-image-hero-3.jpg",
      ];
      carousel(imagearray)
  } 
  else {

      console.log("Desktop view")
      navbar.style.display = 'flex'
      closeicon.style.display = 'none'
      menuicon.style.display='none'
      document.getElementById("navlogo").style.display='flex'

      anchorcontainer.onmouseover=greywhenhover
      anchorcontainer.onmouseout=blackwhenout

      var imagearray=["./images/desktop-image-hero-1.jpg",
      "./images/desktop-image-hero-2.jpg",
      "./images/desktop-image-hero-3.jpg",
      ];
      carousel(imagearray)
  }
}

// Run checkViewport initially and whenever the window is resized
checkViewport()
window.addEventListener('resize', checkViewport)
