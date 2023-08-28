<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/PHPMailer.php';
	require 'phpmailer/src/Exception.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От кого письмо
	$mail->setFrom('marina@beresneva-landscape.com ', 'Админ');

	//Кому отправлять
	$mail->addAddress('oleg.hamster.rus@yandex.ru');

	//Тема письма
	$mail->Subject = 'Новая заявка';

	//Тело письма
	$body = '<h1> Вам письмо </h1>';

	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Имя:<strong> '.$_POST['name'].'</p>';
	}	

	if(trim(!empty($_POST['email']))){
		$body.='<p><strong>E-mail:<strong> '.$_POST['email'].'</p>';
	}

	if(trim(!empty($_POST['tel']))){
		$body.='<p><strong>Phone:<strong> '.$_POST['tel'].'</p>';
	}

	$mail->Body = $body;

	//Отправка
	if (!$mail->send()) {
		$message = 'Error';
	} else {
		$message = 'Success';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>