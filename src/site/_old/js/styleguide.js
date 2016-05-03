$(function() {
    $(".styleguide-link").addClass("active");
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });

    $('body').on('click', '.open-modal-with-subtext', function (event) {
        $("#demo-modal-with-subtext").addClass("is-active");
    });

    $('body').on('click', '.open-modal-with-title', function (event) {
        $("#demo-modal-with-title").addClass("is-active");
    });

    $('body').on('click', '.open-modal', function (event) {
        $("#demo-modal").addClass("is-active");
    });

    $('body').on('click', '.modal-overlay .modal-iconClose', function (event) {
        $('.modal-overlay').removeClass("is-active");
    });

    $('body').on('click', '.modal-overlay', function (event) {
        if($(event.target).hasClass('inner')) {
            $('.modal-overlay').removeClass("is-active");
        }
    });

    $('body').on('click', '.js-success-button-one', function (event) {
        $(".js-success-button-one").toggleClass("has-succeeded has-responded");
    });

    $('body').on('click', '.js-success-button-two', function (event) {
        if($(this).hasClass('has-responded')){
            $(this).removeClass("has-succeeded is-delayed has-responded");
            return;
        } else {
            $(this).addClass("is-loading");
        }

        setTimeout(function(){
            $(".js-success-button-two").removeClass("is-loading");
            $(".js-success-button-two").addClass("has-succeeded is-delayed has-responded");
        }, 1200);
    });

    $('body').on('click', '.js-fail-button', function (event) {
        if($(this).hasClass('has-responded')){
            $(this).removeClass("has-failed is-delayed has-responded");
            return;
        } else {
            $(this).addClass("is-loading");
        }

        setTimeout(function(){
            $(".js-fail-button").removeClass("is-loading");
            $(".js-fail-button").addClass("has-failed is-delayed has-responded");
        }, 1200);
    });

    $('body').on('click', '.js-popover-button', function (event) {
        var backgroundClass = "bg-" + $(this).attr('data-active-color');
        $(this).prev().toggleClass("is-visible");
        $(this).toggleClass('button--ghost button--flat boxShadow-deboss--hover boxShadow-deboss ' + backgroundClass);
    });

    $('body').on('click', '.js-popover-select-item', function (event) {
        $('.js-popover-select-item').removeClass("is-active");
        $(this).addClass("is-active");
    });

    // Navigation

    var allPanels = $('dl > dd').hide();
    var currentPanel = $('dl > dt > span');

    $('dl > dd.is-active').show();

    $('dl > dt > span').click(function() {
        allPanels.hide();
        $('dl > dt > span').next().css("transform", "rotate(0)");

        $(this).parent().next().show();
        $(this).next().css("transform", "rotate(180deg)");

        e.preventDefault();
    });

    // Call custom scrollbar
    $(function () {
        $('.antiscroll-wrap').antiscroll();
    });
});
