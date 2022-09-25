$(document).ready(function(){
// // ============================امسك عنصر===========================
// let para = $("p")
// // =================================ادي تنسيق بواسطه  css======================
// //  para.css("color","red")
// // ======================== لو عايز اعمل كذا تنسيق مش واحد بس=========================
// para.css({
//     color:"red",
//     backgroundColor:"green"
// })
// // ======================== event  (addeventlistener)     اكتب ازاي========================
// para.on("click",()=>{
//     console.log("done")
// })
// // =======================j qury set in w3school========================
// let inp = $("input")
// let para = $("p")

// inp.on("keyup",()=>{
//     para.html( `<h1> ${inp.val()} </h1>`)  
// })
// // =======================setattribute & getattribute ========================
// let test = inp.attr("title","hello")
// let tes = inp.attr("type")
// console.log(tes)
// // =======================append/prepend & after/befor ========================
// $("div").append(`<h1>sa</h1>`)
// $("div").prepend(`<h1>sa</h1>`)
// $("div").after(`<h1>a</h1>`)
// $("p").before(`<h1> a </h1>`)

// $("button").on("click",()=>{
//     $("div").fadetoggle(1000)
// })
// ===================================== task ==============================================
let imgs = $("img")
imgs.on("mouseenter",()=>{
   imgs.append(` <img src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000" alt="">`)
})














})