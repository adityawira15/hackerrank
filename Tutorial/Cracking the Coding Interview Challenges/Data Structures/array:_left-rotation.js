let n = 0;
let d = 0;
let data = [];

process.stdin.setEncoding("utf8");
process.stdin.resume();

let input = "";
process.stdin.on("data", function(data) {
  input += data;
});
process.stdin.on("end", function() {
  let linesOfInput = input.split("\n");
  let temp = linesOfInput[0].split(" ");
  temp.map(Number);
  n = temp[0];
  d = temp[1];
  data = linesOfInput[1].split(" ");

  main();
})

function main() {
  function getResult(){
      var hasil = [];
      function rotation(item){
          var verified = item - Number(n) + Number(d) 
          if(verified < 0){
              verified += Number(n)
          }
          return verified
          
      }
      for( var i = 0; i < n; i++){
          hasil.push(data[rotation(i)])
      }
      console.log(hasil.join(' '))
  }
  let result = getResult();

  process.stdout.write(result);
}