$(document).ready(function () {
  // init states
  $("#alert").hide()
  $("#upload").hide()
  $("#video").hide()

  // set functions
  $("#generate").click(function () {
    var seed = $("#seed").val();
    if (seed === '') {
      $("#alert").html("please set a password to generate wallet!")
      $("#alert").show()
    }
    else{
      $("#alert").hide()
      var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://172.16.21.233:3000/api/platform/register",
  "method": "POST",
  "headers": {
  "Content-Type": "application/json"
  },
  "processData": false,
  "data": "{ 'password': '"+seed+"' }"
  }

  $.ajax(settings).done(function (response) {
  console.log(response);
  });
    }
  })

  $("#checkin").click(function (){
    var wallet = $("#wallet").val();
    var seed = $("#seed").val();
    if (seed === '' || wallet==='') {
      $("#alert").html("please enter some credentials to checkin!")
      $("#alert").show()
    }
    else {
      $("#alert").hide()
      var status = "success"
      // TODO: call api to checkin heartbeat and set status

      var request = $.ajax({
        url: "script.php",
        type: "POST",
        data: {id : menuId},
        dataType: "html"
      });

      request.done(function(msg) {
        $("#log").html( msg );
      });

      request.fail(function(jqXHR, textStatus) {
        alert( "Request failed: " + textStatus );
      });

      if (status === "success"){
        $("#upload").show()
        $("#login").hide()
        $("#checkinBtn").hide()
      } else{
        $("#alert").html("invalid credentials to checkin!")
        $("#alert").show()
      }
    }
  })

  $("#uploadButton").click(function(){
    $("#fileInput").click()
  })

  $("#record").click(function(){
    $("#buttons").hide()
    $("#video").show()
    startFunction()
  })

  $("#uploadToChainButton").click(function () {
    downloadVideo()
  })
});
