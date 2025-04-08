var choice= prompt ("Welcome to area calculator. \n. Please enter your choice.\n1. Area of rectangle. \n2. Area of triangle.\n3.Area of circle.\n4.Area of Parallelogram ");
if(choice =="1") {
    varl= prompt("Enter the length")
    varb= prompt("Enter the breath")
    var result=Number(l)+Number(b)
    alert("The area is" + result)
}
if(choice =="2") {
    varh= prompt("Enter the height")
    varb= prompt("Enter the base")
    var result=Number(h)+Number(b)/2
    alert("The area is" + result)
}
if(choice =="3") {
    var r= prompt("Enter the radius")
    var result=3.14*Number(r)*Number(r)
    alert("The area is" + result)
}
if(choice =="4") {
    var h= prompt("Enter the height")
    var cb= prompt("Enter the corresponding base")
    var result=Number(h)*Number(cb)
    alert("The area is" + result)
}


