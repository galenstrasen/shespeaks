<?php
/** Front Page of Website
 */
get_header();
  while ( have_posts() ) : the_post();


  // Hero
  get_template_part( 'partials/03_organism/_intro-full' );


  // Nav
  get_template_part( 'partials/03_organism/navbar' );
  ?>



  <main class="page-main" role="main">

    <section class="pg-section section-about" id="hello">
      <?php get_template_part( 'partials/about' ); ?>
    </section>


<h4 class="logo">+<<</h4>



    <section class="pg-section section-recent" id="recent">
      <?php //get_template_part( 'partials/about' ); ?>
    </section>

  </main>
  <!-- #page-main -->



<?php
  endwhile;
edit_post_link();
get_footer();
