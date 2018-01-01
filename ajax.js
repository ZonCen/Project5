/* ================================= 
  Getting data from API to the Employees and add it to the site.
==================================== */
let employees = [];

$.ajax({ //Get the data from the API and adds it to the Employees.
	url: 'https://randomuser.me/api/?inc=email,name,location,picture,login,cell,dob&results=12&nat=us',
	dataType: "json",
	success: function(data) {
	$.each(data.results, function(i, user) {
		var date = user.dob;
		const employee = {
			fullName : bigLetter(user.name.first) + " " + bigLetter(user.name.last),
			email: bigLetter(user.email),
			location : {
				street: bigLetter(user.location.street),
				city : bigLetter(user.location.city),
				state: bigLetter(user.location.state),
				postcode: user.location.postCode
			},//End of location
			birthDay: formatBoD(date),
			cell: user.cell,
			picture: user.picture.large
		}//End of employee
		employees.push(employee);
	});//End of each
	addEmployee(); //Adds the above employee to the grid div.
	} //End of sucess
}) //End of ajax

function addEmployee() { //Adds an employee to the grid div in index.html
	$.each(employees, function(i, employee){
		let div = "<div class='Employee' id='" + i + "'>";
		div += "<div class='pic'></div>"
		div += "<h2>" + employee.fullName;
					  +"</h2>";
		div += "<p>"  + employee.email;
					  + "</p>";
		div += "<p>"  + employee.location.state;
					  + "</p>";
		div += "</div>";
		$(".grid").append(div);
		$(".Employee:last-child .pic").css("background-image", "url("+employee.picture+")");
		}) // End of Each
	$(".Employee").on("click", function(e) {
		id = $(this).attr("id");
		modal(id); //Shows the modal information.	
	}) //End of click
} //End of function

/* ================================= 
  Add information from the Employees and display it in the Modal.
==================================== */

function modal(i) { //When passed a number this will show the modal for that Employee
	let employee = employees[i];
	let div = "<div class='modal-content' id='" + i + "'>";
	let picture = employee.picture;
	div += "<span class='close'>&times;</span>"
	div += "<div class='pic modalpic' style='background-image: url("+picture+")'></div>"
	div += "<div class='content'>"
	div += "<h2>" + employee.fullName;
				  +"</h2>";
	div += "<p>"  + employee.email;
				  + "</p>";
	div += "<p>"  + employee.location.state;
				  + "</p>";
	div += "<hr>"
	div += "<p>"  +employee.cell
				  + "</p>"
	div += "<p>"  + employee.location.street + " "
				  + employee.location.city + " "
				  + employee.location.state + " "
				  + "</p>"
	div += "<p>"  + "Birthday " + employee.birthDay;
				  + "</p>"
	div += "</div></div>";
	$(".modal").append(div);
	$(".modal").css("display", "block");
	
$(".close").click(function() {
	$(".modal").css("display", "none");
	$(".modal-content").remove()
}) //end of click
} //End of function


/* ================================= 
  Change the appearance of words and date of birth.
==================================== */

function bigLetter(word) { //Makes the first letter in a word big and returns the full word with a big first letter.
	return word.charAt(0).toUpperCase() + word.slice(1);
}

function formatBoD (Bod) { //Change how the birth of date are shown.
	const date = new Date(Bod);
	const year = date.getYear();
	const month = date.getMonth();
	const day = date.getDate();
	return month + "/" + day + "/" + year;
} //End of formatBoD