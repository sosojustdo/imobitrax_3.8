<?php
/**
 * Class UserBlockIpList
 *
 * This class allows users to set IP Addresses that will be blocked from the entire application.
 *
 * If ENABLE_BLOCKED_IP_LIST is set to true in /app/config/userConfig.php
 * $ipBlockedList will be returned and these IP Addresses will be blocked.
 */
class UserBlockIpList
{
    /**
     * User set public Ip addresses to block access to entire application
     * @var array
     *
     * array of blocked public ip addresses. This is the public IP of a visitor, NOT the server's IP.
     * Values must be between the ' marks.
     * No comma after the last value.
     * The ip 127.0.0.1 and 112.208.248.207 below are EXAMPLES ONLY!! Replace if ENABLE_BLOCKED_IP_LIST is set to true.
     *
     * THIS ARRAY IS NOT FOR ADDING 1000s of IP ADDRESSES.
     * While it will work, consider that memory and overhead is used on each page load.
     */
    private $ipBlockedList = array(
        '127.0.0.1',
        '112.208.248.207'
    );


    // Do not mess with anything below this point
    public function loadIpBlockedList()
    {
        $this->ipBlockedList = array_map("trim", $this->ipBlockedList);
        return $this->ipBlockedList;
    }
}