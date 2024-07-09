//1

for(i = 1; i<=10; i++ ){
    console.log(i);
}

//2

let sum = 0;
 for (i=0; i<=100; i++){
    if (i%7 == 0){
        sum = sum + i;
        console.log(sum);
    }
 }

 //3
 const numberOfDigits = (n) => {
    let result = 0;
  
    while (n > 0) {
      n = Math.floor(n / 10);
      result++;
    }
  
    return result;
  }
  console.log(numberOfDigits(234));





