let employees = [];



function formatBoD (Bod) {
	const date = new Date(Bod);
	const year = date.getYear();
	const month = date.getMonth();
	const day = date.getDate();
	return month + "/" + day + "/" + year;
} //End of formatBoD

function bigLetter(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
}

$.ajax({
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
$(".Employee").on("click", function(e) {
	$(this).toggleClass("Test");
	$(this).find(".modal").toggle();
	
	}) //End of click
	} //End of sucess
	
}) //End of ajax

function addEmployee() {
	$.each(employees, function(i, employee){
		let div = "<div class='Employee'>";
		div += "<div class='pic'></div>"
		div += "<h2>" + employee.fullName;
					  +"</h2>";
		div += "<p>"  + employee.email;
					  + "</p>";
		div += "<p>"  + employee.location.state;
					  + "</p>";
		/*div += "<div class='modal'>"
		div += "<p>"  +user.cell
					  + "</p>"
		div += "<p>"  + user.location.street
					  + user.location.city
					  + user.location.state
					  + "</p>"
		div += "<p>"  + "Birthday " + formatBoD(date);
					  + "</p>"
		div += "</div>";*/
		div += "</div>";
		$(".Employees").append(div);
		$(".Employee:last-child .pic").css("background-image", "url("+employee.picture+")");
		//$(".modal").hide();
		}) // End of Each
} //End of function

