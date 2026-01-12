<?php

file_put_contents('debug.log', date('Y-m-d H:i:s') . " — Скрипт запущен\n", FILE_APPEND);
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit;
}

// Получаем данные
$name = trim($_POST['name']);
$phone = trim($_POST['phone']);
$email = trim($_POST['email']);
$tariff = trim($_POST['tariff']);

// Валидация
if (!$name || !$phone || !$email || !$tariff) {
    http_response_code(400);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    //echo json_encode(['error' => 'Неверный email']);
    exit;
}

// Формируем письмо
$to = 'contact@obuchenie-lider.ru'; // ← отправляем на доменную почту
$from = $to;
$subject = 'Новая заявка на обучение — obuchenie-lider.ru';
$message = "Имя: $name\nТелефон: $phone\nEmail: $email\nТариф: $tariff\nДата: " . date('d.m.Y H:i:s');

$headers = "From: contact@obuchenie-lider.ru\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=utf-8\r\n";

// Отправляем
if (!mail($to, $subject, $message, $headers, "-f$from")) {
    http_response_code(500);
}

header('Location: /?success=1');
exit;
