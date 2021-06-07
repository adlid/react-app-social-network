
/*let text = "hello world";
let sun = 45
let newText='';
for(i = text.length - 1; i >= 0; i--){
    newText+=text.charAt(i);
}
//console.log(newText);

function main(){
    console.log("A");
    setTimeout(function exec(){
        console.log("B")
    },0);
    setTimeout(function exec(){
        console.log("f")
    },1);
    console.log("C");
    console.log("D");
}
main();
function main() {
    //console.log('A')
    
    setTimeout(function exec() {
    //  console.log('B')
    }, 0)
    runWhileLoopForNSeconds(3)
   // console.log('C')
  }
  main()
  function runWhileLoopForNSeconds(sec) {
    let start = Date.now(),
    now = start
    while (now - start < sec * 1000) {
    now = Date.now()
    }
  }
  const cities = [
    {name: 'Moscow', population: 12506468},
    {name: 'Saint Petersburg', population: 5351935},
    {name: 'Novosibirsk', population: 1612833},
    {name: 'Kaliningrad', population: 482443},
    {name: 'Kaluga', population: 336726}
];
const pop = cities.filter(item=>{
  if(item.population>10000000){
    return item.population;
  }
 
})
//console.log(pop);

const bubbleSort = arr => {
  if(arr.length === 6){
  for (let i = 0, endI = arr.length - 1; i < endI; i++) {
      let wasSwap = false;
      for (let j = 0, endJ = endI - i; j < endJ; j++) {
          if (arr[j] > arr[j + 1]) {
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
              wasSwap = true;
          }
      }
      if (!wasSwap) break;
  }
  return arr;
}
else return console.log("oshibka");
};
let arr = [9,5,6,8,7,2];
console.log("Сортталмаған массив ")
console.log(arr)
console.log("Сортталған массив ")
let newarr =[]
  for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
      let imin = i;
      for (let j = i + 1; j < l; j++) {
          if (arr[imin] > arr[j]) {
              imin = j;
          }
      }
      if (imin !== i) {
          [arr[i], arr[imin]] = [arr[min], arr[i]];
      }
      
      console.log(arr)
  }
  


console.log("Bastapky massiv");

console.log("Massiv uzyndygy = 6");
let arr2 = [9,5,6,8,7,2];
console.log(arr2);
//selectionSort(arr2);
console.log("Sorttalgan massiv");
console.log(arr2);
function puzyrSort(arr) {
  for (var i = 0, u = arr.length - 1; i < u; i++) {
      var wasSwap = false;
      for (var j = 0, u = u - i; j < u; j++) {
          if (arr[j] > arr[j + 1]) {
              var swap = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = swap;
              wasSwap = true;
          }
      }
      if (!wasSwap) break;
  }
  return arr;
}
var arr2 = [78,48,89,12,15,35];
console.log(arr2);
puzyrSort(arr2)
console.log(arr2);*/
const arr = [
	{
		id: 333,
		name: 'Valihan',
		salary: 130000,
		date: '2020-10-01'
	},
	{
		id: 444,
		name: 'Grigoriy',
		salary: 140000,
		date: '2020-09-02'
	},
	{
		id: 555,
		name: 'Diana',
		salary: 150000,
		date: '2020-09-01'
	},
	{
		id: 666,
		name: 'Egor',
		salary: 160000,
		date: '2020-10-01'
	},
	{
		id: 777,
		name: 'Jandos',
		salary: 170000,
		date: '2020-11-01'
	},
	{
		id: 888,
		name: 'Zinaida',
		salary: 1000000,
		date: '2020-12-02'
	}
]


const obj = {}
arr.map(item => {
    !obj[item.date]?obj[item.date]={}:false
    obj[item.date] = {"salary": {"name": item.name, "salar": item.salary}}
  })
console.log(obj)
