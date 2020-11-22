<?php

header('Content-Type: application/json');

$_POST = json_decode(file_get_contents('php://input'), true);

if ($_POST) {
    $text = $_POST;
    $folder = '../data/text/' . $text["folder"];
    $fileTextHTML = $folder . '/' . $text["file"] . '.html';
    $fileJson = $folder . '/' . $text["file"] . '.json';

    function loadData($ldFileJson, $ldFileTextHTML)
    {
        $responseJson = json_decode(file_get_contents($ldFileJson), true);
        $responseTextHTMLData = file_get_contents($ldFileTextHTML);
        $responseJson["componentResponse"]["content"]["value"] = $responseTextHTMLData;
        echo json_encode($responseJson);
    }

}


if ($_POST && $text["generate"]) {
    mkdir($folder, 0777, true);
    file_put_contents($fileTextHTML, $text["componentData"]["content"]["value"], FILE_TEXT | LOCK_EX);
    $text["componentResponse"] = $text["componentData"];
    $text["componentData"] = '';
    file_put_contents($fileJson, json_encode($text), FILE_TEXT | LOCK_EX);
    loadData($fileJson, $fileTextHTML);
} elseif ($_POST) {
    loadData($fileJson, $fileTextHTML);
} else {
    echo 'no-data';
}

?>


