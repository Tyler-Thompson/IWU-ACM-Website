<?php 
$pageTitle="Projects";
$bannerURL="images/projectsBanner.png";
require_once ("header.php");
?>

	<div id="content_middle">
		<h1>Projects</h1>
		<div class="content_divider"></div>
			<p>Check out these awesome projects made by members of the IWU ACM!</p>
		<h2>Pong</h2>
		<div class="small_content_divider"></div>
			<p>The classic game of Pong, written in JavaScript by Tyler Thompson.<br>Controls: Arrow keys up/down to move your paddle</p>
			<canvas id="pong_canvas" onfocus="getFocus()" onblur="loseFocus()"></canvas>
			<script type="text/javascript" src="projects/pong/pong_game.js"></script>
		<h1 style="margin-top:50px">Got a project to add to the page?</h1>
		<div class="content_divider"></div>
			<p>Submit it to an officer for review. Our emails can be found on the <a href="about.php">About</a> page.</p>
	</div>

<?php require_once ("footer.php"); ?>