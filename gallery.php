<?php 
$pageTitle="Gallery";
$bannerURL="images/galleryBanner.png";
require_once ("header.php");
?>

	<script type="text/javascript" src="js/rotateImageGallery.js"></script>

	<div id="content_middle">
		<h1>Gallery</h1>
		<div class="content_divider"></div>
			<div id="image_gallery">
				<ul>
					<div id="pictureBox" class="modalBox">
						<a href="#closePictureBox" class="closePictureBackground"></a>
						<div id="big_picture">
							<a href="#closePictureBox" title="Close" class="close">X</a>
							<img id="display_pic" src="images/acmPic1.jpg"></img>
						</div>
					</div>
					<li><a href="#pictureBox"><img src = "images/acmPic1.jpg" onclick="changeImage(this)"/></a></li> 
					<li><a href="#pictureBox"><img src = "images/acmPic2.jpg" onclick="changeImage(this)" /></a></li>
					<li><a href="#pictureBox"><img src = "images/acmPic3.jpg" onclick="changeImage(this)" /></a></li>
					<li><a href="#pictureBox"><img src = "images/acmPic4.jpg" onclick="changeImage(this)" /></a></li>
					<li><a href="#pictureBox"><img src = "images/acmPic5.jpg" onclick="changeImage(this)" /></a></li>
					<li><a href="#pictureBox"><img src = "images/acmPic6.jpg" onclick="changeImage(this)" /></a></li>
					<li><a href="#pictureBox"><img src = "images/acmPic7.jpg" onclick="changeImage(this)" /></a></li>
					<li><a href="#pictureBox"><img src = "images/acmPic8.jpg" onclick="changeImage(this)" /></a></li>
					<li><a href="#pictureBox"><img src = "images/acmPic9.jpg" onclick="changeImage(this)" /></a></li>
					<li><a href="#pictureBox"><img src = "images/acmPic10.jpg" onclick="changeImage(this)" /></a></li>
					<li><a href="#pictureBox"><img src = "images/acmPic11.jpg" onclick="changeImage(this)" /></a></li>
					<li><a href="#pictureBox"><img src = "images/acmPic12.jpg" onclick="changeImage(this)" /></a></li>
					<li><a href="#pictureBox"><img src = "images/acmPic13.jpg" onclick="changeImage(this)" /></a></li>
					<li><a href="#pictureBox"><img src = "images/acmPic14.jpg" onclick="changeImage(this)" /></a></li>
					<li><a href="#pictureBox"><img src = "images/acmPic15.jpg" onclick="changeImage(this)" /></a></li>
					<li><a href="#pictureBox"><img src = "images/acmPic16.jpg" onclick="changeImage(this)" /></a></li>
					<li><a href="#pictureBox"><img src = "images/acmPic17.jpg" onclick="changeImage(this)" /></a></li>
					<li><a href="#pictureBox"><img src = "images/acmPic18.png" onclick="changeImage(this)" /></a></li>

					<!--

					Add new images here. All you have to do is take any of the li elements above this comment, copy them, paste them below the last li element listed above, and change src to your image filepath. The image will then be successfully added to the gallery.

					-->
				</ul>
			</div>
		<h2>Got more pictures for us?</h2>
		<div class="small_content_divider"></div>
			<p>Send them our way! Email your photos to an officer. Our emails can be found on the <a href="about.php">About</a> page.</p>
	</div>

<?php require_once ("footer.php"); ?>