//1.1
for(let i=1; i <= 10; i++) {
    if(i%3 == 0) {
        console.log('FizBuz')
    } 
    else {
        if(i%2 == 0) {
            console.log('Fiz')
        }
        else {
            console.log('Buz')
        }
    }
}

//1.2
var factorial = 1;
for (let i=1; i <=10; i++) {
    console.log(factorial = factorial*i)
}

//1.3
const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

let result = consumptionPerWeek * weeksAmount;
let total;

if (result%sheetsInReamPaper > 0){
total = (result - result%sheetsInReamPaper) / sheetsInReamPaper + 1
}else {
    total = result / sheetsInReamPaper
}
console.log('HW 3 = '+total)

//1.4
function multiply(roomsOnFloor, floors, roomNumber){
    
    roomsInPorch = floors*roomsOnFloor
    
    if(roomNumber%roomsInPorch == 0){
        porch = roomNumber/roomsInPorch
    }else{
        porch = roomNumber/roomsInPorch - roomNumber%roomsInPorch/roomsInPorch + 1
    }
    
    console.log('porch: ', porch)

    if(roomNumber%roomsInPorch%roomsOnFloor == 0){
        floor = roomNumber%roomsInPorch/roomsOnFloor
        }else{
            floor = roomNumber%roomsInPorch/roomsOnFloor - roomNumber%roomsInPorch%roomsOnFloor/roomsOnFloor + 1
        }
        console.log('floor: ', floor)
          }
        
          multiply(2, 8, 456)

//1.5
var n =6;
for (var i = 0; i < n; i++) {
    var str = '';
    for (var j = 1; j < n-i; j++) {
      str = str + ' ';
    }
    for (var k = 1; k <= (2*i+1); k++) {
      str = str + '#';
    }
    console.log(str);
  }

  var n =8;
for (var i = 0; i < n; i++) {
    var str = '';
    for (var j = 1; j < n-i; j++) {
      str = str + ' ';
    }
    for (var k = 1; k <= (2*i+1); k++) {
      str = str + '#';
    }
    console.log(str);
  }
