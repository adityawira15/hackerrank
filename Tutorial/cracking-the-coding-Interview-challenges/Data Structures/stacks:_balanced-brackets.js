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
    var t = parseInt(readLine());
    var array = []
    for(var a0= 0; a0 < t; a0++){
        var expression = readLine();
        array.push(expression)
    }
    //console.log(array)
    var hasil = array.map((expression) => {
    let s = [];
    expression = expression.split('');
    
    for (let c = 0; c < expression.length; c++) {
        if (expression[c] === '{') {
            s.push('}');
        } else if (expression[c] === '[') {
            s.push(']');
        } else if (expression[c] === '(') {
            s.push(')');
        } else {
            if ((s.length === 0) || expression[c] !== s[s.length-1]) {
                return 'NO';
            }
            s.pop();
        }
    };
    var perbandingan = s.length === 0;
    if(perbandingan == true){
        return 'YES'
    } else {
        return 'NO'
    }
})
    for(var i= 0; i < hasil.length; i++ ){
        console.log(hasil[i])
    }
}
