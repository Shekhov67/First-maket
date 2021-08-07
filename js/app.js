jQuery(document).ready(function () {
    jQuery('.header').addClass("hidden").viewportChecker({
        classToAdd: 'animated fadeInLeft',
        offset: 100,
        classToRemove: 'hidden'
    });

    jQuery('.services').addClass("hidden").viewportChecker({
        classToAdd: 'animated slideInUp',
        offset: 400,
        classToRemove: 'hidden'
    });

    jQuery('.realization').addClass("hidden").viewportChecker({
        classToAdd: 'animated rollIn',
        offset: 600,
        classToRemove: 'hidden'
    });

    jQuery('.wordpress').addClass("hidden").viewportChecker({
        classToAdd: 'animated bounceInLeft',
        offset: 400,
        classToRemove: 'hidden'
    });

    jQuery('.projects').addClass("hidden").viewportChecker({
        classToAdd: 'animated flipInY',
        offset: 600,
        classToRemove: 'hidden'
    });
    jQuery('.video').addClass("hidden").viewportChecker({
        classToAdd: 'animated flipInY',
        offset: 400,
        classToRemove: 'hidden'
    });
    jQuery('.mobile').addClass("hidden").viewportChecker({
        classToAdd: 'animated bounceInLeft',
        offset: 400,
        classToRemove: 'hidden'
    });
    jQuery('.count').addClass("hidden").viewportChecker({
        classToAdd: 'animated rollIn',
        offset: 400,
        classToRemove: 'hidden'
    });
    jQuery('.recent').addClass("hidden").viewportChecker({
        classToAdd: 'animated flipInY',
        offset: 500,
        classToRemove: 'hidden'
    });
    jQuery('.partners').addClass("hidden").viewportChecker({
        classToAdd: 'animated flipInY',
        offset: 400,
        classToRemove: 'hidden'
    });

    jQuery('footer').addClass("hidden").viewportChecker({
        classToAdd: 'animated slideInUp',
        offset: 400,
        classToRemove: 'hidden'
    });
});


