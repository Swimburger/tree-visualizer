<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title>HTML Tree Parser for Alpino | Bram Vanroy</title>

  <meta name="author" content="Bram Vanroy">
  <link rel="home prerender prefetch" href="http://bramvanroy.be">

  <link href="http://fonts.googleapis.com/css?family=Roboto+Slab:700|Roboto:400,400italic,900|Roboto+Mono:400,700" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css" rel="stylesheet">
  <?php
    $stylesheet1 = "css/styles.css";
    $stylesheet2 = "css/tree-visualizer.css";
    if (file_exists($stylesheet1)) {
      $stylesheet1 .= "?v=" . date("ymd-Gi", filemtime($stylesheet1));
    }
    if (file_exists($stylesheet2)) {
      $stylesheet2 .= "?v=" . date("ymd-Gi", filemtime($stylesheet2));
    }
  ?>
  <link href="<?php echo $stylesheet1 ?>" rel="stylesheet">
  <link href="<?php echo $stylesheet2 ?>" rel="stylesheet">
  <!--[if lte IE 8]>
		<style>
			.tree.expanded+.tooltip.arrow-down:after {display:none;}
      .custom-input-content .xml-input-buttons > * {padding: 12px;}
		</style>
		<script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
	<![endif]-->
</head>

<body>
  <header>
    <h1>HTML Tree Parser for Alpino <sup>beta</sup></h1>
  </header>
 <nav>
    <a href="xml/ambitie.xml">ambitie</a>
    <a href="xml/empty.xml">empty</a>
    <a href="xml/tekorten.xml">tekorten</a>
    <a href="xml/huge.xml">huge</a>
  </nav>
    <section id="output">
    </section>
    <section id="output2">
        </section>
    <!-- /#output -->

  <script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
  <?php
    $script1 = "js/tree-visualizer.js";
    $script2 = "js/scripts.js";
    if (file_exists($script1)) {
      $script1 .= "?v=" . date("ymd-Gi", filemtime($script1));
    }
    if (file_exists($script2)) {
      $script2 .= "?v=" . date("ymd-Gi", filemtime($script2));
    }
  ?>
  <script src="<?php echo $script1 ?>"></script>
  <script src="<?php echo $script2 ?>"></script>
</body>

</html>
