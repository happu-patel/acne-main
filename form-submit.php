<?php

$gtformid = $_POST["gtacneformid"];

if($gtformid==1 || $gtformid == '1')
{
	$name 		= $_POST["gtname"];
	$email 		= $_POST["gtemail"];
	$phone 		= $_POST["gtphone"];
	$city 		= $_POST["gtcity"];
	$message 	= $_POST["gtmessage"];
	
	/* Message Code */
	
	$body = ' <table style="width: 50%; border-collapse: collapse;">
    <tbody>
        <tr>
            <td style=" text-align: left; border: none;">Name: '.stripslashes($name).'</td>
        </tr>
        <tr >
            <td style=" text-align: left; border: none;">Email: '.$email.'</td>
        </tr>
        <tr >
            <td style=" text-align: left; border: none;">Phone: '.$phone.'</td>
        </tr>
        <tr >
            <td style="text-align: left; border: none;">City: '.$city.'</td>
        </tr>
        <tr >
            <td style=" text-align: left; border: none;">Message: '.stripslashes($message).'</td>
        </tr>
    </tbody>
</table>
';
	
	date_default_timezone_set('Asia/Calcutta');
	$gtcurrenttime = date('Y-m-d H:i:s');
		
	$sub = "Enquiry from Acne Amit";		
	
	$headers  = 'From: '. $name . '<admin@dermaluxeaesthetics.in/>' . "\n";
    $headers .= 'MIME-Version: 1.0' ."\n";	
	$headers .= 'Reply-To: '.$email.'' . "\r\n";    
    $headers .= 'Content-Type: text/HTML; charset=ISO-8859-1' ."\n";
    
    
//  	mail('amitchennai2@gmail.com',$sub,$body,$headers);	
    mail('enquiry@dermaluxeaesthetics.in',$sub,$body,$headers);

	echo "<script>document.location.href='https://www.dermaluxeaesthetics.in/thank-you.php'</script>";
		
}





?>
