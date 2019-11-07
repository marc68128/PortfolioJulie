var PointAbout = $('#PointAbout').offset();
var PointCv = $('#PointCv').offset();
var PointContact = $('#PointContact').offset();
var PointRealisations = $('#PointRealisations').offset();
var isInAbout = false;
var isInRealisations = false;
var isInContact = false;
var isInCv = false;
var isHover = false; 
createjs.Sound.addEventListener("fileload", createjs.proxy(this.loadHandler, this));
createjs.Sound.registerSound("Sounds/rollover.mp3", "sound");

$( window ).resize(function() {
	PointAbout = $('#PointAbout').offset();
	PointCv = $('#PointCv').offset();
	PointContact = $('#PointContact').offset();
	PointRealisations = $('#PointRealisations').offset();
});

$( document ).mousemove(function( e ) {
	
	var pos = getFollowerPosition(e.pageX, e.pageY); 
	
	animateAbout(pos[0], pos[1]);
  	animateRealisations(pos[0], pos[1]);
  	animateContact(pos[0], pos[1]);
  	animateCv(pos[0], pos[1]);
	//console.log(pos);
  
});


$(document).ready(function() {
	/*$("body").queryLoader2({
        barColor: "#000000",
        backgroundColor: "#cac9c9",
        percentage: true,
        barHeight: 3,
        completeAnimation: "grow"
    });*/
	var pos = getFollowerPosition(0, 0);
	$('#FollowerPoint').css("left", pos[0]);
  	$('#FollowerPoint').css("top", pos[1]);
});


function animateAbout(fx, fy)
{
	if(isHover)
		return; 
	var DistPointAbout = Math.sqrt(c(fx - PointAbout.left) + c(fy - PointAbout.top));
	if(DistPointAbout  < 45 && !isInAbout)
	{
		$('#FollowerPoint').css("visibility", "hidden");
		$('#PointAbout').stop();
		$('#PointAbout').animate({
    		height: "20px",
    		width: "20px",
    		backgroundColor: "#d4145a"
  		},200);
		isInAbout = true;
		playRolloverSoundEffect();
	}
	else if(DistPointAbout < 45 && isInAbout)
	{
  	}
  	else if(DistPointAbout > 45 && isInAbout)
  	{
  		$('#FollowerPoint').css("visibility", "visible");
  		$('#PointAbout').stop();
  		$('#PointAbout').animate({
    		height: "10px",
    		width: "10px",
    		backgroundColor: "white"
  		},200);
  		isInAbout = false;
  		$('#FollowerPoint').css("left", fx);
  		$('#FollowerPoint').css("top", fy);
  	}
  	else
  	{
  		$('#FollowerPoint').css("left", fx);
  		$('#FollowerPoint').css("top", fy);
  	}
}

function animateRealisations(fx, fy)
{
	if(isHover)
		return; 
	var DistPointRealisations = Math.sqrt(c(fx - PointRealisations.left) + c(fy - PointRealisations.top));

	if(DistPointRealisations < 45 && !isInRealisations)
	{
		$('#FollowerPoint').css("visibility", "hidden");
		$('#PointAbout').stop();
		$('#PointRealisations').animate({
    		height: "20px",
    		width: "20px",
    		backgroundColor: "#f36f21"
  		},200);
		isInRealisations = true;
		playRolloverSoundEffect();
	}
	else if(DistPointRealisations < 45 && isInRealisations)
	{
  	}
  	else if(DistPointRealisations > 45 && isInRealisations)
  	{
  		$('#FollowerPoint').css("visibility", "visible");
  		$('#PointRealisations').stop();
  		$('#PointRealisations').animate({
    		height: "10px",
    		width: "10px",
    		backgroundColor: "white"
  		},200);
  		isInRealisations = false;
  		$('#FollowerPoint').css("left", fx);
  		$('#FollowerPoint').css("top", fy);
  	}
  	else
  	{
  		$('#FollowerPoint').css("left", fx);
  		$('#FollowerPoint').css("top", fy);
  	}
}

function animateContact(fx, fy)
{
	if(isHover)
		return; 
	var DistPointContact = Math.sqrt(c(fx - PointContact.left) + c(fy - PointContact.top));
	if(DistPointContact < 45 && !isInContact)
	{
		$('#FollowerPoint').css("visibility", "hidden");
		$('#PointContact').stop();
		$('#PointContact').animate({
    		height: "20px",
    		width: "20px",
    		backgroundColor: "#e2be22"
  		},200);
		isInContact = true;
		playRolloverSoundEffect();
	}
	else if(DistPointContact < 45 && isInContact)
	{
  	}
  	else if(DistPointContact > 45 && isInContact)
  	{
  		$('#FollowerPoint').css("visibility", "visible");
  		$('#PointContact').stop();
  		$('#PointContact').animate({
    		height: "10px",
    		width: "10px",
    		backgroundColor: "white"
  		},200);
  		isInContact = false;
  		$('#FollowerPoint').css("left", fx);
  		$('#FollowerPoint').css("top", fy);
  	}
  	else
  	{
  		$('#FollowerPoint').css("left", fx);
  		$('#FollowerPoint').css("top", fy);
  	}
}

function animateCv(fx, fy)
{
	if(isHover)
		return; 
	var DistPointCv = Math.sqrt(c(fx - PointCv.left) + c(fy - PointCv.top));
	if(DistPointCv < 45 && !isInCv)
	{
		$('#FollowerPoint').css("visibility", "hidden");
		$('#PointCv').stop();
		$('#PointCv').animate({
    		height: "20px",
    		width: "20px",
    		backgroundColor: "#93278f"
  		},200);
		isInCv = true;
		playRolloverSoundEffect();
	}
	else if(DistPointCv < 45 && isInCv)
	{
  	}
  	else if(DistPointCv > 45 && isInCv)
  	{
  		$('#FollowerPoint').css("visibility", "visible");
  		$('#PointCv').stop();
  		$('#PointCv').animate({
    		height: "10px",
    		width: "10px",
    		backgroundColor: "white"
  		},200);
  		isInCv = false;
  		$('#FollowerPoint').css("left", fx);
  		$('#FollowerPoint').css("top", fy);
  	}
  	else
  	{
  		$('#FollowerPoint').css("left", fx);
  		$('#FollowerPoint').css("top", fy);
  	}
}

function getFollowerPosition(Mx, My){
	var left = $('#cercle').offset().left;
	var top = $('#cercle').offset().top;
	var length = $('#cercle').width();
	var Cx = left + (length/2);
	var Cy = top + (length/2);
	var r = length/2 + 1;

	var x = r*(Mx-Cx)/(Math.sqrt(c(Mx-Cx)+c(My-Cy)))+Cx;
	var y = r*(My-Cy)/(Math.sqrt(c(Mx-Cx)+c(My-Cy)))+Cy;
	
	return centerFollower(x, y);
}

function centerFollower(x, y) {
	var length = $('#FollowerPoint').width();
	return [x -(length/2), y -(length/2)];
}

function playRolloverSoundEffect()
{
	var instance = createjs.Sound.play("sound");  // play using id.  Could also use full sourcepath or event.src.
     instance.addEventListener("complete", createjs.proxy(this.handleComplete, this));
     instance.volume = 0.2;
}


$('#LinkAbout').hover(function() {
	$('#FollowerPoint').css("visibility", "hidden");
		$('#PointAbout').stop();
		$('#PointAbout').animate({
    		height: "20px",
    		width: "20px",
    		backgroundColor: "#d4145a"
  		},200);
		isInAbout = true;
		playRolloverSoundEffect();
		
	$('#About').css("left", $('#LinkAbout').offset().left - 300);
  	$('#About').css("top", $('#LinkAbout').offset().top);
  	$('#About').fadeIn(400);
  	isHover = true; 
}, function() {
	isHover = false;
});

$('#LinkCv').hover(function() {
	$('#FollowerPoint').css("visibility", "hidden");
		$('#PointCv').stop();
		$('#PointCv').animate({
    		height: "20px",
    		width: "20px",
    		backgroundColor: "#93278f"
  		},200);
		isInCv = true;
		playRolloverSoundEffect();

  	isHover = true; 
}, function() {
	isHover = false;
});

$('#LinkRealisations').hover(function() {
	$('#FollowerPoint').css("visibility", "hidden");
		$('#PointAbout').stop();
		$('#PointRealisations').animate({
    		height: "20px",
    		width: "20px",
    		backgroundColor: "#f36f21"
  		},200);
		isInRealisations = true;
		playRolloverSoundEffect();
  	isHover = true; 
}, function() {
	isHover = false;
});

$('#LinkContact').hover(function() {
		$('#FollowerPoint').css("visibility", "hidden");
		$('#PointContact').stop();
		$('#PointContact').animate({
    		height: "20px",
    		width: "20px",
    		backgroundColor: "#e2be22"
  		},200);
		isInContact = true;
		playRolloverSoundEffect();
  	isHover = true; 
}, function() {
	isHover = false;
});



function c(valeur) {
   var carre = valeur * valeur;
   return carre;
}



