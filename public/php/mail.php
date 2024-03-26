<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require ROOT_PATH . '/php/vendor/PHPMailer/src/Exception.php';
require ROOT_PATH . '/php/vendor/PHPMailer/src/PHPMailer.php';
require ROOT_PATH . '/php/vendor/PHPMailer/src/SMTP.php';

function senMail($aData, $config)
{
	$sSubject = 'Afterlogic Works Contact Form';
	$sMessage = "" .
		"Time: \t\t" . $aData['time'] . "\r\n" .
		"Captcha: \t\t" . $aData['score'] . "\r\n" .
		"Time: \t\t" . $aData['time'] . "\r\n" .
		"Name: \t\t" . $aData['name'] . "\r\n" .
		"Email: \t\t" . $aData['email'] . "\r\n" .
		"Phone: \t\t" . $aData['phone'] . "\r\n" .
		"Message: \r\n" . $aData['message']
	;

	$messageBackupFolder = ROOT_PATH . '/../messages/';
	if (!is_dir($messageBackupFolder)) {
		mkdir($messageBackupFolder);
	}
	$sMessageFilename = 'message-' . str_replace(array(":", " "), array("-", "-"), $aData['time']) . '.txt';
	$write = file_put_contents($messageBackupFolder . $sMessageFilename, implode("\r\n\r\n", array($sSubject, $sMessage)), FILE_APPEND);

	if (count($config['mail-recipients']) < 1) {
		return false;
	}

	$mail = new PHPMailer(true); // Passing `true` enables exceptions

	try {
		//Server settings
		$mail->SMTPOptions = array(
			'ssl' => array(
				'verify_peer' => false,
				'verify_peer_name' => false,
				'allow_self_signed' => true
			)
		);

		// $mail->SMTPDebug = 4;                        // Enable verbose debug output
		$mail->isSMTP();                                // Set mailer to use SMTP
		$mail->Host = $config['mail-host'];				// Specify main and backup SMTP servers
		$mail->SMTPAuth = true;                         // Enable SMTP authentication
		$mail->Username = $config['mail-login'];     	// SMTP username
		$mail->Password = $config['mail-password'];         // SMTP password
		$mail->SMTPSecure = '';							// Enable TLS encryption, `ssl` also accepted
		$mail->Port = 25;                               // TCP port to connect to

		//Recipients
		$mail->setFrom('works@afterlogic.com', 'Afterlogic Works');

		foreach ($config['mail-recipients'] as $recipient) {
			$mail->addAddress($recipient);
		}

		$mail->addReplyTo($aData['email'], $aData['name']);

		//Attachments
		//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
		//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
		//Content
		$mail->CharSet = "utf-8";
		$mail->isHTML(false);                                  // Set email format to HTML
		$mail->Subject = $sSubject;
		$mail->Body = $sMessage;
		// $mail->AltBody = $sMessage;

		return $mail->send();

		// var_dump('SEND');
	} catch (Exception $e) {
		return $mail->ErrorInfo;
	}
}
