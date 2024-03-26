<?php
header("X-Frame-Options: SAMEORIGIN");

define('ROOT_PATH', dirName(__FILE__));

require ROOT_PATH . '/php/config.php'; //it's needed to be sure the config file exists

function verifyReCaptcha($token = '', $ip = '', $config = null)
{
	$result = null;

	if (!empty ($token) && !empty ($config['reCAPTCHA_secret'])) {
		try {
			$curl = curl_init();

			$params = array(
				'secret' => $config['reCAPTCHA_secret'],
				'response' => $token,
				'remoteip' => $ip
			);

			curl_setopt_array(
				$curl,
				array(
					CURLOPT_URL => 'https://www.google.com/recaptcha/api/siteverify',
					CURLOPT_RETURNTRANSFER => true,
					CURLOPT_ENCODING => '',
					CURLOPT_MAXREDIRS => 10,
					CURLOPT_TIMEOUT => 0,
					CURLOPT_FOLLOWLOCATION => true,
					CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
					CURLOPT_CUSTOMREQUEST => 'POST',
					CURLOPT_POSTFIELDS => $params,
				)
			);

			$result = json_decode(curl_exec($curl), true);

			curl_close($curl);
		} catch (Exception $e) {
			// return $e;
		}
	}

	return $result;
}

function asset_path($filename)
{
	$manifest_path = './rev-manifest.json';
	$manifest = file_exists($manifest_path) ? json_decode(file_get_contents($manifest_path), true) : [];

	return array_key_exists($filename, $manifest) ? $manifest[$filename] : $filename;
}

$result = null;

function getToken()
{
	return md5(str_pad(mt_rand(1, 1000), 4, "0", STR_PAD_LEFT) . time());
}

if (isset ($_POST['action']) && (string) $_POST['action'] === "task.send") {
	$bAjax = isset ($_POST['ajax']) && (int) $_POST['ajax'] === 1 ? true : false;
	if ($bAjax) {
		header('Content-Type: application/json; charset=utf-8');
	}

	$recaptchaResponse = verifyReCaptcha($_POST['recaptcha'], $_SERVER['REMOTE_ADDR'], $config);
	if ($recaptchaResponse['success'] && $recaptchaResponse['score'] > $config['reCAPTCHA_score']) {
		require ROOT_PATH . '/php/mail.php';

		$data = array(
			'name' => $_POST['name'],
			'email' => $_POST['email'],
			'phone' => $_POST['phone'],
			'message' => $_POST['message'],
			'score' => $recaptchaResponse['score'],
			'time' => date('d-m-Y H:i:s')
		);

		$result = senMail($data, $config);
	}

	if ($bAjax) {
		echo json_encode(
			array(
				'result' => $result === true ? true : false,
				'error' => $result === true ? false : $result
			)
		);
	} else {
		$sUrl = $_SERVER['REQUEST_SCHEME'] . '://' . $_SERVER['HTTP_HOST'];
		header('Location: ' . $sUrl, true, 302);
	}

	exit;
}

$route = "";

if (isset ($_SERVER['REQUEST_URI'])) {
	$oRequest = parse_url($_SERVER['REQUEST_URI']);
	$route = str_replace('/', '', $oRequest['path']);
}

switch ($route) {
	case 'privacy-policy':
		include ($route . '.php');
		break;
	case '':
		include ('index.html');
		break;
	default:
		header('HTTP/1.1 404 Not Found');
		include ('error.php');
		die();
}