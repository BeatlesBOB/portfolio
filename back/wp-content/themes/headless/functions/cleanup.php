<?php

// Remove unnecessary frontend features for headless
add_action('after_setup_theme', function () {
    // Remove emoji scripts
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');

    // Remove feed links
    remove_action('wp_head', 'feed_links', 2);
    remove_action('wp_head', 'feed_links_extra', 3);

    // Remove RSD link
    remove_action('wp_head', 'rsd_link');

    // Remove wlwmanifest link
    remove_action('wp_head', 'wlwmanifest_link');

    // Remove WordPress version
    remove_action('wp_head', 'wp_generator');
});