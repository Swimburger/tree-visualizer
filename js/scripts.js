(function($) {
    // Open tree visualizer in fullscreen on click,
    // change url accordingly and open FS if hash has tv-*
    var tvLink = $("a.match");

    tvLink.each(function (index) {
        $(this).attr("data-tv-url", $(this).attr("href"));
        $(this).attr("href", "#tv-" + (index + 1));
    });
    tvLink.click(function (e) {
        var $this = $(this),
        sent = encodeURI($this.parent("td").next("td").html());

        window.history.replaceState("", document.title, window.location.pathname + window.location.search + $this.attr("href"));
        $("body").treeVisualizer($this.data("tv-url"), {
            normalView: false,
            initFSOnClick: true,
            sentence: sent
        });
        e.preventDefault();
    });
    var hash = window.location.hash;
    if (hash) {
        if (hash.indexOf("tv-") == 1) {
            var index = hash.match(/\d+$/);
            tvLink.eq(index[0] - 1).click();
        }
    }

    // Basic usage
     $("#output").treeVisualizer('xml/ambitie.xml');
    $("#output2").treeVisualizer('xml/ambitie.xml');
    $('nav a').click(function(e){
        e.preventDefault();
        $('#output2').empty().treeVisualizer($(this).attr('href'));
    });
    $("noscript").remove();
})(jQuery);
