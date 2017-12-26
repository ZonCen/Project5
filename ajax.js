$.ajax({
	url: 'https://randomuser.me/api/?inc=email,name,location,picture&results=12&nat=us',
	dataType: "json",
	success: function(data) {
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
		$(".Employee:last-child .pic").css("background-image", "url("+user.picture.large+")");
	});//End of each
	} //End of sucess
	
}) //End of ajax