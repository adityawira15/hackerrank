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

function solve(grades){
    // Complete this function
}

function main() {
    var n = parseInt(readLine());
    for(var i = 0; i < n; i++){
        var grade = parseInt(readLine());
        if(grade<38){
            grade=grade;
        }else if((5-grade%5)<3){
            grade=(grade-grade%5)+5;
        }
        console.log(grade);
    }

}

