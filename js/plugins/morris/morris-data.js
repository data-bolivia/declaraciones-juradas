// Morris.js Charts sample data for SB Admin template

$(function () {
    // Line Chart
    Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'morris-line-chart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [
            { Año: '2001', P1: 80200, P2: 10000 },
            { Año: '2002', P1: 78300, P2: 10000 },
            { Año: '2003', P1: 82000, P2: 10000 },
            { Año: '2004', P1: 83900, P2: 10000 },
            { Año: '2005', P1: 79200, P2: 10000 },
            { Año: '2006', P1: 85900, P2: 10000 },
            { Año: '2007', P1: 79000, P2: 10000 },
            { Año: '2008', P1: 168000, P2: 10000 },
            { Año: '2009', P1: 159200, P2: 10000 },
            { Año: '2010', P1: 14200, P2: 10000 },
            { Año: '2011', P1: 88200, P2: 10000 },
            { Año: '2012', P1: 88900, P2: 10000 },
            { Año: '2013', P1: 81900, P2: 10000 },
            { Año: '2014', P1: 84900, P2: 10000 },
            { Año: '2015', P1: 87000, P2: 10000 },
        ],
        // The name of the data record attribute that contains x-Patrimonios.
        xkey: 'Año',
        // A list of names of data record attributes that contain y-Patrimonios.
        ykeys: ['P1', 'P2', 'P3', 'P4'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Patrimonio', 'pp'],
        // Disables line smoothing
        smooth: false,
        resize: false
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