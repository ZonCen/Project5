function formatBoD (Bod) {
	const date = new Date(Bod);
	const year = date.getYear();
	const month = date.getMonth();
	const day = date.getDate();
	return month + "/" + day + "/" + year;
} //End of formatBoD

$.ajax({
	url: 'https://randomuser.me/api/?inc=email,name,location,picture,login,cell,dob&results=12&nat=us',
	dataType: "json",
	success: function(data) {
	$.each(data.results, function(i, user) {
		var date = user.dob;
		let div = "<div class='Employee'>";
		div += "<div class='pic'></div>"
		div += "<h1>" + user.name.first
					  + " "
					  + user.name.last
					  +"</h1>";
		div += "<p>"  + user.email 
					  + "</p>";
		div += "<p>"  + user.location.state
					  + "</p>";
		div += "<div class='modal'>"
		div += "<p>"  +user.cell
					  + "</p>"
		div += "<p>"  + user.location.street
					  + user.location.city
					  + user.location.state
					  + "</p>"
		div += "<p>"  + "Birthday " + formatBoD(date);
					  + "</p>"
		div += "</div>";
		div += "</div>";
		$(".Employees").append(div);
		$(".Employee:last-child .pic").css("background-image", "url("+user.picture.large+")");
		$(".modal").hide();
	});//End of each
$(".Employee").on("click", function(e) {
	$(this).toggleClass("Test");
	$(this).find(".modal").toggle();
	
	}) //End of click
	} //End of sucess
	
}) //End of ajax

