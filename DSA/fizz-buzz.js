let n;

if (n < 1) {
  console.log("enter a valid no.");
}
  else(

    for ( i =1; i<=n; i++){
        if(n%3 === 0 && n%5 ===0)
        {
            console.log("FizzBuzz")
        }

        if (n%3 === 0){
            console.log("Fizz")

        }

        if (n%5 === 0){
            console.log("Buzz")

    }
    else {
        console.log(n)
    }
}
  )