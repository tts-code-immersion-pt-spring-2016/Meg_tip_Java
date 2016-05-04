alert("Let's get Mathmatical!");
var bill = prompt("Enter the bill total:");
if(confirm("Good tipping is considered 20% of the bill")){
    var tip = bill * 0.20;
    var billWithTip = Number(bill) + tip;
    alert("Bill: " + bill + ", Tip: " + tip + ", Bill with Tip: " + billWithTip)
  }else{
    alert("Whoa! Algebraic!")
  }
