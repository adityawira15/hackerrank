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
    var s = parseInt(readLine());
    for(var a0 = 0; a0 < s; a0++){
        var n = parseInt(readLine());    
        function stairs(n) {
            if ( n === 0) {
                return 0;
            }

            stairs.cache = stairs.cache || {};
            if (Number.isInteger(stairs.cache[n])) {
                return stairs.cache[n];
            }

            const arr = [1, 2, 4];
            if (n < 4) {
                return arr[n - 1]; 
            }

            stairs.cache[n]  = stairs(n - 1) + stairs(n - 2) + stairs(n - 3);
            return stairs.cache[n];
        }
        console.log(stairs(n))
    }
    

}
