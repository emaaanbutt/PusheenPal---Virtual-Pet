$(function(){
    let name = localStorage.getItem("name");
    let room = localStorage.getItem("image");

    document.body.style.backgroundImage= `url(${room})`;
    $("#intro").text(`Meet ${name} 🐈‍⬛`);
});

$(function(){
    const images = ['../Images/cat-simple.png', '../Images/cat-simple2.png'];

    let index = 0;
    setInterval(function(){
        index = (index + 1) % images.length;
        $("#cat").attr("src", images[index]);
    }, 3000);
});


$(function(){
    $("#cat").on("mouseenter", function(){
        $("#cat").attr("src", '../Images/cat-love.png');
    });

    $("#cat").on("mouseleave", function(){
        $("#cat").attr("src", '../Images/cat-simple.png');
    });
})


$(function(){

    $("#eat-button").on("click", function() {
        $("#eat-container").addClass("show");
      });
});