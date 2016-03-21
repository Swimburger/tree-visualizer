(function($) {
    // Only fullscreen. Links ending in .xml will automatically
    // open in a fullscreen representation
    $('a[href$="xml"]').click(function(e) {
        $("#tree-visualizer, #tree-visualizer-fs").remove();
        $.treeVisualizer($(this).attr("href"), {
            normalView: false,
            initFSOnClick: true
        });
        e.preventDefault();
    });

    // When you want to display both fullscreen and
    // normal view. container is where you want the normal view to be
    $.treeVisualizer("xml/huge.xml", {
        container: "#output"
    });

    $("noscript").remove();
})(jQuery);
