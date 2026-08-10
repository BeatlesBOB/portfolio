<?php 

add_action('save_post', 'on_post_change', 10, 3);
function on_post_change($post_id, $post, $update) {
    if (wp_is_post_revision($post_id) || wp_is_post_autosave($post_id)) {
        return;
    }

    if ($post->post_status !== 'publish') {
        return;
    }

    trigger_revalidation('post', [
        'id' => $post_id,
        'slug' => $post->post_name,
        'type' => $post->post_type,
        'action' => $update ? 'update' : 'create'
    ]);
}