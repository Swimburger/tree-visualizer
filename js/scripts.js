(function($) {
    $.treeVisualizer("xml/tekorten.xml", {
        fsView: false,
        containerSS: "#output" 
    });

    $("noscript").remove();
})(jQuery);
