var sid;
var uid;

$(document).ready(function(){

	$('#login').click(function(){
		login('sbowler', 'password');
	});

	$('#logout').click(function(){
		logout('sbowler', sid);
		console.log('logout sid: ', sid);
	});

	$('#create').click(function(){
		create('Test Scott 2', '2015-7-7 6pm', 'This is only a test', uid);
	});

	$('#get').click(function(){
		get(uid);
	});

	$('#account').click(function(){
		newAccount('sbowler', 'password', 'password', 'Scott', 'Bowler', 'email@mail.com');
	});
	//function newAccount(uName, pass, pass2, fName, lName, email){

});

function login(uName, pass){
	$.ajax({
		url: 'http://s-apis.learningfuze.com/todo/login',
		data: {username: uName, password: pass}, 
		dataType: 'json',
		cache: false,
		method: 'POST',
		success: function(data){
			console.log(data);
			sid = data.session_id;
			uid = data.id;
			console.log("SID = ", sid);
		}
	});
}

function logout(uName, sid){
	$.ajax({
		url: 'http://s-apis.learningfuze.com/todo/logout',
		data: {username: uName, sid: sid},
		dataType: 'json',
		cache: false,
		method: 'POST',
		success: function(data){
			console.log(data);
		}
	});
}

function create(title, dueDate, details, uId){
	$.ajax({
		url: 'http://s-apis.learningfuze.com/todo/create',
		data: {title: title, dueDate: dueDate, details: details, userId: uId},
		dataType: 'json',
		cache: false,
		method: 'POST',
		success: function(data){
			console.log(data);
		}
	});
}

function get(uId){
	$.ajax({
		url: 'http://s-apis.learningfuze.com/todo/get',
		data: {userId: uId},
		dataType: 'json',
		cache: false,
		method: 'POST',
		success: function(data){
			console.log(data);
		}
	});
}

function newAccount(uName, pass, pass2, fName, lName, email){
	$.ajax({
		url: 'http://s-apis.learningfuze.com/todo/newAccount',
		data: {username: uName, password: pass, password2: pass2, firstName: fName, lastName: lName, email: email},
		dataType: 'json',
		cache: false,
		method: 'POST',
		success: function(data){
			console.log(data);
		}
	});
}