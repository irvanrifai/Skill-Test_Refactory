// Function to find the Fibonacci
function nearestFibonacci(arr)
{
  var num = 0;
  for (let i = 0; i < arr.length; i++) {
    num += arr[i];
  }
    // Base Case
    if (num == 0) {
        document.write(0);
        return;
    }
 
    // Initialize the first & second
    // terms of the Fibonacci series
    let first = 0, second = 1;
 
    // Store the third term
    let third = first + second;
 
    // Iterate until the third term
    // is less than or equal to num
    while (third <= num) {
 
        // Update the first
        first = second;
 
        // Update the second
        second = third;
 
        // Update the third
        third = first + second;
    }
 
    // Store the Fibonacci number
    // having smaller difference with N
    let ans = (Math.abs(third - num)
               >= Math.abs(second - num))
                  ? second
                  : third;
 
    
    let difference = ans - num;
    // Print the result

    console.log("Output terdapat pada halaman HTML");

    document.write("The nearest fibonacci of " + num + " is "+ ans);
    document.write("<br>");
    document.write("The result of the difference between the number of inputed arrays and nearest Fibonacci is " + difference);
    document.write("<br>");
}
