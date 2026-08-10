<?php

add_action('transition_post_status', 'on_status_change', 10, 3);
function on_status_change($new_status, $old_status, $post) {
    if ($new_status === $old_status) {
        return;
    }

    if ($old_status === 'publish' || $new_status === 'publish') {
        trigger_revalidation('post', [
            'id' => $post->ID,
            'slug' => $post->post_name,
            'type' => $post->post_type,
            'action' => 'status_change',
        ]);
    }
}