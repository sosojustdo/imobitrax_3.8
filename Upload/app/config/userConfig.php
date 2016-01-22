<?php
include ('auth.php');

/**
 * User Configuration Settings
 *
 *
 */

/**
 * Session Directory
 * THIS IS AN ALTERNATIVE TO SETTING session.save_path in the php.ini
 * If setting, use absolute path only to directory where sessions will be stored.
 * This directory needs to be out of the public_html folder, or equivalent, with proper permissions granted > (755, 775 or 777 depending on server settings).
 * DO NOT assign it to a directory in the public folders.
 * Example >> SESSION_DIRECTORY = '/home/server/sessions';
 */
const SESSION_DIRECTORY = '';


/**
 * Session Timeout
 * Default = 60 (minutes).
 * Value is number of minutes before being logged out.
 * Generally, a non-default session directory must be set for this to have an affect
 */
const SESSION_TIMEOUT = 60;


/**
 * For added security, you may change the name of the login page.
 * 1. It must be a php page with a .php extension.
 * 2. DO NOT leave this blank!
 * 3. If you change the name here, you MUST rename the /account/login.php file
 * 4. Finally, if this is changed from login.php, you MUST bookmark or remember the new page. For security, log outs and session timeouts will not be redirected to the login page.
 */
const LOGIN_PAGE = 'login.php';


/**
 * Enter your Secret API Key below. This is a key you create (can contain any character except ')
 * Example >> const API_KEY = 'SECRETAPIKEYHERE';
 */
const API_KEY = '';


/**
 * Enter the Secret Key from the Clickbank Instant Notification Service below (can contain any character except ')
 * Example >> const CLICKBANK_KEY = 'SECRETKEYHERE';
 */
const CLICKBANK_KEY = '';


/**
 * ADMIN_MEMORY_LIMIT
 * Memory Limit for pages in the admin
 * Default is 64M (64 Megabytes)
 * Use this to change the maximum memory allocated in bytes to a php script/page
 *
 * PUBLIC_MEMORY_LIMIT
 * Memory Limit for non-admin pages (click.php, lp_track.php, etc)
 * Default is 32M (32 Megabytes)
 * Use this to change the maximum memory allocated in bytes to a php script/page
 *
 * HIGH_MEMORY_LIMIT
 * Default is 256M (256 Megabytes)
 * Use this to change the maximum memory allocated in bytes to specific pages requiring additional memory (like csv downloads)
 *
 * Accepts integers. Adding suffix K, M or G will set the vale as Kilobytes, Megabytes or Gigabytes respectively.
 * To have no memory limit, set this directive to -1 (know what you're doing)
 *
 * NOTE - certain server settings may invalidate or limit this directive (a few common ones are listed below)
 * 1. PHP Safe Mode (invalidates)
 * 2. If Suhosin is installed, suhosin.memory_limit must also be configured (Limited to suhosin.memory_limit regardless of MEMORY_LIMIT)
 * 3. Apache can limit memory also using RLimitMEM in the httpd.conf (Limited to RLimitMEM regardless of MEMORY_LIMIT)
 */
const ADMIN_MEMORY_LIMIT = '64M';
const PUBLIC_MEMORY_LIMIT = '32M';
const HIGH_MEMORY_LIMIT = '256M';


/**
 * ENABLE_IP_WHITELIST
 * Default is false.
 * Use to limit access to the admin site.
 * If set to true, then admin access will only be granted to approved ip addresses
 * listed in the $ipWhiteList array starting on line 24 of the /app/config/UserIpWhiteList.php file.
 */
define('ENABLE_IP_WHITELIST', false); // true or false, no ' or "


/**
 * ENABLE_BLOCKED_IP_LIST
 * Default is false.
 * Use to block access to the entire install.
 * If set to true, then access will be blocked to any ip address
 * listed in the $ipBlockedList array  starting on line 24 of the /app/config/UserBlockIpList.php file.
 */
define('ENABLE_BLOCKED_IP_LIST', false); // true or false, no ' or "


/**
 * LOGIN_LOG
 * Default is false.
 * When set to false, iMobiTrax will only log failed login attempts.
 * Setting this to true will log every login attempt.
 */
define('LOGIN_LOG', false); // true or false, no ' or "


/**
 * ENABLE_SITE_LOG
 * Default is false.
 * Setting this to true will log access data from EVERY iMobiTrax page.
 * This does add overhead, so only do this if you suspect a security breach.
 */
define('ENABLE_SITE_LOG', false); // true or false, no ' or "


/**
 * DEBUG_MODE
 * Default is false.
 * Setting DEBUG_MODE to true will display errors on the page. Only do this if getting blank pages or server errors INSIDE iMobiTrax.
 * Leaving this set to true is not advised as it could result in security vulnerabilities.
 */
define('DEBUG_MODE', false); // true or false, no ' or "


/**
 * DEBUG_SQL
 * Default is false.
 * Setting DEBUG_SQL to true will display sql errors on the page. Only do this if getting blank pages or server errors INSIDE iMobiTrax.
 * If true, only sql errors will be displayed.
 * Leaving this set to true is not advised as it could result in security vulnerabilities.
 */
define('DEBUG_SQL', false); // true or false, no ' or "
