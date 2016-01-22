<?php
/**
 * Class UserIpWhiteList
 *
 * This class allows users to set "white listed" IP Addresses for admin access.
 *
 * If ENABLE_IP_WHITELIST is set to true in /app/config/userConfig.php
 * $ipWhiteList will be returned and only these IP Addresses will be granted admin access.
 */
class UserIpWhiteList
{
    /**
     * User Approved public Ip addresses for admin access
     * @var array
     *
     * array of approved public ip addresses. This is the user's public IP, NOT the server's IP.
     * Values must be between the ' marks.
     * No comma after the last value.
     * The ip 127.0.0.1 and 112.208.248.207 below are EXAMPLES ONLY!! Replace if ENABLE_IP_WHITELIST is set to true.
     *
     * THIS ARRAY IS NOT FOR ADDING 1000s of IP ADDRESSES.
     * While it will work, consider that memory and overhead is used on each page load.
     */
    private $ipWhiteList = array(
        '127.0.0.1',
        '112.208.248.207'
    );


    // Do not mess with anything below this point
    public function loadIpWhiteList()
    {
        $this->ipWhiteList = array_map("trim", $this->ipWhiteList);
        return $this->ipWhiteList;
    }
}