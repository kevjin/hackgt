let database = firebase.database();


function storeUserData() {
	let firstname = document.getElementById('firstname').value;
	let lastname = document.getElementById('lastname').value;
	writeUserData(firstname, lastname);
	thankYouPage(firstname);
}

function writeUserData (firstname, lastname) {
	var postData = {
		firstName : firstname,
		lastName : lastname,
	}
	//unique key
	var firebaseRef = firebase.database().ref();

	var newPostKey = firebaseRef.child("Text").push().key;
	var updates = {};
	updates['/vandypeople/' + newPostKey] = postData

	return firebaseRef.update(updates);
}
function thankYouPage(firstname) {
	let content = document.getElementById('page-content');
	content.innerHTML = "<h1>Thanks for registering "+firstname+"!</h1> <p>:)</p>";
}