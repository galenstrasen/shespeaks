<?php
/*
Template Name: x-Style Guide-x
*/

get_header(); ?>





  <?php get_template_part( 'partials/03_organism/_intro-full' ); ?>

  <?php get_template_part( 'partials/03_organism/navbar' ); ?>

<main class="page-main" role="main">

  <section class="pg-section section-about" id="hello">
    <?php get_template_part( 'partials/about' ); ?>
  </section>

   <section class="pg-section section-deuce">
    <?php get_template_part( 'partials/style' ); ?>
    <h1>She Speaks in Code</h1>
  </section>

</main>
<!-- #page-main -->

<?php get_footer();