<?php

$registeredtypes = ['html', 'md'];
$folder = $_GET['folder'];
$type = $_GET['type'];
$file = $_GET['file'];

if ($folder && $file && in_array($type , $registeredtypes)) {
    $url ='../content/' . $folder . '/' . $file . '.'. $type;
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


