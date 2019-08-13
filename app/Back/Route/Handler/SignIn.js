"use strict";

/**
 * Authenticate users by username & password.
 *
 * @param {TeqFw_Core_App_Logger} TeqFw_Core_App_Logger
 * @return {Fl64_Pilot_Back_Route_Handler_SignIn}
 * @constructor
 */
function Fl64_Pilot_Back_Route_Handler_SignIn(
    TeqFw_Core_App_Logger
) {
    /** @type {TeqFw_Core_App_Logger} */
    const _logger = TeqFw_Core_App_Logger;
    /**
     * Hardcoded users data.
     *
     * @type {*[]}
     * @private
     */
    const _base = [
        {user: "alex", password: "pass_alex"},
        {user: "john", password: "pass_john"},
        {user: "boo", password: "pass_bar"}
    ];
    /**
     * Send text to the web.
     */
    this.exec = function (req, res, next) {
        _logger.debug("SignIn API request is here...");
        res.send({msg: "Empty handler is here!!"});
        // next();
    };

    /* Object finalization (result) */
    return Object.freeze(this);
}

/* Module exports */
module.exports = Fl64_Pilot_Back_Route_Handler_SignIn;