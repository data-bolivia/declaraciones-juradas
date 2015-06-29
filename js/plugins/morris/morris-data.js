// Morris.js Charts sample data for SB Admin template

$(function () {
    // Line Chart
    Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'morris-line-chart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [
            { Año: '2001', Patrimonio: 80200},
            { Año: '2002', Patrimonio: 78300},
            { Año: '2003', Patrimonio: 82000 },
            { Año: '2004', Patrimonio: 83900 },
            { Año: '2005', Patrimonio: 79200 },
            { Año: '2006', Patrimonio: 85900 },
            { Año: '2007', Patrimonio: 79000 },
            { Año: '2008', Patrimonio: 168000 },
            { Año: '2009', Patrimonio: 159200 },
            { Año: '2010', Patrimonio: 14200 },
            { Año: '2011', Patrimonio: 88200 },
            { Año: '2012', Patrimonio: 88900 },
            { Año: '2013', Patrimonio: 81900 },
            { Año: '2014', Patrimonio: 84900 },
            { Año: '2015', Patrimonio: 87000 },
        ],
        // The name of the data record attribute that contains x-Patrimonios.
        xkey: 'Año',
        // A list of names of data record attributes that contain y-Patrimonios.
        ykeys: ['Patrimonio'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Patrimonio'],
        // Disables line smoothing
        smooth: false,
        resize: true
    });
});

/*
 Morris.Line({
 element: 'line-example',
 continuousLine: false,
 data: [
 { y: '2005'},
 { y: '2006', a1: 1127000, a2: 44000, a3: 551864, a4: 906000 },
 { y: '2007', a1: 1127000, a2: 44000, a3: 551864, a4: 906000 },
 { y: '2008', a1: 1127000, a2: 44000, a3: 551864, a4: 906000 },
 { y: '2009', a1: 1127000, a2: 44000, a3: 551864, a4: 906000 },
 { y: '2010', a1: 1684835,  a2: 466800, a3: 927577, a4: 1053274 },
 { y: '2011', a1: 1684835,  a2: 466800, a3: 927577, a4: 1053274 },
 { y: '2012', a1: 1684835,  a2: 466800, a3: 927577, a4: 1053274 },
 { y: '2013', a1: 1684835,  a2: 466800, a3: 927577, a4: 1053274 },
 { y: '2014', a1: 1684835,  a2: 466800, a3: 927577, a4: 1053274 },
 { y: '2015', a1: 3071592, a2: 1259281, a3: 2687232, a4: 727900 },
 { y: '2016' }
 ],
 xkey: 'y',
 ykeys: ['a1', 'a2', 'a3', 'a4'],
 labels: [
 'MORALES AYMA JUAN EVO',
 'GARCÍA LINERA ÁLVARO MARCELO',
 'CHOQUEHUANCA CESPEDES DAVID',
 'QUINTANA TABORGA JUAN RAMON'
 ]
 });


 Morris.Line({
 element: 'line-example',
 continuousLine: true,
 data: [
 { y: '2005'},

 { y: '2006-01-21', a1: 1127000, a2: 44000, a3: null, a4: null },
 { y: '2006-01-22', a1: null, a2: null, a3: 551864, a4: 906000 },

 { y: '2010-01-20', a1: null, a2: 466800, a3: null, a4: null },
 { y: '2010-01-21', a1: 1684835, a2: null, a3: null, a4: null },
 { y: '2010-01-25', a1: null, a2: null, a3: null, a4: 1053274 },
 { y: '2010-01-29', a1: null, a2: null, a3: 927577, a4: null },

 { y: '2014-10-24', a1: 3071592, a2: null, a3: null, a4: null },
 { y: '2014-12-22', a1: null, a2: null, a3: null, a4: 727900 },
 { y: '2015-02-23', a1: null, a2: 1259281, a3: null, a4: null },
 { y: '2015-05-29', a1: null, a2: null, a3: 2687232, a4: null },

 { y: '2016' }
 ],
 xkey: 'y',
 ykeys: ['a1', 'a2', 'a3', 'a4'],
 labels: [
 'MORALES AYMA JUAN EVO',
 'GARCÍA LINERA ÁLVARO MARCELO',
 'CHOQUEHUANCA CESPEDES DAVID',
 'QUINTANA TABORGA JUAN RAMON'
 ]
 //,events: ['2006-01-01', '2010-02-01', '2015-03-01']
 });


 Morris.Line({
 element: 'line-example',
 data: [
 { y: '2006', a1: 100, a2: 200, a3: 120, a4: 130 },
 { y: '2007', a1: 75,  a2: 165, a3: 120, a4: 130 },
 { y: '2008', a1: 50,  a2: 40, a3: 120, a4: 130 },
 { y: '2009', a1: 75,  a2: 65, a3: 120, a4: 130 },
 { y: '2010', a1: 50,  a2: 40, a3: 120, a4: 130 },
 { y: '2011', a1: 75,  a2: 565, a3: 120, a4: 130},
 { y: '2012', a1: 100, a2: 90, a3: 120, a4: 130 }
 ],
 xkey: 'y',
 ykeys: ['a1', 'a2', 'a3', 'a4'],
 labels: ['Series A', 'Series B']
 });
 */