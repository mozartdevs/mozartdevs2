<?php
$servername = "165.211.24.43";
$username = "consult";
$password = "Cons-123456789";
$dbname = "basedoc2_consult";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Récupération de la liste des tables
    $tables = $conn->query("SHOW TABLES")->fetchAll(PDO::FETCH_COLUMN);
    
    // Affichage de la liste des tables
    echo "Liste des tables dans la base de données $dbname : <br>";
    foreach($tables as $table) {
        echo $table . "<br>";
    }
    
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>