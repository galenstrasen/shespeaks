<footer id="footer" role="contentinfo" itemscope="itemscope" itemtype="http://schema.org/WPFooter">
	<div class="container hidden">

		<div class="row">
			<div class="col-xs-12 col-sm-3">
				<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('Footer 1') ) { ?>
					<ul class="menu">
						<h2 class="list-title">Articles by month</h2>
				        <?php wp_get_archives('title_li=&type=monthly'); ?>
					</ul>
				<?php } ?>
			</div><!-- /col -->

			<div class="col-xs-12 col-sm-3">
				<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('Footer 2') ) { ?>
					<ul class="menu">
						<h2 class="list-title">Categories</h2>
				        <?php wp_list_categories('show_count=0&title_li='); ?>
					</ul>
				<?php } ?>
			</div>

			<div class="col-xs-12 col-sm-3">
				<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('Footer 3') ) { ?>
					<ul class="menu">
						<h2 class="list-title">Pages</h2>
						<?php wp_list_pages('title_li='); ?>
					</ul>
				<?php } ?>
			</div><!-- .site-info -->

			<div class="col-xs-12 col-sm-3">
				<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('Footer 4') ) { ?>
					<ul class="menu">
						<h2 class="list-title">Categories</h2>
				        <?php wp_list_categories('show_count=0&title_li='); ?>
					</ul>
				<?php } ?>
			</div><!-- .site-info -->
		</div>

		<div class="row">
			<p class="copyright">
				<?php echo sprintf( __( '%1$s %2$s %3$s.'), 'Copyright &copy;', date('Y'), esc_html(get_bloginfo('name')) );  ?> All Rights Reserved.
			</p>
		</div>


	</div>
</footer><!-- #colophon -->

</div><!-- .body -->

<?php wp_footer(); ?>

</body>
</html>