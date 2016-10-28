<?php
// Template Name: CV
?>
<?php get_header(); while ( have_posts() ) : the_post();?>
<main id="page-main" role="main">

  <div class="container-fluid stop1440">
    <div class="row">

        <div class="col-sm-12">
          <header class="cv-header">
          <h2 class="hero">She Speaks in Code</h2>
          <h1 class="me">Galen Strasen</h1>
          <h5 class="contact">917-816-5093 | <a href="">gstrasen@gmail.com</a><br/>4138 Webster Street #7, Oakland CA 94609</h5>
          </header>



        </div><!-- /col -->




      </div><!-- /row -->
    </div><!-- /container -->

</main>
<!-- #page-main -->
<?php  endwhile; get_footer(); ?>