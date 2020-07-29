let td = document.querySelectorAll('td');
let count = 0;
let usr = 0;
let mem_arr = 	[
					[1,2,3],
					[4,5,6],
					[7,8,9]
				]

for(let i=0; i<3;i ++){
	for(let j=0; j<3;j++){
		td[count].setAttribute("id",i+""+j);
		td[count].addEventListener("click",handler);
		count++;
}}


function handler(event){
	let element = event.srcElement;
	if(usr == 0){
		element.innerText = '❌';
		usr = 1;
	}else{
		element.innerText = '◯';
		usr = 0;
	}
	element.removeEventListener('click',handler);
	mem_arr_replace();
}

function mem_arr_replace(){
	let input = event.srcElement.innerText;
	let attr = event.srcElement.getAttribute('id');
	let num = attr.split('');
	mem_arr[parseInt(num[0])][parseInt(num[1])] = input;
	check(input);	
}

function check(input){
	// console.log(input);
	//diagonal
	if(	(mem_arr[0][0] == mem_arr[0][1] && mem_arr[0][1] == mem_arr[0][2]) ||
		(mem_arr[0][0] == mem_arr[1][1] && mem_arr[1][1] == mem_arr[2][2]) ||
		(mem_arr[0][0] == mem_arr[1][0] && mem_arr[1][0] == mem_arr[2][0]) ||
		(mem_arr[1][0] == mem_arr[1][1] && mem_arr[1][1] == mem_arr[1][2]) ||
		(mem_arr[2][0] == mem_arr[2][1] && mem_arr[2][1] == mem_arr[2][2]) ||
		(mem_arr[0][1] == mem_arr[1][1] && mem_arr[1][1] == mem_arr[2][1]) ||
		(mem_arr[0][2] == mem_arr[1][2] && mem_arr[1][2] == mem_arr[2][2]) ||
		(mem_arr[0][2] == mem_arr[1][1] && mem_arr[1][1] == mem_arr[2][0])
		){
		setTimeout(()=>{
			alert('player choosing '+input+' wins');
			clear();
		},0);
	}
}

function clear(){
	td.forEach((element)=>{
		element.innerText = "";
		count = 0;
		usr = 0;
		mem_arr = 	[
					[1,2,3],
					[4,5,6],
					[7,8,9]
				]
		for(let i=0; i<3;i ++){
			for(let j=0; j<3;j++){
			td[count].setAttribute("id",i+""+j);
			td[count].addEventListener("click",handler);
			count++;
		}}
	});
}