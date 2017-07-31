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
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    var unsorted = false;
    var numberOfSwaps = 0;    

    for(var i = 0 ; i < n- 1; i++) {

        for(var j = 0; j < n - i; j++ ) {            
            if (a[j] > a[j+1]) {
                swap(a, j);
            }
        }
        if(!unsorted) {
            break;
        }        
    }

    function swap(l, i) {
        unsorted = true;
        var temp = l[i];
        l[i] = l[i + 1];
        l[i + 1] = temp;
        numberOfSwaps ++;
    }

    var firstElement = a[0];
    var lastElement = a[n-1];


    process.stdout.write("Array is sorted in " + numberOfSwaps +" swaps.\nFirst Element: " + firstElement + "\nLast Element: " + lastElement);
    
    
}
