createjs.Sound.addEventListener("fileload", createjs.proxy(this.loadHandler, this));
createjs.Sound.registerSound("Sounds/Spotmmi.wav", "sound");
var instance = createjs.Sound.play("sound");  
instance.stop(); 

$(".IconRealisation").click(function() {
	var id = $(this).attr('id');
	console.log("#DetailRealisation" + id);
	$("#DetailRealisation" + id).fadeIn();
	if(id == 10)
	{ 
		playMMI();	
	}
	if(id == 7)
	{ 
		var video = document.getElementById("videoPlayer"); 
		VerticalCenterVideo(this);
		video.play();
		video.volume = 1;
	}
	VerticalCenterImage(this);
});

$(".DetailRealisation, .DetailRealisation *:not(#videoConteneur *)").click(function() {
	instance.stop(); 
	var video = document.getElementById("videoPlayer"); 
	video.pause(); 
	video.currentTime = 0;
	$(".DetailRealisation").fadeOut();
});


function VerticalCenterImage (e) {
  var detailId = "#DetailRealisation" + $(e).attr('id');
  var detail = $(detailId + " > div"); 
  var imgDetail = $(detailId + " img");
  var totalHeight = detail.height(); 
  var imgHeight = imgDetail.height();

  
  if(detail.height() > imgHeight + 5)
  	imgDetail.css("top", Math.round((totalHeight - imgHeight)/2) + "px");  
}

function VerticalCenterVideo (e) {
  var detailId = "#DetailRealisation" + $(e).attr('id');
  var detail = $(detailId + " > div"); 
  var video = $("#videoConteneur");
  var totalHeight = detail.height(); 
  var videoHeight = video.height();

  console.log(detail.height());
  console.log(videoHeight + 5);
  console.log(detail.height() > videoHeight + 5);
  if(detail.height() > videoHeight + 5)
  	video.css("top", Math.round((totalHeight - videoHeight)/2) + "px"); 
  console.log(Math.round((totalHeight - videoHeight)/2) + "px"); 
}

function playMMI()
{
	instance.play(); 	
    instance.addEventListener("complete", createjs.proxy(this.handleComplete, this));
    instance.volume = 1;
}

$(document).ready(function() {
});