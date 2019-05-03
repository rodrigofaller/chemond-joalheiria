<?php
/**
* The template for displaying the footer
*
* Contains the closing of the #content div and all content after.
*
* @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
*
* @package Chemond_Joalheria
*/

?>

</div><!-- #content -->

<footer id="colophon" class="site-footer">
	<div class="container">
		<?php
		wp_nav_menu( array(
			'theme_location' => 'menu-2',
			'menu_id'        => 'footer-menu',
		) );
		?>
		<?php
		$redes_sociais = array(
			'facebook' 	=> get_field( 'facebook', 'options' ),
			'instagram'	=> get_field( 'instagram', 'options' ),
		);
		?>
		<?php foreach ($redes_sociais as $key => $value) : ?>
			<?php if ( !empty( $value ) ): ?>
				<a href="<?php echo $value?>" class="social-icons" target="_blank"><i class="icon-<?php echo $key; ?>"></i></a>
			<?php endif; ?>
		<?php endforeach; ?>
	</div>
</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
