<?php

add_action('delete_post', 'on_post_delete');
function on_post_delete($post_id) {
    $post = get_post($post_id);
    if (!$post || $post->post_status !== 'publish') {
        return;
    }

    trigger_revalidation('post', [
        'id' => $post_id,
        'slug' => $post->post_name,
        'type' => $post->post_type,
        'action' => 'delete'
    ]);
}