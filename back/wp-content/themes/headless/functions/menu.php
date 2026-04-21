<?php

add_action('init', 'register_new_menu');
function register_new_menu()
{
  register_nav_menus(
    array(
      'primary-menu' => __('Primary menu')
    )
  );
}
