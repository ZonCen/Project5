const $Employees = $(".Employee");
$Employees.hide();

$.ajax({
	url: 'https://randomuser.me/api/?inc=email,name,location&results=12&nat=us',
	dataType: "json",
	success: function(data) {
		console.log(data.results)
	$.each(data.results, function(i, user) {
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
		div += "</div>";
		$(".Employees").append(div);
	})
	}
	
})