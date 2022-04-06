<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
// $message = $_POST['message'];
$email = $_POST['email'];
if (isset($_POST[subscribe])){
$body = "
<h2>New letter</h2>
email: $email";
} else {
  $body = "
  <h2>New letter</h2>
  <b>Name:</b> $name<br>
  <b>Phone:</b> $phone<br>
  <b>Email:</b> $email<br><br>
  ";
};

// Формирование самого письма
$title = "New appeal from Ehya - books";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'web.wellcome.service@gmail.com'; // Логин на почте
    $mail->Password   = 'za9045696'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('web.wellcome.service@gmail.com', 'Aleksander Zabrodski'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('zabrodski666@gmail.com');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
// header('Location: thankyou.html');