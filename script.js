$("#messageState").on("change", (x) => {
	$(".message").removeClass("openNor").removeClass("closeNor");
	if ($("#messageState").is(":checked")) {
		$(".message").removeClass("closed").removeClass("no-anim").addClass("openNor");
		$(".ballena").removeClass("closeBall").removeClass("openedHer").addClass("openBall");
		$(".container").stop().animate({"backgroundColor": "#f48fb1"}, 2000);
		console.log("Abrindo");
	} else {
		$(".message").removeClass("no-anim").addClass("closeNor");
		$(".ballena").removeClass("openBall").removeClass("openedBall").addClass("closeBall");
		$(".container").stop().animate({"backgroundColor": "#fce4ec"}, 2000);
		console.log("fechando");
	}
});

$(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
	console.log("Animation End");
	if ($(".message").hasClass("closeNor"))
		$(".message").addClass("closed");
	$(".message").removeClass("openNor").removeClass("closeNor").addClass("no-anim");
});

$(".ballena").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
	console.log("Animation End");
	if (!$(".ballena").hasClass("closeBall"))
		$(".ballena").addClass("openedBall").addClass("beating");
	else
		$(".ballena").addClass("no-anim").removeClass("beating");
	$(".ballena").removeClass("openBall").removeClass("closeBall");
});