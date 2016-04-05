<!DOCTYPE html>

	<head>
		<meta charset="UTF-8">
		<link rel="icon" type="image/ico" href="images/favicon.ico"/>
		<link rel="stylesheet" type="text/css" href="css/styles.css">
		<script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
		<script>
			var isHidden = true;
			//enables tiny header to appear when page is scrolled
			$(window).scroll(function () {
				var $smallHeader = $("#smallHeader"),
					top = $(this).scrollTop();
				
				if ((top > 146)&&(isHidden == true)) {
					$smallHeader.slideToggle(duration=500);
					isHidden = false;
				}
				if ((top < 63)&&(isHidden == false)) {
					$smallHeader.hide();
					isHidden = true;
				}
			});
		</script>
		<title>IWU ACM | <?php if (isset($pageTitle)) {
		 echo $pageTitle; } else 
		 { echo "Website"; } ?></title>
	</head>

	<body>
		<div id="global_wrapper">
			<div id="main_wrapper">
				<div id="header_wrapper">
					<div id="smallHeader">
						<div id="tiny_logo">
							<a href="main_page.php"><img src="images/mainBanner.png"></a></img>
						</div>
						<div id="tiny_social">
							<ul>
								<li><a class="fb_icon" href="https://www.facebook.com/groups/211512355578110/" target="_blank"></a></li>
								<li><a class="twitter_icon" href="https://www.twitter.com/IWUACM" target="_blank"></a></li>
							</ul>
						</div>
						<div id="tiny_navigation">
							<ul class="tiny_navigation_bar">
								<li class="tiny_navigation_buttons"><a class="tiny_navigation_link" href="gallery.php">Gallery</a></li>
								<li class="tiny_navigation_buttons"><a class="tiny_navigation_link" href="members.php">Members</a></li>
								<li class="tiny_navigation_buttons"><a class="tiny_navigation_link" href="events.php">Events</a></li>
								<li class="tiny_navigation_buttons"><a class="tiny_navigation_link" href="about.php">About</a></li>
								<li class="tiny_navigation_buttons"><a class="tiny_navigation_link" href="main_page.php">Home</a></li>
							</ul>
						</div>
					</div>
					<div id="header_logo">
						<a href="main_page.php"><img src="images/mainBanner.png"></a></img>
					</div>
					<div id="header_social">
						<p>Connect with us</p>
						<ul>
							<li><a class="fb_icon" href="https://www.facebook.com/groups/211512355578110/" target="_blank"></a></li>
							<li><a class="twitter_icon" href="https://www.twitter.com/IWUACM" target="_blank"></a></li>
						</ul>
					</div>
				</div>
				<div id="header_navigation">
					<ul class="navigation_bar">
						<li class="navigation_buttons"><a class="navigation_link" href="gallery.php">Gallery</a></li>
						<li class="navigation_buttons"><a class="navigation_link" href="members.php">Members</a></li>
						<li class="navigation_buttons"><a class="navigation_link" href="events.php">Events</a></li>
						<li class="navigation_buttons"><a class="navigation_link" href="about.php">About</a></li>
						<li class="navigation_buttons"><a class="navigation_link" href="main_page.php">Home</a></li>
					</ul>
				</div>
				<div id="banner_image">
					<img id="banner_image_id" src=<?php if (isset($bannerURL)) { echo $bannerURL; } else { echo "/"; } ?>></img>
					<img id="banner_image_id_2" src=<?php if (isset($bannerURL)) { echo $bannerURL; } else { echo "/"; } ?>></img>
					<?php if ($pageTitle=='Home')
					{ ?>
						<div id="scroll_left" class="scroll_div" onclick="makeManual('left')"><p>&#60;</p></div>
						<div id="scroll_right" class="scroll_div" onclick="makeManual('right')"><p>&#62;</p></div>
					<?php } ?>
				</div>
				<div id="content_wrapper">
					<div id="content_left">
							<p class="sidebar_item">Contact Us</p>
								<p class="sidebar_paragraph">Visit our <a href="about.php">About</a> page for contact information.</p>
							<p class="sidebar_item">Twitter Feed</p>
									<a class="twitter-timeline" height="400" data-theme="light" data-link-color="#b50938" href="https://twitter.com/IWUACM" data-widget-id="448631089083342848">Tweets by @IWUACM</a>
									<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
					</div>

					<div id="content_right">
							<p class="sidebar_item">Google Tech News</p>
								<div id="widgetmain" style="background-color:#d6d6d6; margin-left:1px; box-shadow: 0px 3px 6px #626466; margin-bottom:10px; border-radius:0px 0px 8px 8px; text-align:left;overflow-y:hidden;overflow-x:hidden;width:179px;"><div id="rsswidget" style="height:400px;"><iframe src="http://us1.rssfeedwidget.com/getrss.php?time=1403051516406&amp;x=https%3A%2F%2Fnews.google.com%2Fnews%2Ffeeds%3Fpz%3D1%26cf%3Dall%26ned%3Dus%26hl%3Den%26topic%3Dt%26output%3Drss&amp;w=180&amp;h=400&amp;bc=333333&amp;bw=1&amp;bgc=transparent&amp;m=20&amp;it=false&amp;t=(default)&amp;tc=333333&amp;ts=15&amp;tb=transparent&amp;il=true&amp;lc=980826&amp;ls=14&amp;lb=false&amp;id=false&amp;dc=333333&amp;ds=14&amp;idt=true&amp;dtc=626466&amp;dts=12" border="0" hspace="0" vspace="0" frameborder="no" marginwidth="0" marginheight="0" style="border:0; padding:0; margin:0; width:180px; height:400px;" id="rssOutput">Reading RSS Feed ...</iframe></div></div>
							<p class="sidebar_item">Did You Know?</p>
								<p class="sidebar_paragraph">
									<?php

										//Random Facts List; To add/remove random facts, just add to the array below this comment.
										$factsArray = array(
															"The Association for Computing Machinery was founded in 1947 by Richard Hamming.", 
															"Google alone uses an estimated 15 billion kWh of electricity per year.", 
															"Every minute, 10 hours of videos are uploaded to Youtube.", 
															"Of the 247 billion email messages sent every day, 81% are spam.", 
															"The first computer mouse was invented by Doug Engelbart in around 1964 and was made of wood.", 
															"Out of the 1.8 billion Internet users, only 450 million can speak English.", 
															"The first computer bug was a dead moth which was stuck in a Harvard Mark II computer in 1947.",
															"Indiana Wesleyan University was founded in 1920 as Marion College.",
															"Indiana Wesleyan University is the largest private college in the state of Indiana.",
															);


										$randNum = mt_rand(1, count($factsArray));
										echo ($factsArray[$randNum-1]);

									?>
								</p>
					</div>