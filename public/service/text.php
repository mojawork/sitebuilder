<?php

$registeredtypes = ['html', 'md'];
$site = $_GET['site'];
$type = $_GET['type'];
$file = $_GET['file'];

if ($site && $file && in_array($type , $registeredtypes)) {
    $url ='../content/' . $site . '/' . $file . '.'. $type;
    $content = file_get_contents($url);
    if ($content) {
        echo $content;
    } else {
        echo '<h1>Server Error: Level 2</h1>';
    }
} else {
    echo '<h1>Server Error: Level 1</h1>';
}

?>


