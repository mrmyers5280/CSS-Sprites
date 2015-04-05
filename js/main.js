$( document ).ready(function() {
	$("#selectIcon").change(function(){
		$(".icon").css("backgroundPosition", $("#selectIcon").val());
		$(".selectValue").text($("#selectIcon").val())//.slideDown(250);
	});

    /*** 
    Future modification: compute x & y coords based on 
    row and column location on sprite sheet.
    image 1 = row 1, col 1 instead of -43px -195px.
    var row1 = "-195px";	y-axis
	var row2 = "-245px";
	var col1 = "-43px";		x-axis
	var col2 = "-97px";
	***/
});
