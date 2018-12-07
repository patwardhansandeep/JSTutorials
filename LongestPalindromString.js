	<!DOCTYPE html>
	<html charencode=>
	<head>
		<title>Learning JS...</title>

		<link type="text/css" rel="stylesheet" href="css.css">
	</head>
	<script type="text/javascript">

		
var longestPalindrome = function(string) {

  var length = string.length;
  var result=[""];
  var centeredPalindrome = function(left, right) {
    while (left >= 0 && right < length && string[left] === string[right]) {
      //expand in each direction.
      left--;
      right++;
    }
    return string.slice(left + 1, right);
  };

  for (var i = 0; i < length - 1; i++) 
  {

    var oddPal = centeredPalindrome(i, i + 1);

    var evenPal = centeredPalindrome(i, i);

    // if (oddPal.length > 1)
    //   document.write("oddPal: " + oddPal + "<br/>");
    // if (evenPal.length > 1)
    //   document.write("evenPal: " + evenPal  + "<br/>");

    if (oddPal.length > result.length)
          result.push(oddPal);
    if (evenPal.length > result.length)
      result.push(evenPal)
    
  }
result.shift();

  return "the palindrome of " + string + " is: <b>" + result;
};
document.write(
  longestPalindrome("SHama is very nice personosrep")
);

	
		










</script>

<body>

</body>
</html>
