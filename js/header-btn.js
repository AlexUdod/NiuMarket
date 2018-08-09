

$(document).ready(function(){

    $('.mobilemenu-header--active').click(function(){
        var selector = '[data-header-nav-id=' + $(this).data('id') + ']';
        $(selector).toggle('normal');
        return false;
    });
});







