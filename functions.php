<?php
/**
 * nidhal functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package nidhal
 */

/**
 * Enqueue scripts and styles.
 */
function nidhal_scripts() {
	wp_enqueue_style( 'nidhal-style', get_stylesheet_uri() );

	wp_enqueue_script( 'nidhal-react', get_template_directory_uri() . '/js/app.bundle.js', array(), '20151215', true );

}
add_action( 'wp_enqueue_scripts', 'nidhal_scripts' );
