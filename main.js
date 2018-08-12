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
            // TODO: call endpoint
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
            
            if (status === "success"){
                $("#upload").show()
                $("#checkin_status").html("<i class=\"fas fa-check\"></i>")
            } else{
                $("#alert").html("invalid credentials to checkin!")
                $("#checkin_status").html("<i class=\"fas fa-check\"></i>")
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