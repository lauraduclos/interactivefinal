$(document).ready(function () {

	// start hover script

	$('#condom_trigger').click(function () {
		$('#condomoverlay').fadeIn(300);
	});
	$('#close').click(function () {
		$('#condomoverlay').fadeOut(300);
	});





	// end hover script

	// start filter script
	$("#filter").on("keyup", function () {
		var value = $(this).val().toLowerCase();
		$("#table_content tr").filter(function () {
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});


	});
	// end filter script




});
// end js