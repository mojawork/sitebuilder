<?php

header('Content-Type: application/json');

$data = file_get_contents('php://input');
$folder = '../data/routes/';
$fileName = 'data';

if ($data) {
    echo $data;
    $count = count(glob($folder . "*.json"));
    file_put_contents($folder.$fileName . ($count + 1) . '.json', $data);
} else {
    $count = count(glob($folder . "*.json"));
    $loadData = file_get_contents($folder.$fileName . $count . '.json');
    echo $loadData;
}

?>


