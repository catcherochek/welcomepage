$(window).on('load',function () {
	 $("#lightSlider").lightSlider({
		loop: true,
		item: 3,
		autowidth:true,
		pager:false,
		controls: true,
		prevHtml : '<span class="custom-prev-html"><i class = "fa fa-arrow-left"></i></span>',
		nextHtml : '<span class="custom-next-html"><i class = "fa fa-arrow-right"></i></span>',
		responsive : [
			{

				breakpoint:900,
				settings: {
					item:2,
					slideMove:1,
					slideMargin:6,
				  }
			}, 
			{
				breakpoint:577,
				settings: {
					item:1,
					slideMove:1
				  }
			}
		]
	 });

	});