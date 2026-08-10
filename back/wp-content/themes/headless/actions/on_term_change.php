<?php

add_action('created_term', 'on_term_change', 10, 3);
add_action('edited_term', 'on_term_change', 10, 3);
function on_term_change($term_id, $tt_id, $taxonomy, $args) {
    $taxonomy_obj = get_taxonomy($taxonomy);
    if (!$taxonomy_obj || !$taxonomy_obj->public) {
        return;
    }

    $term = get_term($term_id, $taxonomy);
    if (!$term || is_wp_error($term)) {
        return;
    }

    trigger_revalidation('term', [
        'id' => $term_id,
        'slug' => $term->slug,
        'taxonomy' => $taxonomy,
        'action' => current_action()
    ]);
}