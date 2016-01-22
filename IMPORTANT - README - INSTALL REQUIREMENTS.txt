** INSTALLATION REQUIREMENTS **

The items listed below are required for iMobiTrax to function properly.

1. PHP version 5.3+
2. ionCube Loader 4.4
3. PDO Extension for mysql installed and enabled
4. mCrypt with the Blowfish Cipher
5. mbString() enabled
6. curl
7. XMLReader

***ALSO, MYSQL STRICT MODE NEEDS TO BE OFF FOR INSTALL AND USE***
strict mode is enabled with either STRICT_ALL_TABLES or STRICT_TRANS_TABLES.
http://dev.mysql.com/doc/refman/5.6/en/sql-mode.html

For more information, view "Getting Started" on page 3 of the User Guide, which is included in this download.


** INSTALLATION INSTRUCTIONS **
If you want to install iMobiTrax yourself, view the installation instructions on page 4 of the User Guide.

1. Upload the contents of the upload folder. The upload folder itslef does not need to be uploaded. IMT can be in a subdomain, in a directory, or on the root.
2. Navigate to /account/install.php in your browser. If all of the above requirements are met, you will see the installation form.

   ***Note that if you see a blank white page, then either mCrypt, ionCube 4.4+, or PDO is not installed.

3. Complete the form and click the button. Installation will take about 5 seconds or so.
4. Delete the install files from the server.


