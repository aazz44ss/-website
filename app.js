var main = function ( ) {
    $(document).click( function(){
        $('.dropdown-menu').hide();
    });
    
    $('.dropdown-toggle').click(function(event) {
        event.stopPropagation();
        $('.dropdown-menu').toggle();
    });
    
    $('ul.nav li a').click(function() {           
        $(this).parent().addClass('active').siblings().removeClass('active');  
    });
};

$(document).ready(main);