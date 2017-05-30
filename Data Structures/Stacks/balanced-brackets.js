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
    const t = parseInt(readLine());
    const options = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    for(let a0 = 0; a0 < t; a0++){
        let s = readLine().split('');
        let stack = [];
        for (let i = 0; i < s.length; i += 1) {
            if (/\(|\{|\[/.test(s[i])) {
                stack.push(s[i]);
            }
            if (/\)|\}|\]/.test(s[i])) {
                if (stack.length === 0) {
                    stack.push('x');
                    break;
                }
                if (stack[stack.length - 1] === options[s[i]]) {
                    stack.pop();
                }
            }
        };
        !stack.length ? console.log('YES') : console.log('NO');
    }   
}
