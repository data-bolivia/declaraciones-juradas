$(document).ready(function () {

    var morrisData = Morris.Line({
        element: 'morris-line-chart',
        data: [],
        xkey: 'year',
        ykeys: ['P1', 'P2', 'P3', 'P4'],
        labels: ['ACTIVOS', 'ACTIVOS', 'ACTIVOS', 'ACTIVOS'],
        lineColors: ['#3491EC', '#F92666', '#18D303', '#9D4CF5'],
        smooth: true,
        resize: false
    });

    var morrisDataFuncionario01 = Morris.Bar({
        element: 'morris-line-funcionario1',
        data: [],
        xkey: 'year',
        ykeys: ['activos', 'pasivos', 'neto', 'rentas'],
        labels: ['ACTIVOS', 'PASIVOS', 'NETO', 'RENTAS'],
        smooth: true,
        resize: false
    });

    var morrisDataFuncionario02 = Morris.Bar({
        element: 'morris-line-funcionario2',
        data: [],
        xkey: 'year',
        ykeys: ['activos', 'pasivos', 'neto', 'rentas'],
        labels: ['ACTIVOS', 'PASIVOS', 'NETO', 'RENTAS'],
        smooth: true,
        resize: false
    });

    var morrisDataFuncionario03 = Morris.Bar({
        element: 'morris-line-funcionario3',
        data: [],
        xkey: 'year',
        ykeys: ['activos', 'pasivos', 'neto', 'rentas'],
        labels: ['ACTIVOS', 'PASIVOS', 'NETO', 'RENTAS'],
        smooth: true,
        resize: false
    });

    var morrisDataFuncionario04 = Morris.Bar({
        element: 'morris-line-funcionario4',
        data: [],
        xkey: 'year',
        ykeys: ['activos', 'pasivos', 'neto', 'rentas'],
        labels: ['ACTIVOS', 'PASIVOS', 'NETO', 'RENTAS'],
        smooth: true,
        resize: false
    });

    function agregar_funcionario_en_linea_de_tiempo(parent_div, documento) {
        var div_disponibles = $('div#with-datos div.sin_funcionario');
        var attr_img_src = parent_div.find('img').attr('src');
        var thumbnail_text = parent_div.find('div.thumbnail-bar').text();
        if (div_disponibles.length > 0) {
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
            div_seleccionado.addClass('con_funcionario');
        }
    }

    function quitar_funcionario_de_linea_de_tiempo(documento) {
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
        div_seleccionado.removeClass('con_funcionario');
    }

    function filtar_datos_de_funcionarios() {
        var documentos = $('div#with-datos div.con_funcionario input')
            .map(function () {
                return $(this).attr('data-value');
            })
            .get();

        var json_data = null;
        $.ajax({
            type: 'GET',
            url: 'data/declaraciones/data.json',
            async: false,
            success: function(data){
            console.log('descargando data');
            json_data = data;
            console.log(json_data);
        }});
        //var temp_data = '[{"apellidos": "MORALES AYMA", "ci": 2763595, "ciudad": "ORURO", "data": [ { "activos": 1127000, "declaracion_id": 405325, "fecha": "2006-01-21", "neto": 887000, "pasivos": 240000, "rentas": 244530 }, { "activos": 1684835, "declaracion_id": 918771, "fecha": "2010-01-21", "neto": 1576226, "pasivos": 108609, "rentas": 60000 }, { "activos": 3071592, "declaracion_id": 1625009, "fecha": "2014-10-24", "neto": 3047848, "pasivos": 23744, "rentas": 268200 } ], "nombres": "JUAN EVO" }, { "apellidos": "GARC�A LINERA", "ci": 3007962, "ciudad": "COCHABAMBA", "data": [ { "activos": 44000, "declaracion_id": 405326, "fecha": "2006-01-21", "neto": 44000, "pasivos": 0, "rentas": 134100 }, { "activos": 466800, "declaracion_id": 918801, "fecha": "2010-01-20", "neto": 466800, "pasivos": 0, "rentas": 58000 }, { "activos": 1259281, "declaracion_id": 1669289, "fecha": "2015-02-23", "neto": 1259281, "pasivos": 0, "rentas": 112315 } ], "nombres": "�LVARO MARCELO" }, { "apellidos": "CHOQUEHUANCA CESPEDES", "ci": 2434792, "ciudad": "LA PAZ", "data": [ { "activos": 551864, "declaracion_id": 405361, "fecha": "2006-01-22", "neto": 551864, "pasivos": 0, "rentas": 115200 }, { "activos": 927577, "declaracion_id": 923960, "fecha": "2010-01-29", "neto": 927577, "pasivos": 0, "rentas": 98000 }, { "activos": 2687232, "declaracion_id": 1711299, "fecha": "2015-05-29", "neto": 718570, "pasivos": 1968662, "rentas": 416400 } ], "nombres": "DAVID" }, { "apellidos": "QUINTANA TABORGA", "ci": 2663228, "ciudad": "LA PAZ", "data": [ { "activos": 906000, "declaracion_id": 405371, "fecha": "2006-01-22", "neto": 730000, "pasivos": 176000, "rentas": 96300 }, { "activos": 1053274, "declaracion_id": 919707, "fecha": "2010-01-25", "neto": 933274, "pasivos": 120000, "rentas": 11500 }, { "activos": 727900, "declaracion_id": 1641347, "fecha": "2014-12-22", "neto": 667900, "pasivos": 60000, "rentas": 241600 } ], "nombres": "JUAN RAMON" }, { "apellidos": "MOLDIZ MERCADO", "ci": 2479835, "ciudad": "LA PAZ", "data": [ { "activos": 2119732, "declaracion_id": 1709880, "fecha": "2015-05-27", "neto": 2114860, "pasivos": 4872, "rentas": 62379 } ], "nombres": "JOSE HUGO" }, { "apellidos": "ROMERO BONIFAZ", "ci": 2335722, "ciudad": "LA PAZ", "data": [ { "activos": 1024000, "declaracion_id": 445659, "fecha": "2006-07-28", "neto": 1024000, "pasivos": 0, "rentas": 0 }, { "activos": 2812000, "declaracion_id": 1651420, "fecha": "2015-12-01", "neto": 2812000, "pasivos": 0, "rentas": 94670 }, { "activos": 2912000, "declaracion_id": 1709174, "fecha": "2015-05-26", "neto": 2912000, "pasivos": 0, "rentas": 94670 } ], "nombres": "CARLOS GUSTAVO" }, { "apellidos": "LEDEZMA CORNEJO", "ci": 928553, "ciudad": "COCHABAMBA", "data": [ { "activos": 1553780, "declaracion_id": 1657766, "fecha": "2015-01-23", "neto": 1527780, "pasivos": 26000, "rentas": 69920 }, { "activos": 1553780, "declaracion_id": 1686543, "fecha": "2015-06-04", "neto": 1529780, "pasivos": 24000, "rentas": 46089 } ], "nombres": "JORGE" }, { "apellidos": "ORELLANA HALKYER", "ci": 2873713, "ciudad": "COCHABAMBA", "data": [ { "activos": 1055200, "declaracion_id": 407658, "fecha": "2006-01-31", "neto": 503200, "pasivos": 552000, "rentas": 144000 }, { "activos": 996800, "declaracion_id": 454879, "fecha": "2006-09-15", "neto": 444800, "pasivos": 552000, "rentas": 84288 }, { "activos": 560970, "declaracion_id": 931859, "fecha": "2010-02-18", "neto": 385970, "pasivos": 175000, "rentas": 136000 }, { "activos": 2608624, "declaracion_id": 1657786, "fecha": "2015-01-23", "neto": 2304055, "pasivos": 304569, "rentas": 315131 } ], "nombres": "RENE GONZALO" }, { "apellidos": "ARCE CATACORA", "ci": 2364274, "ciudad": "LA PAZ", "data": [ { "activos": 624665, "declaracion_id": 405394, "fecha": "2006-01-23", "neto": 472299, "pasivos": 152366, "rentas": 96257 }, { "activos": 738111, "declaracion_id": 920323, "fecha": "2010-01-25", "neto": 736911, "pasivos": 1200, "rentas": 182252 }, { "activos": 1150741, "declaracion_id": 1657832, "fecha": "2015-01-23", "neto": 865130, "pasivos": 285611, "rentas": 281427 } ], "nombres": "LUIS ALBERTO" }, { "apellidos": "RAMOS MORALES", "ci": 82111, "ciudad": "LA PAZ", "data": [ { "activos": 1635885, "declaracion_id": 1657910, "fecha": "2015-01-23", "neto": 1635885, "pasivos": 0, "rentas": 109916 } ], "nombres": "ANA VERONICA" }, { "apellidos": "CLAROS HINOJOSA", "ci": 3618854, "ciudad": "COCHABAMBA", "data": [ { "activos": 1272500, "declaracion_id": 1657648, "fecha": "2015-01-23", "neto": 1272500, "pasivos": 0, "rentas": 256680 } ], "nombres": "MILTON" }, { "apellidos": "NAVARRO MIRANDA", "ci": 3678427, "ciudad": "POTOSI", "data": [ { "activos": 46000, "declaracion_id": 382421, "fecha": "2005-05-10", "neto": 46000, "pasivos": 0, "rentas": 11360 }, { "activos": 50200, "declaracion_id": 403066, "fecha": "2006-11-01", "neto": 50200, "pasivos": 0, "rentas": 10500 }, { "activos": 567200, "declaracion_id": 915562, "fecha": "2010-01-15", "neto": 567200, "pasivos": 0, "rentas": 10500 }, { "activos": 1585042, "declaracion_id": 1657810, "fecha": "2015-01-23", "neto": 736700, "pasivos": 848342, "rentas": 174000 } ], "nombres": "F�LIX C�SAR" }, { "apellidos": "VELASCO CONDORI", "ci": 6025115, "ciudad": "LA PAZ", "data": [ { "activos": 80000, "declaracion_id": 1657753, "fecha": "2015-01-23", "neto": 80000, "pasivos": 0, "rentas": 42000 } ], "nombres": "VIRGINIA" }, { "apellidos": "TRIGOSO AGUDO", "ci": 464216, "ciudad": "LA PAZ", "data": [ { "activos": 15200, "declaracion_id": 1658426, "fecha": "2015-01-26", "neto": 15200, "pasivos": 0, "rentas": 190400 } ], "nombres": "JOSE GONZALO" }, { "apellidos": "CAMPERO NAVA", "ci": 6444570, "ciudad": "COCHABAMBA", "data": [ { "activos": 40000, "declaracion_id": 1660422, "fecha": "2015-01-28", "neto": 40000, "pasivos": 0, "rentas": 155000 } ], "nombres": "ARIANA" }, { "apellidos": "MOREIRA LOPEZ", "ci": 3474138, "ciudad": "LA PAZ", "data": [ { "activos": 0, "declaracion_id": 939125, "fecha": "2010-03-05", "neto": 0, "pasivos": 0, "rentas": 21000 }, { "activos": 0, "declaracion_id": 939129, "fecha": "2010-03-05", "neto": 0, "pasivos": 0, "rentas": null }, { "activos": 168000, "declaracion_id": 1410433, "fecha": "2013-01-25", "neto": 168000, "pasivos": 0, "rentas": 131200 }, { "activos": 179000, "declaracion_id": 1532195, "fecha": "2014-01-28", "neto": 179000, "pasivos": 0, "rentas": 146650 }, { "activos": 262000, "declaracion_id": 1657533, "fecha": "2015-01-23", "neto": 262000, "pasivos": 0, "rentas": 193210 }, { "activos": 958000, "declaracion_id": 1667678, "fecha": "2015-02-18", "neto": 958000, "pasivos": 0, "rentas": 193210 } ], "nombres": "MARIA ALEXANDRA" }, { "apellidos": "AGUILAR G�MEZ", "ci": 340252, "ciudad": "LA PAZ", "data": [ { "activos": 584069, "declaracion_id": 445761, "fecha": "2006-07-29", "neto": 378969, "pasivos": 205100, "rentas": 226510 }, { "activos": 620300, "declaracion_id": 1534165, "fecha": "2014-01-30", "neto": 610300, "pasivos": 10000, "rentas": 144000 }, { "activos": 618500, "declaracion_id": 1707764, "fecha": "2015-05-25", "neto": 603500, "pasivos": 15000, "rentas": 252384 } ], "nombres": "ROBERTO IVAN" }, { "apellidos": "ACHACOLLO TOLA", "ci": 3233369, "ciudad": "SANTA CRUZ", "data": [ { "activos": 80000, "declaracion_id": 402164, "fecha": "2006-06-01", "neto": 80000, "pasivos": 0, "rentas": null }, { "activos": 297000, "declaracion_id": 919540, "fecha": "2010-01-25", "neto": 249400, "pasivos": 47600, "rentas": null }, { "activos": 661140, "declaracion_id": 1657915, "fecha": "2015-01-23", "neto": 460636, "pasivos": 200504, "rentas": 123200 } ], "nombres": "NEMESIA" }, { "apellidos": "SILES NU�EZ DEL PRADO", "ci": 2989681, "ciudad": "SANTA CRUZ", "data": [ { "activos": 2007790, "declaracion_id": 1657644, "fecha": "2015-01-23", "neto": 2007790, "pasivos": 0, "rentas": 489200 } ], "nombres": "HUGO JOSE" }, { "apellidos": "VALDIVIA BAUTISTA", "ci": 3137804, "ciudad": "COCHABAMBA", "data": [ { "activos": 142000, "declaracion_id": 451374, "fecha": "2006-08-31", "neto": 142000, "pasivos": 0, "rentas": 126190 }, { "activos": 76097, "declaracion_id": 1657912, "fecha": "2015-01-23", "neto": -243903, "pasivos": 320000, "rentas": 190000 } ], "nombres": "LENNY TATIANA" }, { "apellidos": "GROUX CANEDO", "ci": 3335003, "ciudad": "LA PAZ", "data": [ { "activos": 66128, "declaracion_id": 922280, "fecha": "2010-01-28", "neto": 66128, "pasivos": 0, "rentas": 182252 }, { "activos": 919241, "declaracion_id": 1675878, "fecha": "2015-09-03", "neto": 357431, "pasivos": 561810, "rentas": 141420 } ], "nombres": "PABLO C�SAR" }, { "apellidos": "PACO DUR�N", "ci": 4001027, "ciudad": "POTOSI", "data": [ { "activos": 0, "declaracion_id": 915142, "fecha": "2010-01-14", "neto": 0, "pasivos": 0, "rentas": 24700 }, { "activos": 456494, "declaracion_id": 1655591, "fecha": "2015-01-19", "neto": 101469, "pasivos": 355025, "rentas": 37986 }, { "activos": 0, "declaracion_id": 1657808, "fecha": "2015-01-23", "neto": -307300, "pasivos": 307300, "rentas": null } ], "nombres": "MARIANELA" }, { "apellidos": "MONTA�O RIVERA", "ci": 2903651, "ciudad": "COCHABAMBA", "data": [ { "activos": 2313300, "declaracion_id": 443146, "fecha": "2006-07-14", "neto": 2298300, "pasivos": 15000, "rentas": 117000 }, { "activos": 413630, "declaracion_id": 1533904, "fecha": "2014-01-30", "neto": 413630, "pasivos": 0, "rentas": null } ], "nombres": "TITO ROLANDO" } ]';
        //var json_data = $.parseJSON(temp_data);
        var data_funcionarios_seleccionados = [];
        for (var i = 0; i < documentos.length; i++) {
            var doc = documentos[i];
            $.each(json_data, function (index, item) {
                if (item.ci == doc) {
                    data_funcionarios_seleccionados.push({
                        'funcionario': item.nombres+ ' ' + item.apellidos,
                        'ci': item.ci,
                        'data': item.data
                    });
                }
            });
        }

        return data_funcionarios_seleccionados;
    }

    function actualizar_lineas_de_tiempo(data) {
        var global_data = [];
        var keys = ['P1', 'P2', 'P3', 'P4']
        var key_index = 0;
        global_data.push({year: '2003-01-01'});
        global_data.push({year: '2016-01-01'});
        /* Actualizar linea de tiempo principal*/
        $.each(data, function (index, item) {
            $.each(item.data, function (i, it) {
                //console.log(it.fecha); console.log(it.activos);
                switch (key_index) {
                    case 0:
                        global_data.push({year: it.fecha, 'P1': it.activos});
                        break;
                    case 1:
                        global_data.push({year: it.fecha, 'P2': it.activos});
                        break;
                    case 2:
                        global_data.push({year: it.fecha, 'P3': it.activos});
                        break;
                    case 3:
                        global_data.push({year: it.fecha, 'P4': it.activos});
                        break;
                }
            });
            key_index++;
        });
        //console.log(mi_data);
        morrisData.setData(global_data);

        /* Actualizar linea de tiempo del primer funcionarioa */
        var funcionario1_data = [];
        var funcionario2_data = [];
        var funcionario3_data = [];
        var funcionario4_data = [];
        funcionario1_data.push({year: '2003-01-01'});
        funcionario2_data.push({year: '2003-01-01'});
        funcionario3_data.push({year: '2003-01-01'});
        funcionario4_data.push({year: '2003-01-01'});
        key_index = 1;
        /* Actualizar linea de tiempo principal*/
        $.each(data, function (index, item) {
            switch (key_index) {
                case 1:
                    $.each(item.data, function (i, it) {
                        funcionario1_data.push({
                            year: it.fecha,
                            'activos': it.activos,
                            'pasivos': it.pasivos,
                            'neto': it.neto,
                            'rentas': it.rentas
                        });
                    });
                    break;

                case 2:
                    $.each(item.data, function (i, it) {
                        funcionario2_data.push({
                            year: it.fecha,
                            'activos': it.activos,
                            'pasivos': it.pasivos,
                            'neto': it.neto,
                            'rentas': it.rentas
                        });
                    });
                    break;
                case 3:
                    $.each(item.data, function (i, it) {
                        funcionario3_data.push({
                            year: it.fecha,
                            'activos': it.activos,
                            'pasivos': it.pasivos,
                            'neto': it.neto,
                            'rentas': it.rentas
                        });
                    });
                    break;
                case 4:
                    $.each(item.data, function (i, it) {
                        funcionario4_data.push({
                            year: it.fecha,
                            'activos': it.activos,
                            'pasivos': it.pasivos,
                            'neto': it.neto,
                            'rentas': it.rentas
                        });
                    });
                    break;
            }
            key_index++;
        });

        funcionario1_data.push({year: '2016-01-01'});
        funcionario2_data.push({year: '2016-01-01'});
        funcionario3_data.push({year: '2016-01-01'});
        funcionario4_data.push({year: '2016-01-01'});

        if (funcionario1_data.length > 2) {
            $('h2#label-funcionario1').text(data[0].funcionario);
        }
        if (funcionario2_data.length > 2) {
            $('h2#label-funcionario2').text(data[1].funcionario);
        }
        if (funcionario3_data.length > 2) {
            $('h2#label-funcionario3').text(data[2].funcionario);
        }
        if (funcionario4_data.length > 2) {
            $('h2#label-funcionario4').text(data[3].funcionario);
        }

        morrisDataFuncionario01.setData(funcionario1_data);
        morrisDataFuncionario02.setData(funcionario2_data);
        morrisDataFuncionario03.setData(funcionario3_data);
        morrisDataFuncionario04.setData(funcionario4_data);
    }

    // funcionario seleccionado o deseleccionado
    $('div.side-nav input.checkbox').on('click', function (event) {
        var checkbox = $(this);
        var documento = checkbox.attr('data-value');
        var parent_div = checkbox.parent();

        var total_funcionarios_seleccionados = $('div.side-nav input.checkbox:checked').length;
        if (total_funcionarios_seleccionados > 4) {
            return false;
        }

        if (0 == total_funcionarios_seleccionados) {
            $('div#with-datos').addClass('hidden');
            $('div#no-datos').removeClass('hidden');
        }
        else {
            $('div#with-datos').removeClass('hidden');
            $('div#no-datos').addClass('hidden');
        }

        if (checkbox.is(':checked')) {
            agregar_funcionario_en_linea_de_tiempo(parent_div, documento)
        }
        else {
            quitar_funcionario_de_linea_de_tiempo(documento)
        }

        var monto_de_declaraciones = filtar_datos_de_funcionarios();
        actualizar_lineas_de_tiempo(monto_de_declaraciones);
    });
});
