<?PHP
include ('mt_auth.php');
$database   = 'ENTER_DATABASE_NAME_HERE'; // database name
$user_name  = 'ENTER_DATABASE_USERNAME_HERE'; // database user name
$password   = 'ENTER_DATABASE_USERNAME_PASSWORD_HERE'; // database password for defined user name
$server     = 'localhost'; // host server name. Default values are localhost or 127.0.0.1 Normally will not have to be changed...**CASE SENSITIVE
$port       = 3306; // port 3306 is default. Change only if you know what you are doing...
$ipOverride = '127.0.0.1'; // overrides the ip address for localhost. It is very rare that this will need to be changed. Do so only if told by support.
