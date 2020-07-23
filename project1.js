
function login(){
	window.location="projectlogin.html";
}
let shin={
	'priyanka@gmail.com':'priyanka',
	'pooja@gmail.com':'pooja',
	'prem@gmail.com':'premsingh'
}

function loginpage(){
	
	let user=document.getElementById('username').value;
	let pass=document.getElementById('password').value;
	let name=document.getElementById('name').value;
	console.log(name);
	let n=Object.keys(shin).length;
	let i=0;
	for( i=0;i<n;i++){
		
		if(Object.keys(shin)[i]==user && Object.values(shin)[i]==pass){
			locate(name);
		
		return;}
	}
		let h4=document.createElement('h4');
	h4.innerHTML='Please enter correct username/password';
	h4.setAttribute('style','color:red');
	document.getElementById('h4').appendChild(h4);
	

}
function readmore(){
	window.location="project1readmore.html";
}
function home(){
	window.location="project1.html";
}
function locate(n){
	window.location="project1.html";
	let ul=document.createElement('ul');
	let li1=document.createElement('li');
	let li2=document.createElement('li');
	let li3=document.createElement('li');
	let a1=document.createElement('a');
	let a2=document.createElement('a');
	let a3=document.createElement('a');
	a1.setAttribute('href','#');
	a2.setAttribute('href','#');
	a3.setAttribute('href','#');
	a3.setAttribute('onclick','logout()');
	a1.innerHTML=('Welcome '  + n);
	a2.innerHTML="Profile";
	a3.innerHTML="Logout";
	li1.appendChild(a1);
	li2.appendChild(a2);
	li3.appendChild(a3);
	ul.appendChild(li2);
	ul.appendChild(li3);
	li1.appendChild(ul);
	document.getElementById('ul').appendChild(li1);
	
	
	
}
function logout(){
	document.getElementById('list').remove;
}