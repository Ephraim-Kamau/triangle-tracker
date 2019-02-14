function btn() {
  var length1 = document.getElementById("length1");
  var length2 = document.getElementById("length2");
  var length3 = document.getElementById("length3");

  var length4 = parseInt(length1);
  var length5 = parseInt(length2);
  var length6 = parseInt(length3);
var add = length4 + length5 + length6;
document.getElementById("answer").innerHTML=add;
};
