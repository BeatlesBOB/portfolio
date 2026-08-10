<?php

add_action('delete_term', 'on_term_delete', 10, 4);
function on_term_delete($term_id, $tt_id, $taxonomy, $deleted_term, $object_ids) {
    $taxonomy_obj = get_taxonomy($taxonomy);
    if (!$taxonomy_obj || !$taxonomy_obj->public) {
        return;
    }

    trigger_revalidation('term', [
        'id' => $term_id,
        'slug' => $deleted_term->slug,
        'taxonomy' => $taxonomy,
        'action' => 'delete'
    ]);
}