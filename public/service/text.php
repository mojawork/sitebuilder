<?php

header('Content-Type: application/json');

$_POST = json_decode(file_get_contents('php://input'), true);

if ($_POST) {
    $text = $_POST;
    $folder = '../data/' . $text["folder"];
    $fileTextHTML = $folder . '/' . $text["file"] . '.html';
    $fileJson = $folder . '/' . $text["file"] . '.json';

    function loadData($ldFileJson, $ldFileTextHTML)
    {
        $responseJson = json_decode(file_get_contents($ldFileJson), true);
        $responseTextHTMLData = file_get_contents($ldFileTextHTML);
        $responseJson["response"]["content"]["value"] = $responseTextHTMLData;
        echo json_encode($responseJson);
    }

}


if ($_POST && $text["generate"]) {
    mkdir($folder, 0777, true);
    file_put_contents($fileTextHTML, $text["data"]["content"]["value"], FILE_TEXT | LOCK_EX);
    $text["response"] = $text["data"];
    $text["data"] = '';
    file_put_contents($fileJson, json_encode($text), FILE_TEXT | LOCK_EX);
    loadData($fileJson, $fileTextHTML);
} elseif ($_POST) {
    loadData($fileJson, $fileTextHTML);
} else {
    echo 'no-data';
}

?>


