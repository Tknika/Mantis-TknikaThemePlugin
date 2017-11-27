<?php
# Mantis Plugin "TknikaTheme"
# 2017 - Xabi Ezpeleta <xezpeleta@tknika.eus>

class TknikaThemePlugin extends MantisPlugin {
  function register() {
    $this->name = 'TknikaTheme';
    $this->description = 'Custom theme for Tknika';
    $this->page = 'https://github.com/Tknika/Mantis-TknikaThemePlugin/';

    $this->version = '1.0';
    $this->requires = array(
      'MantisCore' => '2.8',
      'GoogleOauth' => '2.0',
    );

    $this->author = 'Xabi Ezpeleta';
    $this->contact = 'xezpeleta@tknika.eus';
    $this->url = 'https://github.com/Tknika/Mantis-TknikaThemePlugin/';
  }

  function events() {
    return array(
      'EVENT_LAYOUT_RESOURCES' => EVENT_TYPE_OUTPUT,
    );
  }

  function hooks() {
    return array(
      'EVENT_LAYOUT_RESOURCES' => 'custom_login',
    );
  }

  function custom_login($p_event){
    return '
    <link rel="stylesheet" type="text/css" href="' . plugin_file('css/tknika.css') . '" />
    <script type="text/javascript" src="' . plugin_file('js/login.js') . '"></script>
    ';
  }
}
?>
