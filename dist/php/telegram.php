<?php

/* https://api.telegram.org/bot1096707105:AAGzP8N1r5zmtiEJWV5OohUkOqbTf6EeNi4/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

/*
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$token = "1096707105:AAGzP8N1r5zmtiEJWV5OohUkOqbTf6EeNi4";
$chat_id = "-491293251";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  echo true;
} else {
  echo false;
}
?>*/