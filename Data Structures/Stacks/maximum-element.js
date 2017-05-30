function processData(input) { 
    var data = input.split('\n'),
        temp, result = [];
    for (var i = 1; i < data.length; i++) {
        temp = data[i].split(' ');
        switch (temp[0]) {
            case '1': result.push(Number(temp[1]));
                break;
            case '2': result.pop();
                break;
            case '3': console.log(Math.max.apply(null, result));
                break; 
        }
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

