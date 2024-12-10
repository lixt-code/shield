// INDEX
/* 
freeze

bggreen(selector, index)
bgblack(selector, index)
bgwhite(selector, index)
bgcolor(selector, index, color)      bgcolorall(selector, color)

style(selector, index, decor, value) - NOT WORKING (decor)

bglogo(color)

imgbw(selector, index)               allimgbw()
imgneg(selector, index)              allimgneg()
blur(selector, index)                allblur()
sepia(selector, index)               allsepia()

txtdecor(selector, index, decor)
ffamily(selector, index, family)

span(selector, index)
worddecor(selector, index, spanindex, decor, value) - NOT WORKING (decor)

Mickey(index)                        MickeyAll()
mmmm(selector, index)
Folks(index)
inserttxt(selector, index, txt)      inserttextAll(selector, txt)

append(selector, index, selector2, index2)
remove(selector, index, selector2, index2)
before(selector, index, selector2, index2, selector3, index3)

classe(selector, index, classe)      classeAll(selector, classe)
classeinAll(selector, index, classe)
noclasse(selector, index, classe)

ruotaTutto(selector)


-----------

var script = document.createElement("script"); script.setAttribute("src", "https://nozrecords.com/lixt/mmmm.js"); document.head.appendChild(script);

var link = document.createElement("link"); link.setAttribute("rel", "stylesheet"); link.setAttribute("href", "https://nozrecords.com/lixt/mmmm.css"); document.head.appendChild(link); 


*/

//VARIABLES

var cred = "#ec0000";
var cblue = "#4b88ca";
var corange = "#f56100";
var cgrey = "#6e7e90";
var cblue2 = "#167BBF";
var lblue = "#eaf4ff";


function freeze() {
    window.onbeforeunload = function(){ return 'Reload?'};
} 


// BG COLOR

function bggreen(selector, index) {
    document.querySelectorAll(selector)[index].style.backgroundColor = '#0f0';
}

function bgblack(selector, index) {
    document.querySelectorAll(selector)[index].style.backgroundColor = "black";
}

function bgwhite(selector, index) {
    document.querySelectorAll(selector)[index].style.backgroundColor = "white";
}

function bgtransparent(selector, index) {
    document.querySelectorAll(selector)[index].style.backgroundColor = "transparent";
}

function bgcolor(selector, index, color){
     document.querySelectorAll(selector)[index].style.backgroundColor = color;
}

function bgcolorall(selector, color){
    for (var i=0; i< document.querySelectorAll(selector).length; i++){
         document.querySelectorAll(selector)[i].style.backgroundColor = color;
    }
}

function bgtranspall(selector){
    for (var i=0; i< document.querySelectorAll(selector).length; i++){
         document.querySelectorAll(selector)[i].style.backgroundColor = "transparent";
    }
}

// ELEMENTS

function style(selector, index, decor, value){
    document.querySelectorAll(selector)[index].style.decor = value;
}

function bglogo(color) {
    document.querySelectorAll(".page-header__middle")[0].style.backgroundColor = color;
}

function imgbw(selector, index){
    document.querySelectorAll(selector)[index].style.filter = "hue-rotate(105deg) invert(0%) brightness(150%) contrast(200%) saturate(10%) opacity(70%)";
}

function allimgbw(){
    for (var i=0; i< document.querySelectorAll(".entry__media").length; i++ ) {
document.querySelectorAll(".entry__media")[i].style.filter = "hue-rotate(105deg) invert(0%) brightness(150%) contrast(200%) saturate(10%) opacity(70%)";
}
}

function imgneg(selector, index){
document.querySelectorAll(selector)[index].style.filter = "hue-rotate(105deg) invert(100%)";
}

function allimgneg(){
    for (var i=0; i< document.querySelectorAll(".entry__media").length; i++ ) {
document.querySelectorAll(".entry__media")[i].style.filter = "hue-rotate(105deg) invert(100%)";
}
}

function blur(selector, index) {
    document.querySelectorAll(selector)[index].style.filter = 'blur(10px)';
}

function allblur(){
    for (var i=0; i< document.querySelectorAll(".entry__media").length; i++ ) {
document.querySelectorAll(".entry__media")[i].style.filter = 'blur(10px)';
}
}

function sepia(selector, index){
    document.querySelectorAll(selector)[index].style.filter = "sepia(100%) opacity(35%) invert(100%) hue-rotate(125deg)";
}

function allsepia(){
    for (var i=0; i< document.querySelectorAll(".entry__media").length; i++ ) {
document.querySelectorAll(".entry__media")[i].style.filter = "sepia(100%) opacity(35%) invert(100%) hue-rotate(125deg)";
}
}

// TEXT

function txtdecor(selector, index, decor){
    document.querySelectorAll(selector)[index].style.textDecorationLine = decor; 
}

function ffamily(selector, index, family){
    document.querySelectorAll(selector)[index].style.fontFamily = family;
}

function span(selector, index){
    var replace = "";
for(var i=0; i<document.querySelectorAll(selector)[index].innerHTML.split(" ").length; i++) {
    replace += "<span>"+document.querySelectorAll(selector)[index].innerHTML.split(" ")[i]+" "+"</span>"
}
document.querySelectorAll(selector)[index].innerHTML = replace;
}

function worddecor(selector, index, spanindex, decor, value){
    document.querySelectorAll(selector)[index].querySelectorAll("span")[spanindex].style.decor = value;
}


// INSERTS

function Mickey(index){
   document.querySelectorAll("picture source")[index].src = "https://www.gratistodo.com/wp-content/uploads/2016/02/mickey-mouse-08-800x500.jpg";
}

function MickeyAll(){
    for (var i=0; i< document.querySelectorAll("picture source").length; i++ ) {
        document.querySelectorAll("picture source")[i].srcset = "https://img1.picmix.com/output/stamp/normal/0/1/1/2/1712110_2324d.gif";
    
     
 }
 {
    setTimeout(function () { MickeyAll(); }, 10000);
  }
}
//https://www.gratistodo.com/wp-content/uploads/2016/02/mickey-mouse-08-800x500.jpg

function Folks(index){
   document.querySelectorAll("picture source")[index].src = "https://i.ytimg.com/vi/AYZz_qYw_j4/maxresdefault.jpg";
}

function mmmm(selector, index){
    document.querySelectorAll(selector)[index].innerHTML = "MEDIAMEZZOMONDOMERDAMEDIAMEZZOMONDOMERDAMEDIAMEZZOMONDOMERDAMEDIAMEZZOMONDOMERDAMEDIAMEZZO"
}

function inserttxt(selector, index, txt){
    document.querySelectorAll(selector)[index].innerHTML = txt;
}

function inserttxtAll(selector, txt){
     for (var i=0; i< document.querySelectorAll(selector).length; i++ ) {
document.querySelectorAll(selector)[i].innerHTML = txt;
}
}

function append(selector, index, selector2, index2){
    document.querySelectorAll(selector)[index].appendChild(document.querySelectorAll(selector2)[index2])
}

function remove(selector, index, selector2, index2){
    document.querySelectorAll(selector)[index].removeChild(document.querySelectorAll(selector2)[index2])
}

function before(selector, index, selector2, index2, selector3, index3){
    document.querySelectorAll(selector)[index].insertBefore(document.querySelectorAll(selector2)[index2], document.querySelectorAll(selector3)[index3])
}

function createimg(linkelm, selector, index){
    var image = document.createElement('img');
    var link = linkelm;
    image.src = link;
    
    document.querySelectorAll(selector)[index].appendChild(image);
}

function logo4sky(){
    var image = document.createElement('img');
    image.classList.add("sky");
    image.src = "https://nozrecords.com/lixt/midia/sky.gif";
    
    document.querySelectorAll(".page-header__middle__center")[0].removeChild(document.querySelectorAll("h1")[0])

    document.querySelectorAll(".page-header__middle__center")[0].appendChild(image);
}

function logoBuridda(){
    var image = document.createElement('img');
    image.src = "https://nozrecords.com/lixt/midia/la_Buridda.png";
    
    document.querySelectorAll(".page-header__middle__center")[0].removeChild(document.querySelectorAll("h1")[0]);

    document.querySelectorAll(".page-header__middle__center")[0].appendChild(image);

  
     document.querySelectorAll(".rep-slim-header__center a")[0].removeChild(document.querySelectorAll(".repubblica-logo")[0])

    document.querySelectorAll(".rep-slim-header__center")[0].appendChild(image);
}



//TXT SCROLL

function scrolltxt (selector, index, text) {

var parent = document.querySelectorAll(selector)[index].parentNode
var child = document.querySelectorAll(selector)[index]

parent.classList.add("outer");
child.classList.add("content");
child.classList.add("loop");


var outer = document.querySelector(".outer");
var content = outer.querySelector('.content');

content.innerHTML = text;

repeatContent(content, outer.offsetWidth);

var el = outer.querySelector('.loop');
el.innerHTML = el.innerHTML + el.innerHTML + el.innerHTML + el.innerHTML + el.innerHTML + el.innerHTML + el.innerHTML + el.innerHTML + el.innerHTML + el.innerHTML;

function repeatContent(el, till) {
    var html = el.innerHTML;
    //var counter = 0; // prevents infinite loop
    
    while (el.offsetWidth < till && counter < 100) {
        el.innerHTML += html;
        counter += 1;
    }
}
}


//TXT BLINK

function blink (selector, index, text) {

    var parent = document.querySelectorAll(selector)[index].parentNode
    var child = document.querySelectorAll(selector)[index]
    
    parent.classList.add("outerbk");
    child.classList.add("contentbk");
    child.classList.add("loopbk");
    child.classList.add("slowblur");

   // var outer = document.querySelectorAll(".outerbk")[index];
   // var content = outer.querySelectorAll('.contentbk')[index];
   var outer = parent;
    var content = child;
    child.innerHTML = text;
    
    repeatContent(content, outer.offsetWidth);
    
    var el = outer.querySelector('.loopbk');
    el.innerHTML = " l i x t l i x t l i x t l i x t l i x t l i x t l i x t l i x t " + el.innerHTML + " l i x t l i x t l i x t l i x t l i x t l i x t l i x t l i x t " + el.innerHTML ;
    
    function repeatContent(el, till) {
        var html = el.innerHTML;
        //var counter = 0; // prevents infinite loop
        
        while (el.offsetWidth < till && counter < 100) {
            el.innerHTML += html;
            counter += 1;
        }
    }
    }

//ANIMATIONS

function classe(selector, index, classe) {
    document.querySelectorAll(selector)[index].classList.add(classe);
}

function noclasse(selector, index, classe) {
    document.querySelectorAll(selector)[index].classList.remove(classe);
}

function ruotaTutto(selector) {
    document.querySelectorAll(selector).forEach((el) => {
        el.classList.add("rotate");
    });
}

function classeAll(selector, classe) {
    document.querySelectorAll(selector).forEach((el) => {
        el.classList.add(classe);
    });
}

function classeinAll(selector, index, classe) {
    document.querySelectorAll(selector).forEach((el) => {
        el.classList.add(classe);
    });
}

function noclasseAll(selector, classe) {
    document.querySelectorAll(selector).forEach((el) => {
        el.classList.remove(classe);
    });
}





  /* NAVIGATION */

  function nextact(selector, index){   
    var ele = document.querySelectorAll(selector)[index];   
    window.scrollTo(ele.offsetLeft,ele.offsetTop); }
