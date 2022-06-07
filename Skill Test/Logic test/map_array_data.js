 /* Function to print product array
    for a given array arr[] of size n */
    function productArray(arr)
    {
        // var arr ;
        var n = arr.length;
        // Base case
        if (n == 1) {
            document.write(0);
            return;
        }
         
        // Initialize memory to all arrays
        let left = new Array(n);
        let right = new Array(n);
        let prod = new Array(n);
  
        let i, j;
  
        /* Left most element of left array
        is always 1 */
        left[0] = 1;
  
        /* Right most element of right
        array is always 1 */
        right[n - 1] = 1;
  
        /* Construct the left array */
        for (i = 1; i < n; i++)
            left[i] = arr[i - 1] * left[i - 1];
  
        /* Construct the right array */
        for (j = n - 2; j >= 0; j--)
            right[j] = arr[j + 1] * right[j + 1];
  
        /* Construct the product array using
        left[] and right[] */
        for (i = 0; i < n; i++)
            prod[i] = left[i] * right[i];
  
        /* print the constructed prod array */
        for (i = 0; i < n; i++)
            document.write(prod[i] + " ");
            document.write("</br>");
  
        return; 
    }


// Input: arr[]  = {10, 3, 5, 6, 2}
// Output: prod[]  = {180, 600, 360, 300, 900}
// 3 * 5 * 6 * 2 product of other array 
// elements except 10 is 180
// 10 * 5 * 6 * 2 product of other array 
// elements except 3 is 600
// 10 * 3 * 6 * 2 product of other array 
// elements except 5 is 360
// 10 * 3 * 5 * 2 product of other array 
// elements except 6 is 300
// 10 * 3 * 6 * 5 product of other array 
// elements except 2 is 900