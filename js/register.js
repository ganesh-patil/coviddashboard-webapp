$(function(){

	$("#register").click(function(e){
   // alert("loaded");
   e.preventDefault();
  // var jwt = JSON.parse(localStorage.getItem('jwt'));

    var userdata = {
    	 	name: $("#name").val(),
    	 	email: $("#email").val(),
            username: $("#username").val(),
	        password: $("#password").val(),
        }

    $.ajax({
	    url: url+'/api/user',
	    type: 'post',
	    contentType: 'application/json',
	    dataType: 'json',
	    data: JSON.stringify(userdata),
	    headers: {
	      'Content-Type': 'application/json'  
	    },
	    
	    success: function (data) {
	    	window.location.replace("index.html");
	    },
	    error: function(data) {
	    	console.log(data);
	    	alert("Registration failed. "+data.responseJSON.name);
	    }
	});
  });

});