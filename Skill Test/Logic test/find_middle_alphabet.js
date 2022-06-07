var alpabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
function findMiddle(a,c) {
    var index_a = alpabet.indexOf(a);
    var index_c = alpabet.indexOf(c);
    var mid = (index_a + index_c) / 2;
    var ln;

    if (mid % 2 == 1) {
        ln = 1;
    } else {
        ln = 2;
    }

    var x = alpabet.substring(mid, mid + ln);
    return ("The middle between " + a + " and " + c + " is " + x);

    // for (var i = a; i < c; i++) {
    //     var position = alpabet[c] - alpabet[a];
    //     var ln = position.length / 2;
    //     length = 1;
    // }

    // var x = alpabet.substring(ln, ln + length);

    // console.log("The middle between " + a + " and " + c + " is " + x);

    // if(alpabet.length % 2 == 1) {
    //     position = alpabet.length / 2;
    //     length = 1;
    // } else {
    //     position = alpabet.length / 2 - 1;
    //     length = 2;
    // }

    // return alpabet.substring(position, position + length)
}