$( function() {
	if($("#datepicker")){
		$( "#datepicker" ).datepicker();
	};

	

	// if($(".table-resp")){
	// 	$visible_td = $("[data-visible=true]");
	// 	$active_tr = $( ".table-resp tr" );

	// 	$(".table-resp").css("opacity","1");

	// 	$active_tr.on('click', function(){
	// 		$(this).toggleClass('tr--active');
	// 		$active_tr.not(this).removeClass('tr--active');
	// 	});
	// };
	
} );

$('.selectpicker').selectpicker({
	style: 'form-control'
});


$("input[type='number']").inputSpinner();


$(document).ready(function(){
    $('#spinner button').on('click', function(){
        let input = $(this).closest('#spinner').find('input[name=qty]');

        if($(this).data('action') === 'increment') {
            if(input.attr('max') === undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {
                input.val(parseInt(input.val(), 10) + 1);
            }
        } else if($(this).data('action') === 'decrement') {
            if(input.attr('min') === undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {
                input.val(parseInt(input.val(), 10) - 1);
            }
        }
    });
});

$('.table-js').footable();

// Хэдер появление скрытого меню

$(document).ready(function(){
    $('.nav__choose-username-btn').click(function(){
        var selector = '[data-spoil-username-list-id=' + $(this).data('spoil-id') + ']';
        $(selector).toggle('normal');
        return false;
    });
});