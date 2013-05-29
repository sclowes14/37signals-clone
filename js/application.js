$(document).ready( function () {
	$('#bc').hover(
		function () {
			$('.hide[data-product="basecamp"]').show();
			$('#mission').hide();
		},
		function () {
			$('.hide[data-product="basecamp"]').hide();
			$('#mission').show();
		}
		);
	$('#hr').hover(
		function () {
			$('.hide[data-product="highrise"]').show();
			$('#mission').hide();
		},
		function () {
			$('.hide[data-product="highrise"]').hide();
			$('#mission').show();
		}
		);
	$('#cf').hover(
		function () {
			$('.hide[data-product="campfire"]').show();
			$('#mission').hide();
		},
		function () {
			$('.hide[data-product="campfire"]').hide();
			$('#mission').show();
		}
		);
});
