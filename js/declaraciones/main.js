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

        var temp_data = '[ { "apellidos": "MORALES AYMA", "ci": 2763595, "ciudad": "ORURO", "data": [ { "activos": 1127000, "declaracion_id": 1, "fecha": "2006-01-21", "neto": 887000, "pasivos": 240000, "rentas": 244530 }, { "activos": 1684835, "declaracion_id": 2, "fecha": "2010-01-21", "neto": 1576226, "pasivos": 108609, "rentas": 60000 }, { "activos": 3071592, "declaracion_id": 3, "fecha": "2014-10-24", "neto": 3047848, "pasivos": 23744, "rentas": 268200 } ], "nombres": "JUAN EVO" }, { "apellidos": "GARCIA LINERA", "ci": 3007962, "ciudad": "COCHABAMBA", "data": [ { "activos": 44000, "declaracion_id": 4, "fecha": "2006-01-21", "neto": 44000, "pasivos": 0, "rentas": 134100 }, { "activos": 466800, "declaracion_id": 5, "fecha": "2010-01-20", "neto": 466800, "pasivos": 0, "rentas": 58000 }, { "activos": 1259281, "declaracion_id": 6, "fecha": "2015-02-23", "neto": 1259281, "pasivos": 0, "rentas": 112315 } ], "nombres": "ALVARO MARCELO" }, { "apellidos": "CHOQUEHUANCA CESPEDES", "ci": 2434792, "ciudad": "LA PAZ", "data": [ { "activos": 551864, "declaracion_id": 7, "fecha": "2006-01-22", "neto": 551864, "pasivos": 0, "rentas": 115200 }, { "activos": 927577, "declaracion_id": 8, "fecha": "2010-01-29", "neto": 927577, "pasivos": 0, "rentas": 98000 }, { "activos": 2687232, "declaracion_id": 9, "fecha": "2015-05-29", "neto": 718570, "pasivos": 1968662, "rentas": 416400 } ], "nombres": "DAVID" }, { "apellidos": "QUINTANA TABORGA", "ci": 2663228, "ciudad": "LA PAZ", "data": [ { "activos": 182832, "declaracion_id": 10, "fecha": "2006-01-22", "neto": 140387, "pasivos": 42445, "rentas": 96300 }, { "activos": 1066334, "declaracion_id": 11, "fecha": "2010-01-25", "neto": 1050037, "pasivos": 16297, "rentas": 11500 }, { "activos": 330281, "declaracion_id": 12, "fecha": "2014-12-22", "neto": 294302, "pasivos": 35979, "rentas": 241600 } ], "nombres": "JUAN RAMON" }, { "apellidos": "MOLDIZ MERCADO", "ci": 2479835, "ciudad": "LA PAZ", "data": [ { "activos": 485392, "declaracion_id": 13, "fecha": "2015-05-27", "neto": 445934, "pasivos": 39458, "rentas": 62379 } ], "nombres": "JOSE HUGO" }, { "apellidos": "ROMERO BONIFAZ", "ci": 2335722, "ciudad": "LA PAZ", "data": [ { "activos": 1554634, "declaracion_id": 14, "fecha": "2006-07-28", "neto": 1506566, "pasivos": 48068, "rentas": 0 }, { "activos": 409928, "declaracion_id": 15, "fecha": "2015-12-01", "neto": 393640, "pasivos": 16288, "rentas": 94670 }, { "activos": 1247345, "declaracion_id": 16, "fecha": "2015-05-26", "neto": 1216323, "pasivos": 31022, "rentas": 94670 } ], "nombres": "CARLOS GUSTAVO" }, { "apellidos": "LEDEZMA CORNEJO", "ci": 928553, "ciudad": "COCHABAMBA", "data": [ { "activos": 1355480, "declaracion_id": 17, "fecha": "2015-01-23", "neto": 1314267, "pasivos": 41213, "rentas": 69920 }, { "activos": 529071, "declaracion_id": 18, "fecha": "2015-06-04", "neto": 480697, "pasivos": 48374, "rentas": 46089 } ], "nombres": "JORGE" }, { "apellidos": "ORELLANA HALKYER", "ci": 2873713, "ciudad": "COCHABAMBA", "data": [ { "activos": 1894808, "declaracion_id": 19, "fecha": "2006-01-31", "neto": 1852798, "pasivos": 42010, "rentas": 144000 }, { "activos": 456420, "declaracion_id": 20, "fecha": "2006-09-15", "neto": 442819, "pasivos": 13601, "rentas": 84288 }, { "activos": 305478, "declaracion_id": 21, "fecha": "2010-02-18", "neto": 287426, "pasivos": 18052, "rentas": 136000 }, { "activos": 1935454, "declaracion_id": 22, "fecha": "2015-01-23", "neto": 1903593, "pasivos": 31861, "rentas": 315131 } ], "nombres": "RENE GONZALO" }, { "apellidos": "ARCE CATACORA", "ci": 2364274, "ciudad": "LA PAZ", "data": [ { "activos": 1861321, "declaracion_id": 23, "fecha": "2006-01-23", "neto": 1843402, "pasivos": 17919, "rentas": 96257 }, { "activos": 1774650, "declaracion_id": 24, "fecha": "2010-01-25", "neto": 1746693, "pasivos": 27957, "rentas": 182252 }, { "activos": 363972, "declaracion_id": 25, "fecha": "2015-01-23", "neto": 340563, "pasivos": 23409, "rentas": 281427 } ], "nombres": "LUIS ALBERTO" }, { "apellidos": "RAMOS MORALES", "ci": 82111, "ciudad": "LA PAZ", "data": [ { "activos": 470329, "declaracion_id": 26, "fecha": "2015-01-23", "neto": 424213, "pasivos": 46116, "rentas": 109916 } ], "nombres": "ANA VERONICA" }, { "apellidos": "CLAROS HINOJOSA", "ci": 3618854, "ciudad": "COCHABAMBA", "data": [ { "activos": 426925, "declaracion_id": 27, "fecha": "2015-01-23", "neto": 377965, "pasivos": 48960, "rentas": 256680 } ], "nombres": "MILTON" }, { "apellidos": "NAVARRO MIRANDA", "ci": 3678427, "ciudad": "POTOSI", "data": [ { "activos": 1199851, "declaracion_id": 28, "fecha": "2005-05-10", "neto": 1179125, "pasivos": 20726, "rentas": 11360 }, { "activos": 938224, "declaracion_id": 29, "fecha": "2006-11-01", "neto": 912952, "pasivos": 25272, "rentas": 10500 }, { "activos": 310390, "declaracion_id": 30, "fecha": "2010-01-15", "neto": 294116, "pasivos": 16274, "rentas": 10500 }, { "activos": 385825, "declaracion_id": 31, "fecha": "2015-01-23", "neto": 341364, "pasivos": 44461, "rentas": 174000 } ], "nombres": "FELIX CESAR" }, { "apellidos": "VELASCO CONDORI", "ci": 6025115, "ciudad": "LA PAZ", "data": [ { "activos": 1517908, "declaracion_id": 32, "fecha": "2015-01-23", "neto": 1470509, "pasivos": 47399, "rentas": 42000 } ], "nombres": "VIRGINIA" }, { "apellidos": "TRIGOSO AGUDO", "ci": 464216, "ciudad": "LA PAZ", "data": [ { "activos": 27056, "declaracion_id": 33, "fecha": "2015-01-26", "neto": -12144, "pasivos": 39200, "rentas": 190400 } ], "nombres": "JOSE GONZALO" }, { "apellidos": "CAMPERO NAVA", "ci": 6444570, "ciudad": "COCHABAMBA", "data": [ { "activos": 842000, "declaracion_id": 34, "fecha": "2015-01-28", "neto": 810357, "pasivos": 31643, "rentas": 155000 } ], "nombres": "ARIANA" }, { "apellidos": "MOREIRA LOPEZ", "ci": 3474138, "ciudad": "LA PAZ", "data": [ { "activos": 404672, "declaracion_id": 35, "fecha": "2010-03-05", "neto": 363227, "pasivos": 41445, "rentas": 21000 }, { "activos": 1372072, "declaracion_id": 36, "fecha": "2010-03-05", "neto": 1325478, "pasivos": 46594, "rentas": null }, { "activos": 20377, "declaracion_id": 37, "fecha": "2013-01-25", "neto": -1596, "pasivos": 21973, "rentas": 131200 }, { "activos": 934854, "declaracion_id": 38, "fecha": "2014-01-28", "neto": 895395, "pasivos": 39459, "rentas": 146650 }, { "activos": 103486, "declaracion_id": 39, "fecha": "2015-01-23", "neto": 76359, "pasivos": 27127, "rentas": 193210 }, { "activos": 1132674, "declaracion_id": 40, "fecha": "2015-02-18", "neto": 1092641, "pasivos": 40033, "rentas": 193210 } ], "nombres": "MARIA ALEXANDRA" }, { "apellidos": "AGUILAR GOMEZ", "ci": 340252, "ciudad": "LA PAZ", "data": [ { "activos": 674278, "declaracion_id": 41, "fecha": "2006-07-29", "neto": 652357, "pasivos": 21921, "rentas": 226510 }, { "activos": 855811, "declaracion_id": 42, "fecha": "2014-01-30", "neto": 818907, "pasivos": 36904, "rentas": 144000 }, { "activos": 1871945, "declaracion_id": 43, "fecha": "2015-05-25", "neto": 1838611, "pasivos": 33334, "rentas": 252384 } ], "nombres": "ROBERTO IVAN" }, { "apellidos": "ACHACOLLO TOLA", "ci": 3233369, "ciudad": "SANTA CRUZ", "data": [ { "activos": 233454, "declaracion_id": 44, "fecha": "2006-06-01", "neto": 201622, "pasivos": 31832, "rentas": null }, { "activos": 587176, "declaracion_id": 45, "fecha": "2010-01-25", "neto": 562244, "pasivos": 24932, "rentas": null }, { "activos": 931938, "declaracion_id": 46, "fecha": "2015-01-23", "neto": 901238, "pasivos": 30700, "rentas": 123200 } ], "nombres": "NEMESIA" }, { "apellidos": "SILES NUNEZ DEL PRADO", "ci": 2989681, "ciudad": "SANTA CRUZ", "data": [ { "activos": 1477497, "declaracion_id": 47, "fecha": "2015-01-23", "neto": 1440492, "pasivos": 37005, "rentas": 489200 } ], "nombres": "HUGO JOSE" }, { "apellidos": "VALDIVIA BAUTISTA", "ci": 3137804, "ciudad": "COCHABAMBA", "data": [ { "activos": 1788206, "declaracion_id": 48, "fecha": "2006-08-31", "neto": 1768944, "pasivos": 19262, "rentas": 126190 }, { "activos": 449541, "declaracion_id": 49, "fecha": "2015-01-23", "neto": 401174, "pasivos": 48367, "rentas": 190000 } ], "nombres": "LENNY TATIANA" }, { "apellidos": "GROUX CANEDO", "ci": 3335003, "ciudad": "LA PAZ", "data": [ { "activos": 1235791, "declaracion_id": 50, "fecha": "2010-01-28", "neto": 1207958, "pasivos": 27833, "rentas": 182252 }, { "activos": 1965840, "declaracion_id": 51, "fecha": "2015-09-03", "neto": 1919315, "pasivos": 46525, "rentas": 141420 } ], "nombres": "PABLO CESAR" }, { "apellidos": "PACO DURAN", "ci": 4001027, "ciudad": "POTOSI", "data": [ { "activos": 1732526, "declaracion_id": 52, "fecha": "2010-01-14", "neto": 1700655, "pasivos": 31871, "rentas": 24700 }, { "activos": 991606, "declaracion_id": 53, "fecha": "2015-01-19", "neto": 981554, "pasivos": 10052, "rentas": 37986 }, { "activos": 382581, "declaracion_id": 54, "fecha": "2015-01-23", "neto": 362842, "pasivos": 19739, "rentas": null } ], "nombres": "MARIANELA" }, { "apellidos": "MONTANO RIVERA", "ci": 2903651, "ciudad": "COCHABAMBA", "data": [ { "activos": 1597005, "declaracion_id": 55, "fecha": "2006-07-14", "neto": 1558769, "pasivos": 38236, "rentas": 117000 }, { "activos": 805048, "declaracion_id": 56, "fecha": "2014-01-30", "neto": 776414, "pasivos": 28634, "rentas": null } ], "nombres": "TITO ROLANDO" } ]';
        var json_data = $.parseJSON(temp_data);
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
        else
        {
            $('h2#label-funcionario1').text('');
        }
        if (funcionario2_data.length > 2) {
            $('h2#label-funcionario2').text(data[1].funcionario);
        }
        else
        {
            $('h2#label-funcionario2').text('');
        }
        if (funcionario3_data.length > 2) {
            $('h2#label-funcionario3').text(data[2].funcionario);
        }
        else
        {
            $('h2#label-funcionario3').text('');
        }
        if (funcionario4_data.length > 2) {
            $('h2#label-funcionario4').text(data[3].funcionario);
        }
        else
        {
            $('h2#label-funcionario4').text('');
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
