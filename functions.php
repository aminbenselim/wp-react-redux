<?php

function add_script() {

	wp_enqueue_script( 'js-bundle', get_template_directory_uri() . '/js/bundle.js', array(), '20151215', true );

}
add_action( 'wp_enqueue_scripts', 'add_script' );
