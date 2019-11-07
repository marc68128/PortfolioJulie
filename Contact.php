<?php
$mail = 'julie.gissinger@hotmail.fr'; // Déclaration de l'adresse de destination.
$return = ""; 
if (isset($_POST['envoi']))
{
	/*
	 * cette fonction sert à nettoyer et enregistrer un texte
	 */
	function Rec($text)
	{
		$text = htmlspecialchars(trim($text), ENT_QUOTES);
		if (1 === get_magic_quotes_gpc())
		{
			$text = stripslashes($text);
		}
		$text = nl2br($text);
		return $text;
	};
	// formulaire envoyé, on récupère tous les champs.
	$nom     = (isset($_POST['nom']))     ? Rec($_POST['nom'])     : '';
	$email   = (isset($_POST['email']))   ? Rec($_POST['email'])   : '';
	$objet   = (isset($_POST['objet']))   ? Rec($_POST['objet'])   : '';
	$message1 = (isset($_POST['message'])) ? Rec($_POST['message']) : '';

	if (!preg_match("#^[a-z0-9._-]+@(hotmail|live|msn).[a-z]{2,4}$#", $mail)) // On filtre les serveurs qui rencontrent des bogues.
	{
    	$passage_ligne = "\r\n";
	}
	else
	{
    	$passage_ligne = "\n";
	}
  
	//=====Création de la boundary
	$boundary = "-----=".md5(rand());
	//==========
  
	//=====Définition du sujet.
	$sujet = $objet;
	//=========
  
	//=====Création du header de l'e-mail.
	$header = "From: \"".$nom."\"<".$email.">".$passage_ligne;
	$header.= "Reply-to: \"".$nom."\"<".$email.">".$passage_ligne;
	$header.= "MIME-Version: 1.0".$passage_ligne;
	$header.= "Content-Type: multipart/alternative;".$passage_ligne." boundary=\"$boundary\"".$passage_ligne;
	//==========
  
	//=====Création du message.
	$message = $passage_ligne."--".$boundary.$passage_ligne;
	//=====Ajout du message au format texte.
	$message.= "Content-Type: text/plain; charset=\"ISO-8859-1\"".$passage_ligne;
	$message.= "Content-Transfer-Encoding: 8bit".$passage_ligne;
	$message.= $passage_ligne.$message1.$passage_ligne;
	//=========
	$message.= $passage_ligne."--".$boundary."--".$passage_ligne;
	$message.= $passage_ligne."--".$boundary."--".$passage_ligne;
	//==========
	//=====Envoi de l'e-mail.
	/*if(mail($mail,$sujet,$message,$header))
	{
		$return = "Votre mail à été envoyé avec succès !" ;
	}
	else {
		$return = "Echec de l'envoi du mail !" ; 
	}*/
//==========
}
?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    	<title>Julie Gissinger</title>
    	<link href="Common/Style.css" type="text/css" media="all" rel="stylesheet" />
		<link href="Contact/Style.css" type="text/css" media="all" rel="stylesheet" />
    	<link rel="icon" type="image/png" href="Images/icon.png">
    	<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
    	<script src="http://code.jquery.com/color/jquery.color.plus-names-2.1.0.min.js" type="text/javascript"></script>
	</head>

	<body>	
		<div id="PreLoader">
			<div>
			<div id="Point1"></div>
			<div id="Point2"></div>
			<div id="Point3"></div>
			<div id="Point4"></div>
			</div>
		</div>	
			<header>
				<div id="LogoHeader">
					<a href="http://juliegissinger.fr" >
						<img src="Images/Logo.png" alt="Logo" />
					</a>
				</div>
				
				<ul>
					<li id="LinkAbout">
						<a href="http://about.juliegissinger.fr">
							A PROPOS
						</a>
					</li>
					<li id="LinkCv">
						<a href="http://cv.juliegissinger.fr">
							CV
						</a>
					</li>
					<li id="LinkRealisations"> 
						<a href="http://realisations.juliegissinger.fr">
							REALISATIONS
						</a>
					</li>
					<li id="LinkContact">
						<a href="#">
							CONTACT
						</a>
					</li>
				</ul>
				
			</header>
			
			<div id ="ContentContact">
				<div id="bulleContact">
					<div>
					<h1>Julie Gissinger</h1>
					6 rue du Kaegy<br />
					68440 Schlierbach <br />
					06 23 97 67 29<br />
					julie.gissinger@hotmail.com<br />
					</div>
				</div>
				
				<form action="Contact.php" method="post">
					<table>
						<tr>
							<td>Nom :</td>
							<td><input type="text" name="nom" /></td>
						</tr>
						<tr>
							<td>Adresse e-mail :</td>
							<td><input type="text" name="email" /></td>
						</tr>
						<tr>
							<td>Objet :</td>
							<td><input type="text" name="objet" /></td>
						</tr>
						<tr>
							<td>Message :</td>
							<td><textarea name="message"></textarea></td>
						</tr>
						<tr>
							<td></td>
							<td id="tdSubmit"><input type="submit" name="envoi" value="Envoyer" onclick="return validateForm();" /></td>
						</tr>
					</table>
					<div id="validFormMessage"><?php echo $return; ?></div>
				</form>
			</div>

			<footer>
				Tous droits réservés <span>©</span> Julie Gissinger - 2013
			</footer>
			<script src="Common/Script.js" type="text/javascript"></script>
			<script src="Contact/Script.js" type="text/javascript"></script>
	</body>
</html>
