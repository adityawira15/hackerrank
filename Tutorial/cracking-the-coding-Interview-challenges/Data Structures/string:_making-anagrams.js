process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var a = readLine();
    var b = readLine();
    
    var alphabet=[];
    for (var i = 0; i < 27; i++){  
         alphabet.push(0);
    };

    for (var i = 0; i < a.length; i++){ 
        var alphaIndex = a.charCodeAt(i) - "a".charCodeAt(0);
        alphabet[alphaIndex] += 1;
    };

    for (var i = 0; i < b.length; i++){  
        var alphaIndex = b.charCodeAt(i) - "a".charCodeAt(0);
        alphabet[alphaIndex] -= 1;
    };
    
    var tally = 0;  
    for (var i = 0; i < alphabet.length; i++){
        tally += Math.abs(alphabet[i]);
    }

    console.log(tally);

}