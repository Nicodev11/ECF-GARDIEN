<?php
$date = date('j F Y : G:i:s');

try {
  $pdo = new PDO('mysql:host=localhost', 'root', ''); ?>
  <h1>Félicitations</h1>
  <p>Vous êtes connecté à la base de données</p> <?php
} catch (Exception $e) {
  file_put_contents('../logger/errorsdb.log', $date . ' : ' . $e->getMessage() . PHP_EOL, FILE_APPEND); ?>
  <h1>Impossible de se connecter à la base de données</h1>
  <p>Merci de contacter l'administrateur du site</p> <?php
}
