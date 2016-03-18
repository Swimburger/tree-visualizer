(function($) {
    // Only fullscreen. Links ending in .xml will automatically
    // open in a fullscreen representation
    $('a[href$="xml"]').addClass("tv-show-fs").click(function(e) {
        $("#tree-visualizer, #fs-tree-visualizer, #tv-error").remove();
        $.treeVisualizer($(this).attr("href"), {
            normalView: false
        });
        e.preventDefault();
    });

    // When you want to display both fullscreen and
    // normal view. container is where you want the normal view to be
    $.treeVisualizer("xml/ambitie.xml", {
        container: "#output"
    });

    $("noscript").remove();
})(jQuery);
