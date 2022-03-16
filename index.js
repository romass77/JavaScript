//skaiciai

/*let a=5;
let b=7;
let c=9;

let sum1=a*b;
let sum2=c/b;
let sum3=a**b;
let sum4=c-b;
let liekana=b%a;

let vardas='Jonas';
let pavarde='jonaitis';
let gimimoMetai=1980;
let dabarMetai=2022;
let atsakymas=`${vardas} ${pavarde} man yra ${dabarMetai-gimimoMetai} metai`;



console.log(atsakymas.length);
console.log(atsakymas);
console.log('labas vakaras');
console.log(sum1);
console.log(sum2);
console.log(sum3);
console.log(sum4);
console.log(liekana);

const vard='Romas';
const skaic=(Math.random());
console.log(vard);
console.log(vard.length);
console.log(vard[3]);
console.log(skaic);


let zodis1='namas';
let zodis2='sodas';
let result=zodis1.concat(" ",zodis2);
console.log(result);


let data = 2;
data > 2
2 < data < 10

if (data > 2) {
} else{
    console.log(false)
}

if (data < 1) {
} else if (2 < data) {
    console.log(true)
}else{
    console.log('HI')
}*/

/*
let ivestaSuma = parseInt(prompt('mokama pinigu suma'));
let arbat = 0;
let suma = 0;

if (ivestaSuma<=20){
    arbat=ivestaSuma*0.1;
}
else if (20<ivestaSuma && ivestaSuma<=50){
    arbat=ivestaSuma*0.075;
}
else{
    arbat=ivestaSuma*0.05;
}

let visaSuma = `visa mokama suma ${ivestaSuma+arbat} arbatpinigiai yra ${arbat} saskaita ${ivestaSuma}`

console.log(typeof ivestaSuma);

console.log(visaSuma);
*/

/*
const baldai = ['lempa', 'lentynos','sofa','stalas',];
const baldai1 = ['lempa', 'lentynos','sofa','stalas',];
const baldai2 = ['lempa', 'lentynos','sofa','stalas',];


baldai.push('kede');
baldai1.splice();
baldai2.pop();




console.log(baldai);
console.log(baldai1);
console.log(baldai2);
*/

//objektai
/*
const dPietus = {
    vieta: ['restoranas','baras','kavine' ],
    pietus: ['pics','mesainis','kepsnys','sriuba']
};

console.log(dPietus.vieta);
console.log(dPietus.pietus);
*/
// ciklai

//for (let i = 1; i<=10; i++){
 // console.log(i)  
//}


//for (let i = 20; i>=0; i=i-4){
   // console.log(i)  
//}
/*
const skai = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
for (let i = 0; i<=skai.length -1; i++){
    if(skai[i] % 2 === 0) {
    console.log(skai[i])  
}

}
const ast=[];


for (let i=0;i<skai.length; i++){
    if(skai[i]>8){
ast.push(skai[i])
    }
}
console.log(ast)
*/


//const myArr = ['One', 'Two', 'Sofa', 'Stalas', 'test']


//for (let i = 0; i <= myArr.length -1; i++) {
  
    //console.log(myArr[i]); 
   
//}



//for (let i = myArr.length -1; i >=0; i--) {
    
  //  console.log(myArr[i]);   
//}

//max skaicius
/*
const masyvas=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,367]
let did =0;

for(i=0; i<masyvas.length;i++){
    if(did<masyvas[i]){
        did=masyvas[i];
    }
}
console.log(did);
*/
// Nested loops
/*for (let isorinis = 1; isorinis <= 4; isorinis++){
    console.log(`Isorinis loop'as sukasi ${isorinis} karta`)
    for(let vidinis = 1; vidinis < 5; vidinis++) {
      console.log(`  Vidinis loopas sukasi ${vidinis} karta`)
    }
  }*/
/*
  const activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
  ];
  */
  //console.table(activities);
  // loop the outer array
/*
for (let i = 0; i < activities.length; i++) {
    // get the size of the inner array
    let innerArrayLength = activities[i].length;
    // loop the inner array
    for (let j = 0; j < innerArrayLength; j++) {
        console.log('[' + i + ',' + j + '] = ' + activities[i][j]);
    }
}
*/
//for (let i = 0; i < activities.length; i++) {
  //  console.log(`Eitule ${i + 1}`)
   // for (let j = 0; j < activities[i].length; j++) {
   //   console.log(activities[i][j])
   // }
 // }
/*
  const SLAPTAS_SKAICIUS = 52;
  let spejimas = parseFloat(prompt('Spekite skaiciu')); 52
  while(spejimas !== SLAPTAS_SKAICIUS) { // false
    spejimas = parseFloat(prompt('Spekite skaiciu'));
  }
  

  const skaiciai2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16];
const skaic3 =[]

 
 for (let i of skaiciai2){ 
     console.log(i**2)
 }

 for (let i of skaiciai2){ 
    console.log(i**2)
    skaic3.push(i**2)
}

 //for (let i of skaiciai2) {
   // console.log(i)
 // }
*/
/*
const todoList = ['Pradeti nuo q komandos', 
'panaudoti prompt, kad gauti duomenis', 
'panaudoti simbolius ir console atskirti vienai uzduociai nuo kitos'
];


let vartotojoIvestaKomanda = prompt('Kokia yra jusu sekanti komanda')

while(vartotojoIvestaKomanda !== 'quit') {
if (vartotojoIvestaKomanda === 'new') {
  let naujasDarbas = prompt('Iveskite nauja darba i darbu sarasa');
  todoList.push(naujasDarbas);
  vartotojoIvestaKomanda = prompt('Kokia yra jusu sekanti komanda');
} else if (vartotojoIvestaKomanda === 'list') {
  console.log(`Jusu darbu sarasas:`);
  for (let i = 0; i < todoList.length; i++) {
    console.log(`----------------------`);
    console.log(`${i} - ${todoList[i]}`);
    console.log(`----------------------`);
  } 
  vartotojoIvestaKomanda = prompt('Kokia yra jusu sekanti komanda');
} else if (vartotojoIvestaKomanda === 'delete') {
  let index = parseInt(prompt('Iveskite norimo istrinti darbo numeri'));
  todoList.splice(index, 1)
  vartotojoIvestaKomanda = prompt('Kokia yra jusu sekanti komanda')
} else {
  vartotojoIvestaKomanda = 'quit'
  console.log('Ivesta neteisinga komanda')
}
}
*/
//function iveskiteKomanda(){
   // return konda = vartotojoIvestaKomanda = prompt('kokia yra jusu sekanti komanda');
//}
/*
let atsak=doSomething()
function doSomething() {

    console.log('atsak')
   
}
*/
/*
function Laipsniu(a,b){
    console.log(a**b)
    
}
Laipsniu(2,5)
*/

//function didesnis(a,b){
    //pirmas metodas
 //   if(a>b){
     //  console.log(a) 
  //  }else{
  //      console.log(b)
 //   }
//}
//antras metodas
//console.log(Math.max(a,b))
//}
//didesnis(30,20)

let weekday=new Array(7);
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";
weekday[7]="Sunday";
console.log("Today is " + weekday[3]);


//savaite
function kokiaTaiDiena(num){
    if (num === 1) {
      console.log('Siandien yra pirmadienis');
    } else if (num === 2) {
      console.log('Siandien yra antradienis');
    } else {
      console.log('Savaiteje tokios dienos nera')
    }
  }
 kokiaTaiDiena(2)


 //sudeda masyva
  const sudetiVisusSkaicius = [12, 4, 16, 3, 8, 9, 'hi', 12, 2, 1, 5, 3, 9, 55, 292, 13, undefined]

  function sudetiVisusMasyvoSkaicius(arr){
      let sum= 0
      for(let i=0; i<arr.length; i++){
          if(Number.isInteger(arr[i])){
              console.log('is number')
              sum = sum + arr[i]
          }
      }
      console.log(sum)
  }

  function kartotiniai(startinisSkaicius, galinisSkaicius){
    // const skaiciai = Array.from(Array(100).keys());
    const skaiciai = [];  
    const trijuKartotiniai = [];
    const penkiuKartotiniai = [];
    const trijuIrPenkiuKartotiniai = [];
    for (let i = startinisSkaicius; i <= galinisSkaicius; i++){
      skaiciai.push(i)
    }
  
    if (15 % 5 == 0) {
      console.log('hi')
    }
  
    for (let i = 0; i < skaiciai.length; i++) {
      if (skaiciai[i] % 3 === 0 && skaiciai[i] % 5 === 0) {
        trijuIrPenkiuKartotiniai.push(skaiciai[i])
        // trijuKartotiniai.push(skaiciai[i]);
        // penkiuKartotiniai.push(skaiciai[i]);
      } else if (skaiciai[i] % 3 === 0) {
        trijuKartotiniai.push(skaiciai[i]);
      } else if (skaiciai[i] % 5 === 0) {
        penkiuKartotiniai.push(skaiciai[i]);
      } 
    }
    console.log('triju', trijuKartotiniai)
    console.log('penkiu', penkiuKartotiniai)
    console.log('bendri', trijuIrPenkiuKartotiniai)
  }
  kartotiniai(0, 100)
  
  // uzduotis parasyti funckija kuri startini ir galini skaiciu
  // musu atveju naudosime skaicius nuo 0 iki 100
  // susikurti masyva su skaiciais nuo 0 iki 100 nerasant viso masyvo ranka
  // ties kiekvienu skaiciu, kuris dalinasi is 3 be liekanos
  // parasys 'Triju kartotinis
  // tas pats su kiekvienu kuris dalinasi is 5
  // "Penkiu kartotinis"
  // jei skaicius dalinasi is 3 ir is 5 be liekanos 
  // 'Koks tai skaicius - triju ir penkiu kartotinis"
  // galiausiai i konsole isvesti tris masyvus kuriuose bus
  // triju, penkiu bei triju ir penkiu kartotiniai

function didelesRaides(zodis){
const arrayFomString = zodis.split(' ')
for(let i = 0; i<arrayFomString.length; i++){

    for(let j = 0; j<arrayFomString[i].length; j++){
  //      let newWord =arrayFomString[i][0].toUpperCase()



    }
}
}

