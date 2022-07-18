$(function () {

    // var teste = [];
    // $("#home h3").nextAll("p").each(function (i, el) {
    //     teste[i] = $(el).text();
    //     teste = $(el).text().length >= 50 ? $(el).text().substr(0, 50) + "..." : $(el).text();
    //     return $(el).text(teste);

    // });

    $("#home h3").nextAll("p").map(function (i, el) {
        var newP = $(el).text().length >= 50 ? $(el).text().substr(0, 50) + " ...." : $(el).text();
        return $(el).text(newP);
    });

    var navLink = $("#mainNav a.nav-item");

    navLink = navLink.map(function (i, el) {
        // console.log(el);

        let newLik = $(this).attr("href");
        if (newLik.indexOf("#") === 0) {
            console.log(newLik);
            let cadaItem = $($(this).attr("href"));
            if (cadaItem.length) {
                return el;
            }
        }

    });



    // Evendo de click no documento
    navLink.on("click", function (e) {
        e.preventDefault();

        // Guardando o Valor do HREF
        let href = $(this).attr("href");

        // Transformando em um objeto o valor
        let alvo = $(href);

        // Pegando a posição na seção
        let pos = alvo.position().top;



        // Fazendo um scroll animado até o elemento
        $("html, body").animate({ scrollTop: pos }, 1000);
    });

    let navSection = navLink.map(function (i, el) {
        let cadaSection = $($(el).attr("href"));
        return cadaSection;
    });


    // adicionando a classe active pelo scroll
    $(window).on("scroll", function () {
        let scrollTop = $(this).scrollTop();

        let atual = navSection.map(function () {
            let position = $(this).position().top;
            if (position <= scrollTop + 20) {
                return this;
            }

        });

        let ultimo = atual[atual.length - 1];
        let ultimoId = ultimo && ultimo.length ? ultimo[0] : "";

        $("#mainNav").find(".active").removeClass("active");

        $("#mainNav").find(".sr-only").appendTo("a[href='#" + ultimoId + "']");
        $("#mainNav").find("a[href='#" + ultimoId + "']").addClass("active");
    });

});