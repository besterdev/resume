jQuery(document).ready(function() {
    jQuery('.skillbar').each(function() {
        jQuery(this).find('.skillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 5000);
    });
});

jQuery('.Count').each(function() {
    var $this = $(this);
    jQuery({
        Counter: 0
    }).animate({
        Counter: $this.text()
    }, {
        duration: 5000,
        easing: 'swing',
        step: function() {
            $this.text(Math.ceil(this.Counter));
        }
    });

});