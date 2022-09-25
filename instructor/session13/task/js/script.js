$(document).ready(function(){
let imgs = $('img');
// console.log(imgs);
// imgs.on('mouseenter', createElement)
// imgs.on('mouseleave', removeElement)
imgs.hover(createElement, removeElement)
imgs.on('mousemove', moveElement)


function createElement(){
//  console.log(this.src);
 $('body').append(`<img src=${this.src} alt="" id="newImage">`)
      
}
function removeElement(){
// console.log("leave");
$('#newImage').remove();
}

function moveElement(e){
    // console.log("hi");
    $('#newImage').css({
        top: e.clientY,
        left: e.clientX + 35
    })
}



})