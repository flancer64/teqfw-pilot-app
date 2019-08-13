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
    const _base = {
        alex: "gusev",
        john: "doe",
        jane: "doe"
    };
    /**
     * Send text to the web.
     */
    this.exec = function (req, res, next) {
        _logger.debug("SignIn API request is here...");
        const body = req.body;
        let result = {msg: "U-ups... authentication is failed."};
        if (typeof body === "object" && body.user && body.password) {
            if (_base[body.user] === body.password) {
                result = {msg: "Yo, bro! You are authenticated!!!"};
            }
        }
        res.send(result);
        // next();
    };

    /* Object finalization (result) */
    return Object.freeze(this);
}

/* Module exports */
module.exports = Fl64_Pilot_Back_Route_Handler_SignIn;