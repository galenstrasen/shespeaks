<?php
/** Template Name: Landing Page
 */
get_header();
  while ( have_posts() ) : the_post();


  // Hero
  get_template_part( 'partials/03_organism/_intro-full' );

  ?>



  <main class="page-main" role="main">

    <section class="pg-section section-about" id="hello">
      <?php get_template_part( 'partials/about' ); ?>
    </section>


  </main>
  <!-- #page-main -->



<?php
edit_post_link();
get_footer();
