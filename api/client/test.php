<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
require "../conn.php";
try {
    $statement = $conn->prepare("SELECT m FROM user");
$statement->execute();
$results = $statement->fetchAll(PDO::FETCH_ASSOC);
echo $json = json_encode($results);
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
    exit;
}

?>