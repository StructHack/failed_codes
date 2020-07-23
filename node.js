let textarea = document.querySelector("#htm");
var dom = [];
let tabs=" ";
let print_dom = "";
document.querySelector('#butt').onclick = (_)=>{
	document.querySelector("#print_here").innerHTML = "";
	print_dom="";
	dump_node();
	setTimeout(()=>{remove_node()},100);
}

// document.querySelector('#butt_remove').onclick = (_)=>{
// 	document.querySelector("#print_here").innerHTML = "";
// 	print_dom="";
// 	remove_node();
// }

async function dump_node(){
	let txt = textarea.value.trim();
	let doc = await node(txt);
	let docElem = doc.contentDocument;
	traverse(docElem);
	document.querySelector("#print_here").innerHTML = print_dom;

}

async function node(txt){
	return new Promise((resolve)=>{
		window.ifr = document.createElement('iframe');
		ifr.srcdoc = txt;
		ifr.setAttribute('id','frfr');
		ifr.setAttribute('sandbox','allow-same-origin');
		document.body.appendChild(ifr)
		ifr.onload = ()=>{
			resolve(ifr);
		}
	});
}

function remove_node(){
	document.body.removeChild(frfr);
}

function traverse(node){
	var temp_tabs = tabs;
	if(!node){
		return;
	}
	var node_len = node.childNodes.length;
	var visited = [];
	for(let x=0;x<node_len;x++){
		if( x == 0){
			tabs = tabs + " <span id=x style='letter-spacing:-6px'>|</span>";
		}
		visited.push[x];
		//console.log(node.childNodes[x]);
		window.dom.push(node.childNodes[x].nodeName);
		//console.log(node.childNodes[x].nodeName)
		if(node.childNodes[x].nodeType == Node.ELEMENT_NODE || node.childNodes[x].nodeType == Node.DOCUMENT_TYPE_NODE){
			print_dom += tabs+"<span style='letter-spacing:-4px'>----</span> <b><span style='color:purple'>"+node.childNodes[x].nodeName+"</span></b>";
			//console.log("ssss")
		}
		else{
			print_dom += tabs+"<span style='letter-spacing:-4px'>----</span> <span style='color:#333'>"+node.childNodes[x].nodeName+":</span>";
		}
		
		if(node.childNodes[x].nodeType == Node.TEXT_NODE){
			if(!(/^[\n|\t| ]+$/.test(node.childNodes[x].data.toString()))){print_dom+= "<span style='color:green;font-style:italic'> "+node.childNodes[x].nodeValue.toString().replace(/[\n|\t]/g,'')+"</span>"};
		}
		print_dom+="\n";
		console.log((/[a]/g).exec(tabs));
		if(x == node_len-1){
			tabs = tabs.replace(/[|]/," ");

		}
		//tabs = tabs.replace(/[\|]/," ");
		traverse(node.childNodes[x]);
	}
	tabs = temp_tabs;

}







