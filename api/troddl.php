<?php
session_start();
function sendMessage($chatID, $messaggio, $token) {
    $url = "https://api.telegram.org/bot" . $token . "/sendMessage?chat_id=" . $chatID;
    $url = $url . "&text=" . urlencode($messaggio);
    $ch = curl_init();
    $optArray = array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true
    );
    curl_setopt_array($ch, $optArray);
    $result = curl_exec($ch);
    curl_close($ch);
    return $result;
}
if (isset($_POST['key']) == "svRlOFp,ep5f2e5")
{
    if(isset($_SESSION['email']) AND $_SESSION['email'] == $_POST['email']){
        echo false;
    }else{
        $_SESSION['email'] = $_POST['email'];
        $data = [['Name', $_POST['name']], 
        ['Email', $_POST['email']], 
        ['Service', $_POST['service']], 
        ['Budget', $_POST['budget']], 
        ['Message', $_POST['message']]];
        $message = "I Need Mozartdevelopers \n";
        for ($i=0; $i < sizeof($data); $i++) { 
            $message .= $data[$i][0] . ": " . $data[$i][1] . "\n";
        }
        $message .= "IP Address: " . $_SERVER['REMOTE_ADDR'];
        
        $token = "5453733379:AAG0BDgTT0TjDKRl-eMPga1ppQ7IE7sXjrA";
        $chatid = 5668824009;
        sendMessage($chatid, $message, $token);
        echo true;
    }
}

?>