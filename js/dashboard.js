/* globals Chart:false, feather:false */
$(function () {
  'use strict'

  var jwt = JSON.parse(localStorage.getItem('jwt'));
  //alert(jwt.accessToken);

 // feather.replace()
 if(jwt == null) {
  window.location.replace("index.html");
 }
          


  $.ajax({
     // url: 'http://localhost:8080/api/dashboard',
      url: url+'/api/dashboard',
      type: 'get',
      contentType: 'application/json',
      dataType: 'json',
      headers: {
        'Content-Type': 'application/json'  ,
       'Authorization': 'Bearer '+jwt.accessToken
      },
      
      success: function (data) {
       // window.location.replace("index.html");
       console.log(data.data.regional);
       $("#confirmedCasesForeign").text(data.data.summary.confirmedCasesForeign);
       $("#confirmedCasesIndian").text(data.data.summary.confirmedCasesIndian);
       $("#deaths").text(data.data.summary.deaths);
       $("#discharged").text(data.data.summary.discharged);
       $("#total").text(data.data.summary.total);
       
       var larr = [];
       var carr = [];
       var i;
       for (i = 0; i < data.data.regional.length; i++) {
          larr.push(data.data.regional[i].loc);
          carr.push(data.data.regional[i].confirmedCasesIndian);
        }
        console.log(larr);
       // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: larr,
      datasets: [{
        data: carr,
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  }) 
      },
      error: function(data) {
        console.log("error");
        console.log(data);
      }
  });

    $("#signout").click(function(e){
      e.preventDefault();
      localStorage.clear();
       window.location.replace("index.html");
     });
});
