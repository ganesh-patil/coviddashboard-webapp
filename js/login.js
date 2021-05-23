$(function(){

  $("#signin").click(function(e){
   e.preventDefault();

    var userdata = {
            username: $("#floatingInput").val(),
	        password: $("#floatingPassword").val(),
        }

    $.ajax({
	    url: url+'/api/public/login',
	    type: 'post',
	    contentType: 'application/json',
	    dataType: 'json',
	    data: JSON.stringify(userdata),
	    headers: {
	      'Content-Type': 'application/json'  //for object property name, use quoted notation shown in second
	    },
	    
	    success: function (data) {
	        console.log(data);
	        localStorage.setItem('jwt', JSON.stringify(data));
	        window.location.replace("dashboard.html");
	    },
	    error: function(data) {
	    	alert("error logging in. Please use valid credentials ");
	    	console.log(data);
	    }
	});
  });

});