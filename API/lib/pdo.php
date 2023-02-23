<?php
$date = date('j F Y : G:i:s');

try {
  $pdo = new PDO('mysql:host=localhost;dbname=restaurant', 'root', 'NicoJuju69');
} catch(Exception $e) {
  file_put_contents('../logger/errorsdb.log', $date.' : '.$e->getMessage().PHP_EOL, FILE_APPEND); ?>
  <h1>Impossible de se connecter à la base de données</h1>
  <p>Merci de contacter l'administrateur du site</p> <?php
}