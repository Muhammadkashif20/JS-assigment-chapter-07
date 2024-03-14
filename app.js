  //Questions 1:-
  var city = prompt('enter your city')
    if(city==='Karachi'){
        alert('Welcome to city of lights')
    }
    else{
        alert('Something Wrong')
    }

  //Questions 2:-

var gender= prompt('enter your gender')
if(gender ==='male'){
    alert('Good Morning Sir')
}
else if(gender ==='Female'){
    alert('Good Morning Ma’am.')
}
else{
    alert('No')
}
  //Questions 3:-

  var color= prompt('enter your color')

  if(color==='red'){
    alert('Must Stop')
  }
  else if(color==='yellow'){
    alert('Ready to move')
  }
  else if(color==='green'){
    alert('Move now')
  }
  //Questions 4:-
  
  var fuel= prompt('fuel remaining')
  
  if(fuel <= 0.25 ){
    alert('Please refill the fuel in your car')
  }
  //Questions 5:-

   var a = 4;
 if (++a === 5){
 alert("given condition for variable a is true");
 }
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}

 if("car" < "cat"){
alert("car is smaller than cat");
}

  //Questions 6:-

document.write('<h1>Marks Sheet</h1>')
document.write('<br>')
document.write('<br>')
var english=100
var urdu=100
var math=100
totalMarks=english+urdu+math
document.write('Total marks '+totalMarks)
document.write('<br>')
var marksObtained=219
document.write('Marks Obtained: '+marksObtained)
document.write('<br>')

var percentage=300%219;
document.write('percentage: '+percentage+'%')
document.write('<br>')

var Grade;
var Remarks
if(percentage >= 80){
  document.write('Greater Than or equal to 80')
document.write('<br>')
  if( percentage >=80){
    document.write('Remarks: '+'A-one')
  }

}
else if(percentage >= 70){
  document.write('Greater Than or equal to 70')
  if(percentage >= 70){
    document.write('Remarks: '+'A')
  }
}
else if(percentage >= 60){
  document.write('Greater Than or equal to 60')
  if(percentage >= 60){
    document.write('Remarks: '+'B')
  }
}
else if(percentage <60){
  document.write('Less Than 60')
document.write('<br>')
  if(percentage <=60){
    document.write('Remarks: '+'you need to improve')
  }
}

// //   //Questions 7:-

var secretNumber= prompt('Secret Number Find')
if(secretNumber==1){
  alert('“Bingo!')
}
else if(secretNumber==2){
  alert('“Bingo!')

}
else if(secretNumber==3){
  alert('“Bingo!')

}
else if(secretNumber==4){
  alert('“Bingo!')

}
else if(secretNumber==5){
  alert('“Bingo!')

}
else if(secretNumber==6){
  alert('“Bingo!')

}
else if(secretNumber==7){
  alert('“Bingo!')

}
else if(secretNumber==8){
  alert('“Bingo!')

}
else if(secretNumber==9){
  alert('“Bingo!')

}
else if(secretNumber==10){
  alert('“Bingo!')

}
else{
  alert('“Close enough to the correct answer”.')
}

//   //Questions 8:-

  var userNumber= prompt('Enter Your Number Divisible by 3')

  if(userNumber%3 ==0){
    alert('This is divisible by 3')
  }
  else{
    alert('This is not divisible by 3')
}

  //Questions 9:-

var numbers= prompt('enter your number ')
if(numbers%2===0){
  document.write('This is even Number')
}
else{
  document.write('This is odd Number')

}

// //   //Questions 10:-

var temperature= prompt('Temperature Check')

if(temperature>40){
alert('“It is too hot outside.”')
}
else if(temperature>30){
  alert('“The Weather today is Normal.”')

}
else if(temperature>20){
  alert('“Today’s Weather is cool.”')

}
else if(temperature>10){
  alert('“OMG! Today’s weather is so Cool.”')

}

//   //Questions 11:-

var opt= prompt('enter your Arithemetics & Modulus Opertors')

var firstNumber=10
var secondNumber=5

if(opt==='+'){
  alert(firstNumber+secondNumber)
}
else if(opt==='-'){
  alert(firstNumber-secondNumber)

}
else if(opt==='*'){
  alert(firstNumber*secondNumber)

}
else if(opt==='/'){
  alert(firstNumber/secondNumber)

}
else if(opt==='%'){
  alert(firstNumber%secondNumber)

}





  



