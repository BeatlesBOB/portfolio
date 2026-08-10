<?php

require_once('actions/on_post_change.php');
require_once('actions/on_post_delete.php');
require_once('actions/on_status_change.php');
require_once('actions/on_term_change.php');
require_once('actions/on_term_delete.php');

function trigger_revalidation($type, $data = []) {
    $url = defined('HEADLESS_URL') ? HEADLESS_URL : '';
    $secret = defined('HEADLESS_SECRET') ? HEADLESS_SECRET : '';

    if (!$url) {
        return;
    }

    $url = $url . '/api/revalidate';
    $payload = [
        'type' => $type,
        'data' => $data,
        'timestamp' => time()
    ];

    debug_log("Sending request to {$url}", $payload);
    $result = send_request($url, $secret, $payload);
}

function debug_log($message, $data = null) {
    if (!defined('WP_DEBUG') || !WP_DEBUG) {
        return;
    }
    $line = '[Headless Revalidation] ' . $message;
    if ($data !== null) {
        $line .= ' ' . wp_json_encode($data);
    }
    error_log($line);
}

function send_request($endpoint, $secret, $payload) {
    $response = wp_remote_post($endpoint, [
        'timeout' => 15,
        'headers' => [
            'Content-Type' => 'application/json',
            'x-webhook-secret' => $secret
        ],
        'body' => \json_encode($payload)
    ]);

    if (is_wp_error($response)) {
        $error = $response->get_error_message();
        debug_log("Request failed: {$error}");
        return [
            'success' => false,
            'http_code' => null,
            'error' => $error
        ];
    }

    $http_code = wp_remote_retrieve_response_code($response);
    $body = wp_remote_retrieve_body($response);
    $success = $http_code === 200;

    debug_log("Response: HTTP {$http_code}", $body);

    return [
        'success' => $success,
        'http_code' => $http_code,
        'error' => $success ? null : "HTTP {$http_code}"
    ];
}