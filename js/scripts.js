var binaryToDecimal = function(input) {
  var decimal = 0;
  var binaryNumArray = input.split("").reverse();
  console.log(binaryNumArray);
  for (var index = 0; index < binaryNumArray.length; index ++){
    if (binaryNumArray[index] === "1"){
      decimal = decimal + Math.pow(2, index);
    }
  }
    return decimal;
}


$(document).ready(function(){
  $('.blanks form').submit(function(event){
    event.preventDefault();
    var binaryNumber = $('input#number').val();
    var decimalNumber = binaryToDecimal(binaryNumber);
    $('#output h5').text(decimalNumber);
  });
});
