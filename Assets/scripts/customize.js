

$(function(){
  const images = $(".image"); 
  images.on("click", function(){
    images.removeClass("selected");
    $(this).addClass("selected");
    const imageSource = $(this).attr("src");
    if (imageSource)
      localStorage.setItem("image", imageSource);
    else
      localStorage.setItem("image", "../Images/pink-bg-room.jpg")
  });
});


$(function(){
  $("#start-button").on("click", function(){
    let name = $("#name").val();
    if (name === "")
    {
      localStorage.setItem("name", $("#name").attr('placeholder'));
    }else{
      localStorage.setItem("name", name);
    }

    window.location.href = "./room.html";
    });
  });

