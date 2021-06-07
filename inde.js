

function sort(a,b){
	var c = a - b;
	if(c<0){
		return false;
	}
	else {
		return true;
	}

}
sort(6,4);

const sort2 =(a,b)=>{a-b<0?false:true}

let reverceStr =str=>{
	let newStr='';
	for(let i = str.length-1; i>=0; i-- ){
		newStr+=str[i];
	}
	return console.log(newStr);
};
const reverceStr= str=>{
	console.log([...str])
	return [...str].reverse().join('');
}
reverceStr("sss")
console.log(reverceStr("hello world"));
//const stre = );

const vowelsCount =str=>str.match(/[aeoiuy]/gi)?str.match(/[aeoiuy]/gi).length:0
console.log(vowelsCount("hello"))

const elem = document.querySelector('#elem');
const id = elem.parentNode.id;
console.log(id);


