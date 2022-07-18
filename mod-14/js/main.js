$(function () {
    let $p = $('p');
    let filtrado;
    $(':input').on("keyup", filtrar);

    function filtrar(e) {

        let val = $(this).val();
        // console.log(val);

        if (val.length >= 3) {

            filtrado = $.grep($p.clone(), function (el, i) {
                return $(el).text().indexOf(val) >= 0;
            });
            
            if (filtrado.length) {
                $(".content").empty().append($.map(filtrado, (el, i) => {
                    $(el).html($(el).text().replace(val, "<span class='destaq'>" + val + "</span>"));
                    return $(el);
                }));
            } else {
                $(".content").empty().append("<p>").text("Nenhum resultado encontrado");
            }
        } else {
            $(".content").empty().append($p);
        }
    }
});