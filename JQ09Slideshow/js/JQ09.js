$(document).ready(function() {

	var imageName = ["Images/eightball.gif", "Images/floatingball.gif", "Images/redball.gif"];
	var imageIndex = 0;
	var imageText = ["This is the eightball", "This is the Floating Ball", "This is the Red Ball"];

	$("#picture").click(function() {

		$("#picture").fadeOut(500, function() {

			$("#picture").attr("src", imageName[imageIndex]);
			$("#pictureText").text(imageText[imageIndex]);
			imageIndex++;
			if (imageIndex > 2) {
				imageIndex = 0;
			}
			$("#picture").fadeIn(1000);

		}); // end of .fadeOut(500, function())


	}); // end of .click(function())


	$('#btnadd').on('click', function() {

		//var n1 = parseInt($('#txtn1').val()); // integers
		//var n2 = parseInt($('#txtn2').val());  
		var n1 = parseFloat($('#txtn1').val());  // decimal point #'s
		var n2 = parseFloat($('#txtn2').val());
		//var n1 = $('#txtn1').val(); // Strings
		//var n2 = $('#txtn2').val();		
		var r = n1 + n2;
		alert("addiction result is " + r);
		$('#result').val(r);
		return false;

	}); // end of #btnadd
	
	$('#btnsub').on('click', function() {
 
		var n1 = parseFloat($('#txtn1').val());  // decimal point #'s
		var n2 = parseFloat($('#txtn2').val());	
		var r = n1 - n2;
		alert("subraction result is " + r);
		$('#result').val(r);
		return false;

	}); // end of #btnsub
	
	$('#btnmlt').on('click', function() {
 
		var n1 = parseFloat($('#txtn1').val());  // decimal point #'s
		var n2 = parseFloat($('#txtn2').val());	
		var r = n1*n2;
		alert("multiplication result is " + r);
		$('#result').val(r);
		return false;

	}); // end of #btnmlt
	
	$('#btndiv').on('click', function() {
 
		var n1 = parseFloat($('#txtn1').val());  // decimal point #'s
		var n2 = parseFloat($('#txtn2').val());	
		var r = n1/n2;
		alert("division result is " + r);
		$('#result').val(r);
		return false;

	}); // end of #btndiv
	
	
	
	
	

	$('#btnclear').on('click', function() {
		$('#txtn1').val('');
		$('#txtn2').val('');
		$('#result').val('');
		$('#txtn1').focus(); // move mouse cursur
		return false; // no carry over to other functions
	}); // end of #btnclear
	

});




// end of $(document).ready(function())

/*
 $("#picture").click(function(){
 $("#picture").attr("src", imageName[imageIndex]);
 imageIndex++;
 if(imageIndex>2){
 imageIndex = 0;
 }
 });
 */

/*
 var indexNumber = 0; // number

 $("h1").click(function() {
 $("p").css("background-color", "pink");
 $("p").eq(indexNumber).css("background-color", "red");
 indexNumber++;
 if (indexNumber > 2){
 indexNumber = 0;
 }
 });
 */

/*
 var hText = "This is just some text.";
 var hText = $("#myh1").text();
 $("p").text(hText);
 */