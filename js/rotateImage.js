//Script written by a half-dead monkey by pounding the keyboard with a banana. Please disregard the extremely poor practices that follow.
//...In other words, this code is in desperate need of a re-write. ;)
//
//If you're here to add/remove images from the home bar, the important line is below. It starts with 'var bannerImages = new Array(...'



//(Automatic fading broken in Firefox? Can't figure out why...)
window.onload = function(){rotate();};

var bannerImg = -1;

//change the following array to add/remove images from the rotating banner
var bannerImages = new Array("images/homeBanner.png","images/aboutBanner.png","images/membersBanner.png","images/galleryBanner.png","images/eventsBanner.png","images/projectsBanner.png");


//preloads the images so they display fast when the user navigates through the banner
var preload = new Array();
for (var z=0;z<bannerImages.length;z++)
{
    preload[z]=new Image();
    preload[z].src=bannerImages[z];
}
//end preload


var manualRotate = false;

var timeOut;

function makeManual(direction) {
    if (manualRotate===false) 
    {
        manualRotate = true;
        bannerImg--;
        document.getElementById("banner_image_id_2").style.opacity = (0);
        document.getElementById("banner_image_id_2").style.filter = 'alpha(opacity=' + (0) * 100 + ")"; 
    }
    if (direction==="left")
    {
        bannerImg--;
        if (bannerImg<0) { bannerImg=bannerImages.length-1; }
        if (bannerImg>bannerImages.length-1) { bannerImg=0; }
        document.getElementById("banner_image_id").src=bannerImages[bannerImg];
    }
    if (direction==="right")
    {
        bannerImg++;
        if (bannerImg>bannerImages.length-1) { bannerImg=0; }
        if (bannerImg<0) { bannerImg=bannerImages.length-1; }
        console.log(bannerImg);
        document.getElementById("banner_image_id").src=bannerImages[bannerImg];
    }
}

function rotate() {

	var secondsToWait = 5; //variable determines how long between image transitions

    if (bannerImg == bannerImages.length) {
    	bannerImg = 0;
    }

    if (bannerImg !== -1)
    {
    	fadeToImage(document.getElementById("banner_image_id"),bannerImages[bannerImg],document.getElementById("banner_image_id_2"));
    }
    else
    {
    	bannerImg=0;
    	timeOut = setTimeout(rotate, secondsToWait*1000);
    }

    if (manualRotate===false) { bannerImg++; }

    function fadeToImage(bannerDiv, imageToSwitchTo, bannerDiv_2)
	{
        if (manualRotate===true) {
            clearTimeout(timeOut);
            clearInterval(timer);
            bannerDiv.src = imageToSwitchTo; 
            op = 1;
            bannerDiv.style.opacity = op;
            bannerDiv_2.style.opacity = (1);
            bannerDiv.style.filter = 'alpha(opacity=' + op * 100 + ")"; 
            bannerDiv_2.style.filter = 'alpha(opacity=' + (1) * 100 + ")"; 
            document.getElementById("banner_image_id_2").style.opacity = (0);
            document.getElementById("banner_image_id_2").style.filter = 'alpha(opacity=' + (0) * 100 + ")"; 
            return;
        }
        else
        {
    	    var op = 1;  // initial opacity
    	    var fadeIncrement = -0.01;
    	    var timer = setInterval(function () {
                if (manualRotate===true) {
                    clearTimeout(timeOut);
                    clearInterval(timer);
                    bannerDiv.src = imageToSwitchTo; 
                    op = 1;
                    bannerDiv.style.opacity = op;
                    bannerDiv_2.style.opacity = (1);
                    bannerDiv.style.filter = 'alpha(opacity=' + op * 100 + ")"; 
                    bannerDiv_2.style.filter = 'alpha(opacity=' + (1) * 100 + ")"; 
                    document.getElementById("banner_image_id_2").style.opacity = (0);
                    document.getElementById("banner_image_id_2").style.filter = 'alpha(opacity=' + (0) * 100 + ")"; 
                    return;
                }
                else
                {
        	        bannerDiv.style.opacity = op;
        	        bannerDiv_2.style.opacity = (1);
                    bannerDiv.style.zIndex = "2";
                    bannerDiv_2.style.zIndex = "1";
        	        bannerDiv_2.src = imageToSwitchTo;
        	        bannerDiv.style.filter = 'alpha(opacity=' + op * 100 + ")";
        	        bannerDiv_2.style.filter = 'alpha(opacity=' + (1) * 100 + ")";
        	        op += fadeIncrement;
        	        if (op <= 0) 
        	        { 
        	        	bannerDiv.src = imageToSwitchTo; 
                		op = 1;
                		bannerDiv.style.opacity = op;
                		bannerDiv_2.style.opacity = (1);
        	       		bannerDiv.style.filter = 'alpha(opacity=' + op * 100 + ")"; 
        	       		bannerDiv_2.style.filter = 'alpha(opacity=' + (1) * 100 + ")"; 
                		clearInterval(timer);
                		timeOut = setTimeout(rotate, secondsToWait*1000);
                	}
                }
    	    }, 15);
        }
	}
}