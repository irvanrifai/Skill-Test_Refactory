function reverseWords(txt) {
    var txt;
    // return txt.split("").reverse().join("");
    return txt.charAt(txt.length-1).toUpperCase() + txt.toLowerCase().split("").reverse().join("").slice(1);
}

// function capitalize(text) {
//     var text;
//     return text.charAt(0).toUpperCase() + text.substring(1);
// }


// return txt.charAt(0).toUpperCase() + txt.split(1).reverse().join("");
// return txt.charAt(0).toUpperCase() + txt.split("").reverse().join("").slice(1);