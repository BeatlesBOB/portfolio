<?php

add_action( 'init', function() {
	register_post_type( 'project', array(
	    'labels' => array(
            'name' => 'Projects',
            'singular_name' => 'Project',
            'menu_name' => 'Projects',
            'all_items' => 'Tous les projects',
            'edit_item' => 'Modifier project',
            'view_item' => 'Voir Project',
            'view_items' => 'Voir Projects',
            'add_new_item' => 'Ajouter Project',
            'add_new' => 'Ajouter Project',
            'new_item' => 'Nouveau Project',
            'parent_item_colon' => 'Project parent :',
            'search_items' => 'Rechercher Projects',
            'not_found' => 'Aucun projects trouvé',
            'not_found_in_trash' => 'Aucun projects trouvé dans la corbeille',
            'archives' => 'Archives des Project',
            'attributes' => 'Attributs des Project',
            'insert_into_item' => 'Insérer dans project',
            'uploaded_to_this_item' => 'Téléversé sur ce project',
            'filter_items_list' => 'Filtrer la liste projects',
            'filter_by_date' => 'Filtrer projects par date',
            'items_list_navigation' => 'Navigation dans la liste Projects',
            'items_list' => 'Liste Projects',
            'item_published' => 'Project publié.',
            'item_published_privately' => 'Project publié en privé.',
            'item_reverted_to_draft' => 'Project repassé en brouillon.',
            'item_scheduled' => 'Project planifié.',
            'item_updated' => 'Project mis à jour.',
            'item_link' => 'Lien Project',
            'item_link_description' => 'Un lien vers un project.',
        ),
        'show_in_graphql' => true, # Set to false if you want to exclude this type from the GraphQL Schema
        'graphql_single_name' => 'project',
        'graphql_plural_name' => 'projects', 
        'public' => true,
        'show_in_rest' => true,
        'menu_icon' => 'dashicons-admin-post',
        'supports' => array(
            0 => 'title',
            1 => 'editor',
            2 => 'thumbnail',
            3 => 'custom-fields',
        ),
        'taxonomies' => array(
            0 => 'techno',
        ),
        'delete_with_user' => false,
    ));
});
