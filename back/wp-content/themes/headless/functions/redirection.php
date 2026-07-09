<?php

// Redirect frontend requests to Next.js
add_action('template_redirect', function () {
    // Allow WordPress admin area
    if (is_admin()) {
        return;
    }

    // Allow login/logout pages
    if (strpos($_SERVER['REQUEST_URI'], 'wp-login') !== false ||
        strpos($_SERVER['REQUEST_URI'], 'wp-signup') !== false ||
        strpos($_SERVER['REQUEST_URI'], 'wp-activate') !== false) {
        return;
    }

    // Allow REST API
    if (strpos($_SERVER['REQUEST_URI'], 'wp-json') !== false ||
        strpos($_SERVER['REQUEST_URI'], rest_get_url_prefix()) !== false) {
        return;
    }

    // Allow cron
    if (strpos($_SERVER['REQUEST_URI'], 'wp-cron') !== false) {
        return;
    }

    // Allow AJAX requests
    if (defined('DOING_AJAX') && DOING_AJAX) {
        return;
    }

    // Allow XML-RPC (if needed for some integrations)
    if (strpos($_SERVER['REQUEST_URI'], 'xmlrpc.php') !== false) {
        return;
    }

    // Get Next.js URL from environment
    $nextjs_url = getenv_docker('HEADLESS_URL', 'http://localhost:3000');

    if ($nextjs_url) {
        wp_redirect($nextjs_url, 301);
        exit;
    }
});
