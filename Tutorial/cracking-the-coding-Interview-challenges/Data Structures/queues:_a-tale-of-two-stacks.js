function processData(input) {
    var queue = [];
    input = input.split('\n');
    for (var i = 1; i < input.length; i++) {
        var query = input[i];
        var op = query[0];
        switch(op) {
            case '1':
                queue.push(query.split(' ')[1]);
                break;
            case '2':
                queue.shift();
                break;
            case '3':
                console.log(queue[0]);
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
