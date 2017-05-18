$(document).ready(()=>{
    let $accordians = $('.js-accordian');
    
    $accordians.each((ind, elem) => {
        const $elem = $(elem);
        
        $elem.addClass('is-collapsed');

        $elem.on('click', function () {
            $target = $(this);
            $target.toggleClass('is-collapsed');
        })
    });


})