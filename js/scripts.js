(function($) {
    // Only fullscreen. Links ending in .xml will automatically
    // open in a fullscreen representation
<<<<<<< HEAD
    var tvLink = $('a[href$="xml"]');
    tvLink.each(function (index) {
        $(this).attr("data-tv-url", $(this).attr("href"));
        $(this).attr("href", "#tv-" + (index + 1));
    });
    tvLink.click(function (e) {
        var $this = $(this);
        window.history.replaceState("", document.title, window.location.pathname + window.location.search + $this.attr("href"));
        $("#tree-visualizer, #tree-visualizer-fs").remove();
        $.treeVisualizer($this.data("tv-url"), {
=======
    $('a[href$="xml"]').click(function(e) {
        $("#tree-visualizer, #tree-visualizer-fs").remove();
        $.treeVisualizer($(this).attr("href"), {
>>>>>>> origin/master
            normalView: false,
            initFSOnClick: true
        });
        e.preventDefault();
    });
<<<<<<< HEAD
    var hash = window.location.hash;
    if (hash) {
        if (hash.indexOf("tv-") == 1) {
            var index = hash.match(/\d+$/);
            tvLink.eq(index[0] - 1).click();
        }
    }
=======
>>>>>>> origin/master

    // When you want to display both fullscreen and
    // normal view. container is where you want the normal view to be
    $.treeVisualizer("xml/huge.xml", {
        container: "#output"
    });

    $("noscript").remove();
})(jQuery);
