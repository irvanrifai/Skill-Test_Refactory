function maxRedigit(a) {
  // variable a diasumsikan tipe data number
  var a;
  if (a > 0 && a.toString().length == 3) {
      var a = a.toString();
      var numStr = a.split('').map(function(item) {
        return +item;
      });
      var orderedArr = numStr.sort(function(a,b){
        return b-a;
      });
      var orderedStr = orderedArr.join("");
      return parseInt(orderedStr);
    }
    else{
      return null;
    }
  }