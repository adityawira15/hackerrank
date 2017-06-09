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
    var n = parseInt(readLine()),
        a = [],
        sum = 0,
        j = n - 1;
    
    for(i = 0; i < n; i++){
       a[i] = readLine().split(' ');
       a[i] = a[i].map(Number);
       sum -= a[i][i];
       sum += a[i][j];
       j--;
    }
    
    if(sum < 0) {
        sum = -sum;
    }
    
    console.log(sum);
}


