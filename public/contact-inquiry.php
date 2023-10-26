<?php
	$a_result = array();
/*	$a_result['result'] = false;
	$a_result['post'] = $_POST;

	$s_mail_to = 'yamaguchi@freemight.com';
	//$s_mail_to = 'jmgcheng@yahoo';
	$s_mail_subject = 'Freemight Website Form Message';


	$s_mail_temp = '';
	$s_mail_temp .= 'Name';
	$s_mail_temp .= '<br/>';
	$s_mail_temp .= ': ' . $_POST['s_name'];
	$s_mail_temp .= '<br/>';

	$s_mail_temp .= 'Email';
	$s_mail_temp .= '<br/>';
	$s_mail_temp .= ': ' . $_POST['s_email'];
	$s_mail_temp .= '<br/>';

	$s_mail_temp .= 'Inquiry';
	$s_mail_temp .= '<br/>';
	$s_mail_temp .= ': ' . $_POST['s_inquiry'];
	$s_mail_temp .= '<br/>';

	$s_mail_email = $s_mail_temp;

	$s_headers  = 'MIME-Version: 1.0' . "\r\n";
	$s_headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
	$s_headers .= 'From: Freemight <no-reply@freemight.com>' . "\r\n";
	$s_headers .= "Bcc: Michael Freemight <jmgcheng.freemight@gmail.com>\r\n"; //comment me someday. This is only for testing

	$a_result['result'] = mail($s_mail_to, $s_mail_subject, $s_mail_email, $s_headers );*/
	
	$a_result['result'] = true;
	echo json_encode($a_result);
?>