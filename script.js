//syntax of jquery
// const $element = $();

const $intro = $('#intro')

// elements/tags
// $("p")
// // id
// $("#intro")
// // class
// $(".class-here")

// // selects direct descendatns
// $("main > p")
// // selects main AND all p elements
// $("main,p")
// // grabs the even children of main tag
// $("main:nth-child(even)")
// // grabs the p elements inside main elements with the class title
// $("main p.title")

// adding /selecting elements

const $deadLang = $("#def-dead-language p")

// CREATING ELEMENTS
//you dont need $ before variables if you are creating them

const newDiv = $("<div></div>") //creates a div
const shortDiv = $("<div />")
const classDic = $("<div class='class' id='unique' />")
const nestedDIv = $("<div><p>Nested div by a dead language</p></div>")
let hello = "hello"
const interpolDiv = $(`<div>${hello}</div>`)
console.log(interpolDiv)

// EVENTS
//.on => addEventListener
// $interpolDiv.on("click", function(e) {
//     alert("SALVE :D")
// })

// $interpolDiv.click(function(e) {
//     console.log("hello was clicked")
// })

// $interpolDiv.off('click')

$intro.css("background-color", "gold")

//placing content around
const $main = $("main")

//before
$main.before("<p>before main</p>")

//after

$main.after("<p>after main</p>")

//top of internal children
$main.prepend("<p>prepend main</p>")

//bottom of internal children
$main.append("<p>inside at the bottom</p>")

//remove ELEMENTS

$main.remove()

//attributes

$("img").attr("src") //returns value
// $("img").attr("src", "url here") //setting value 

//remove attributes
// $("img").removeAttr("src")

//CLASSES
//add
$main.addClass("class")
//remove
$main.removeClass("class")
// toggle
$main.toggleClass("toggle")

$("img").click(function(e) {
    $("img").toggleClass("example")
    $("img").slideUp(4000)
})

//slide 
$main.slideUp(2000)

//hide
$("img").hide()
$('img').show()

// each => forEach
// eq() => used to index into the array of dom 