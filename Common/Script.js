function SetNavMargin(){
	var WindowWidth = $( window ).width();
	var SpaceWidth =  Math.floor((WindowWidth - 830)/12); 
	$('header ul li').css("margin", SpaceWidth + "px");
	$('header ul #LinkCv').css("margin", (2*SpaceWidth) + "px");
	$('header ul #LinkRealisations').css("margin", (2*SpaceWidth) + "px");	
	$('header ul li').css("margin-top", "0");
}

SetNavMargin();
$( window ).resize(function() {
  SetNavMargin();
});

/* PRELOADER */
$ColorSpeed = 300;

function test () {
  $("#Point1").animate(
	{backgroundColor: $("#Point1").css("border-color")}, 
	$ColorSpeed , 
	function() {
	  $("#Point2").animate(
		{backgroundColor: $("#Point2").css("border-color")}, 
		$ColorSpeed , 
		function() {
	  	$("#Point3").animate(
			{backgroundColor: $("#Point3").css("border-color")}, 
			$ColorSpeed , 
			function() {
	  		$("#Point4").animate(
				{backgroundColor: $("#Point4").css("border-color")}, 
				$ColorSpeed , 
				function() {
					 $("#Point1").css("background-color", "white");
					 $("#Point2").css("background-color", "white");
					 $("#Point3").css("background-color", "white");
					 $("#Point4").css("background-color", "white");
	  				test();
			});
		});
	});
});
}
test();




$( window ).load(function() {
  	$("#Point1").stop();
	$("#Point2").stop();
	$("#Point3").stop();
	$("#Point4").stop();
	
	$("#PreLoader").fadeOut(300);
});


$("").click(function() {
	window.location.href = "/";
});
