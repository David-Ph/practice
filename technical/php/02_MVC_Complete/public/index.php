<?php
// ini_set('error_reporting', E_ALL);
// ini_set( 'display_errors', 1 );
// jika tidak ada session id, start session
if (!session_id()) session_start();

require_once '../app/init.php';

$app = new App();
