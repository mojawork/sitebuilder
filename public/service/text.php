<?php

header('Content-Type: application/json');

$_POST = json_decode(file_get_contents('php://input'), true);


if ($_POST) {
    $text = $_POST;
    $folder = '../data/' . $text["folder"];
    $fileTextData = $folder . '/' . $text["file"];
    $fileJson = $folder . '/' . json;

    function loadData($ldFileJson, $ldFileTextData)
    {
        $responseJson = json_decode(file_get_contents($ldFileJson), true);
        $responseTextData = file_get_contents($ldFileTextData);
        $responseJson["response"] = $responseTextData;
        echo json_encode($responseJson);
    }

}


if ($_POST && $text["generate"]) {
    mkdir($folder, 0777, true);
    file_put_contents($fileTextData, $text["data"], FILE_TEXT | LOCK_EX);
    $text["data"] = '';
    file_put_contents($fileJson, json_encode($text), FILE_TEXT | LOCK_EX);
    loadData($fileJson, $fileTextData);
} elseif ($_POST) {
    loadData($fileJson, $fileTextData);
} else {
    echo 'no-data';
}

?>


