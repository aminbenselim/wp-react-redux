<?php

function nidhal_scripts() {

	wp_enqueue_script( 'nidhal-react', get_template_directory_uri() . '/js/bundle.js', array(), '20151215', true );

}
add_action( 'wp_enqueue_scripts', 'nidhal_scripts' );

