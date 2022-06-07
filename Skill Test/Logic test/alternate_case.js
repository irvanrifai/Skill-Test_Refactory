function alternatecase(text) {
    var text;
    var alternated = "";
    for (var i = 0; i < text.length; i++){
        if (text[i] >= 'a' && text[i] <= 'z'){
            // Convert lowercase to uppercase, ASCII values Code a-z -> 97-122
            alternated += String.fromCharCode(text.charCodeAt(i) - 32);
        }
        else if (text[i] >= 'A' && text[i] <= 'Z'){
            // Convert uppercase to lowercase, ASCII values Code A-Z -> 65-90
            alternated += String.fromCharCode(text.charCodeAt(i) + 32);
        }
        else{
            alternated += text[i];
        }
    };
    return alternated;
}

// Traverse the given string S.
// For each character Si, do Si =  Si ^ (1 << 5).
// Si ^ (1 << 5) toggles the 5th bit which means 97 will become 65 and 65 will become 97:
// 65 ^ 32 = 97
// 97 ^ 32 = 65 
// Print the string after all operations