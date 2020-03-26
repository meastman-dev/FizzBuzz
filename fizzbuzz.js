function fizzbuzz() {
    let textarray = [];
    let textarea = document.getElementById('textarea');
    for(let i = 0; i < 100; i++) {
        if(i%5 === 0 && i%3 === 0){
            textarray.push(i + " " + "FizzBuzz");
        }
        else if(i%5 === 0){
            textarray.push(i + " " + "Fizz");
        }
        else if(i%3 === 0){
            textarray.push(i + " " + "Buzz");
        }
        else{
            textarray.push(i);
        }

        textarea.value = textarray.join("\n");
            
    }

}
