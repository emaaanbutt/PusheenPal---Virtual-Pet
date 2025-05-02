$(function(){
    let name = localStorage.getItem("name");
    let room = localStorage.getItem("image");

    document.body.style.backgroundImage= `url(${room})`;
    $("#intro").text(`Meet ${name} 🐈‍⬛`);
});