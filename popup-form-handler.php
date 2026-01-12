<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit;
}

$phone = trim($_POST['phone']);

if (!$phone) {
    http_response_code(400);
    exit;
}

$to = 'contact@obuchenie-lider.ru';
$from = $to;
$subject = 'Запрос чек-листа и скидки — obuchenie-lider.ru';
$message = "Телефон: $phone\nДата: " . date('d.m.Y H:i:s');
$headers = "From: contact@obuchenie-lider.ru\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";

if (!mail($to, $subject, $message, $headers, "-f$from")) {
    http_response_code(500);
}

header('Location: /?success=1');
exit;
