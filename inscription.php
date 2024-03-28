 <?php
session_start();
    define('HOST', 'localhost');
    define('DB_NAME', 'test_quizzeo');
    define('USER', 'root');
    define('PASS', '');

    try{
      $db = new PDO("mysql:host=" . HOST . ";dbname=" . DB_NAME, USER, PASS );
      $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    catch(PDOException $e){
      echo $e;
    }
    
    ?>
    <html>
    
    <body>
    <h2>Inscription :</h2>

    <form method="post">
        <label>Nom utilisateur : </label>
        <br>
        <input type="text" name="user" placeholder="Nom utilisateur">
        <br><br>
        <label>Adresse email : </label>
        <br>
        <input type="email" name="email" placeholder="Adresse email">
       
    <br><br>
   
        <label>Mot de passe : </label>
        <br>
        <input type="password" name="password_user" placeholder=" Mot de passe">
        <br><br>
       
        <input type="submit" name="submit" value="Valider">
    </form>
      </body>
    </html>

    <?php
    global $db;
    if(isset($_POST["submit"])){
            $user = $_POST["user"];
            $email = $_POST["email"];
            $password = $_POST["password_user"];

        //$password = password_hash($password, PASSWORD_DEFAULT); 
        $sql = $db->prepare("INSERT INTO utilisateurs(nom_utlisateur, email_utlisateur, password_utlisateur) VALUES ( user:, :email, :password_user)");
        $sql -> execute([
            'user' => $user,
            'email' => $email,
            'password_user' => $password;
        ]);
        header('Location: PageQuiz.html');
      }else{
        echo "Erreur lors de l'inscriptipn";
      }
      ?>