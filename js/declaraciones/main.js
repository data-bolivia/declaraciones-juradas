/**
 *
 * Created by nux on 02/07/2015.
 */

$(document).ready(function () {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    var count = 0;

    $(".side-nav .thumbnail .btn-checkbox .checkbox").click(function () {
        if (this.checked) {
            $("#btn-analize").removeAttr("disabled");
            count = count + 1;
        }
        else {
            count = count - 1;
            if (count == 0) {
                $("#btn-analize").attr("disabled", "disabled");
            }
        }
    });

    $('div.side-nav input.checkbox').on('click', function(event){
        var checkbox = $(this);
        var documento = checkbox.attr('data-value');
        var parent_div = checkbox.parent();

        var total_funcionarios_seleccionados = $('div.side-nav input.checkbox:checked').length;
        if (total_funcionarios_seleccionados > 4)
        {
            return false;
        }

        if (0 == total_funcionarios_seleccionados)
        {
            $('div#with-datos').addClass('hidden');
            $('div#no-datos').removeClass('hidden');
        }
        else
        {
            $('div#with-datos').removeClass('hidden');
            $('div#no-datos').addClass('hidden');
        }

        if (checkbox.is(':checked'))
        {
            var div_disponibles = $('div#with-datos div.sin_funcionario');
            var attr_img_src = parent_div.find('img').attr('src');
            var thumbnail_text = parent_div.find('div.thumbnail-bar').text();
            if (div_disponibles.length > 0)
            {
                var div_seleccionado = div_disponibles.first();
                var input = div_seleccionado.find('input');
                var img = div_seleccionado.find('img');
                var div_text = div_seleccionado.find('div.thumbnail-bar');

                img.attr('src', attr_img_src);
                input.attr('data-value', documento);
                div_text.text(thumbnail_text);

                div_seleccionado.removeClass('sin_funcionario');
                div_seleccionado.removeClass('hidden');
                div_seleccionado.addClass(documento);
            }
        }
        else
        {
            var div_seleccionado = $('div#with-datos div.' + documento);
            var input = div_seleccionado.find('input');
            var img = div_seleccionado.find('img');
            var div_text = div_seleccionado.find('div.thumbnail-bar');

            img.attr('src', 'data/funcionarios/1.jpg');
            input.attr('data-value', '');
            div_text.text('');

            div_seleccionado.addClass('hidden');
            div_seleccionado.addClass('sin_funcionario');
            div_seleccionado.removeClass(documento);
        }
    });
});
