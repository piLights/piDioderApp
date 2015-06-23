$(document).ready(function(){
	var $colors = $('.container div[data-type="color"]'),
			$picker = $('.picker'),
			temp = $picker.css('height');

	function getLayout() {
		temp = $picker.css('height');
		$('.container').css('padding-bottom', temp);
	};
	getLayout();

	$(document).on('click, mousemove', function(){
		getLayout();

	})

	$colors.each(function(){
		$(this).html('<div class="flipper"><div class="origin"></div><div class="colors"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div>')
		.addClass('turn180')
		.find('i').click(function(){
			var selectColor = $(this).css('backgroundColor'),
					colorHex = rgb2hex(selectColor);
					 $.post( "http://home.fahlbus.ch:60002/api/index.php", { hex: rgb2hex2(selectColor)});
					$picker.removeClass('hide');

		})
	})

	$(document).on('click', '.picker', function(event){
		$.get( "http://home.fahlbus.ch:60002/api/index.php?off");
		$picker.toggleClass('hide');
		getLayout();
	})

	$(document).on('click', '.code', function(event){
		$(this).select();
	})

	function rgb2hex(rgb) {
		rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
		function hex(x) {
				return ("0" + parseInt(x).toString(16)).slice(-2);
		}
		return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
	}
	function rgb2hex2(rgb) {
		rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
		function hex(x) {
				return ("0" + parseInt(x).toString(16)).slice(-2);
		}
		return hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
	}

})
