var main = function () {
    var hAlphabets = {
        ' ': 0,
        א: 1,
        ב: 2,
        ג: 3,
        ד: 4,
        ה: 5,
        ו: 6,
        ז: 7,
        ח: 8,
        ט: 9,
        י: 10,
        כ: 20,
        ך: 20,
        ל: 30,
        מ: 40,
        נ: 50,
        ן: 50,
        ס: 60,
        ע: 70,
        פ: 80,
        ף: 80,
        צ: 90,
        ץ: 90,
        ק: 100,
        ר: 200,
        ש: 300,
        ת: 400
    };
    /*
    for (var yAlphabets = 0;yAlphabets < 400; yAlphabets++){
        yAlphabets[];
    } */


    $('#Submit1').on('click', function () {
        var textGematria = 0;
        var text1 = $('#Text1').val();
        $("#h21").text('Your Name Is... ' + text1);

        var textBoxLength = text1.length;
        $("#h31").text("Your Name's Amount of Characters... " + textBoxLength);

        for (var i = 0; i < textBoxLength; i++) {
            textGematria += hAlphabets[text1.charAt(i)];
        }

        // var textBoxCount = hAlphabets.א;
        // $('#h41').text(textBoxCount);

        // var textBoxIndex = text1.charAt(2);
        // $('#h41').text(textBoxIndex);


        // var bh = ' ';
        $('#h41').text(textGematria);
    });
};

$(document).ready(main);






/*
'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'כ', 'ך', 'ל', 'מ', 'ם', 'נ', 'ו', 'ס', 'ע', 'פ', 'ף', 'צ', 'ץ', 'ק', 'ר', 'ש', 'ת'





var yAlphabets = [
 'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ', 'ק', 'ר', 'ש', 'ת'
];*/