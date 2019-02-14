function button() {
  var hypotenus = document.getElementById("hypotenus");
  var adjacent = document.getElementById("adjacent");
  var opposite = document.getElementById("opposite");

  var length1 = parseInt(hypotenus);
  var length2 = parseInt(adjacent);
  var length3 = parseInt(opposite);


if (length1 === length2 && length1 === length3 && length2 === length3){
alert("This is an equilateral triangle")};
  else if (length1 === length2 || length1 === length3 || length2 === length3) {
    alert("This is an isosceles triangle");
  };
  else if (length1 !== length2 || length1 !== length3 || length2 !== length3 ) {
    alert("This is a scalene triangle");
  };
else ((length1 + length2) <= length3 || (length1 + length3) <= length2 || (length2 + length3) <= hypotenus) {
  alert("A triangle cannot be formed");
  };
