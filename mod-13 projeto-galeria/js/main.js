$(function () {
    $("body").removeClass("no-js").addClass("js");

    $(".full .img").css({
        "background-image": "url('images/fulls/01.jpg')",
        "background-repeat": "no-repeat",
        "background-position": "center"
    });

    function setimage(link) {
        let img = link.attr("href");
        $(".full .img").css("background-image", "url('" + img + "')");
        $(".thumbs a").removeClass("active"); 
        link.addClass("active");

    }
    
    setimage($(".thumbs a").first());

    $(".thumbs a").on("click", function (e) {
            e.preventDefault();

            let link = $(this);
            
            $(".full .img").fadeOut("400", function () {
                setimage(link);
                $(this).fadeIn(400);
            });
        });


});