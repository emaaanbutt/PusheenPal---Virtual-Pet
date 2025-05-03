$(function(){
    let name = localStorage.getItem("name");
    let room = localStorage.getItem("image");

    document.body.style.backgroundImage= `url(${room})`;
    document.body.style.backgroundRepeat = "no-repeat"
    $("#intro").text(`Meet ${name} 🐈‍⬛`);
});

$(function () {
    let isSoundOn = false;
    const bgMusic = $("#bg-music")[0];
    const meowSound = $("#meow-sound")[0];
    let meowInterval;
  
    $("#start-sounds").on("click", function () {
      isSoundOn = !isSoundOn;
  
      if (isSoundOn) {
        $("#sound-icon").attr("src", "../Images/sound-on.png");
        bgMusic.play();
        
        meowInterval = setInterval(() => {
          meowSound.currentTime = 0;
          meowSound.play();
        }, 10000);
      } else {
        $("#sound-icon").attr("src", "../Images/no-sound.png");
        bgMusic.pause();
        bgMusic.currentTime = 0;
        
        clearInterval(meowInterval);
      }
    });
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
        $("#eat-container").toggleClass("show");
        $("#paint-area").hide();
        $("#hats-display").hide();
      });

});



$(function(){
    $("#pizza-button").on("click", function(){
        $("#cat").attr("src", '../Images/cat-pizza.png');
    });

    $("#shake-button").on("click", function(){
        $("#cat").attr("src", '../Images/cat-shake.png');
    });

    $("#sushi-button").on("click", function(){
        $("#cat").attr("src", '../Images/cat-sushi.png');
    });
});

$(function(){
    let painting = false;
    let color = "black";

    const canvas = document.getElementById("drawing-canvas");
    const ctx = canvas.getContext("2d");

    $("#paint-button").on("click", function(){
        $("#eat-container").removeClass("show");
        $("#hats-display").hide();
        $("#paint-area").toggle(() => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        });

    });

    $(".color-btn").on("click", function(){
        color = $(this).data("color");
    });

    $("#eraser").on("click", function(){
        color = "white"; 
    });

    $("#clear").on("click", function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    canvas.addEventListener("mousedown", function(e) {
        painting = true;
        draw(e); 
    });

    canvas.addEventListener("mouseup", function() {
        painting = false;
        ctx.beginPath();
    });

    canvas.addEventListener("mouseleave", function() {
        painting = false;
        ctx.beginPath(); 
    });

    canvas.addEventListener("mousemove", function(e) {
        if (!painting) return;

        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ctx.lineWidth = 3;
        ctx.lineCap = "round";
        ctx.strokeStyle = color;

        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();  
        ctx.moveTo(x, y);
    });
});




$(function(){

    $("#hats-display").hide();
    $("#hats-button").on("click", function(){
        $("#eat-container").removeClass("show");
        $("#paint-area").hide();
        $("#hats-display").toggle();
    })

    const hats = ['../Images/hat1.png', '../Images/hat2.png', '../Images/hat3.png', '../Images/hat4.png', '../Images/hat5.png', '../Images/hat6.png', '../Images/hat7.png']
    let index=0;

    $("#a2").on("click", function(){
        index = (index+1) % hats.length;
        $("#hat img").attr("src", hats[index]);
    });

    $("#a1").on("click", function(){
        index = (index-1 + hats.length) % hats.length;
        $("#hat img").attr("src", hats[index]);
    });
});




