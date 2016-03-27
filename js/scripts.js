(function($) {
    $.treeVisualizer("xml/tekorten.xml", {
        container: "#output"
    });

    $("noscript").remove();
})(jQuery);
