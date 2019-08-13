"use strict";
const $Paseto = require('paseto.js');
const $encoder = new $Paseto.V2();

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
                $encoder.symmetric()
                    .then(sk => {
                        // (sk instanceof Paseto.SymmetricKey) -> true
                        const message = 'A screaming comes across the sky.'
                        return $encoder.encrypt(message, sk);
                    })
                    .then(token => {
                        result = {token};
                        res.send(result);
                    })
                    .catch((err) => {
                        _logger.error(err);
                        res.send(result);
                    });
            } else {
                res.send(result);
            }
        } else {
            res.send(result);
        }
    };

    /* Object finalization (result) */
    return Object.freeze(this);
}

/* Module exports */
module.exports = Fl64_Pilot_Back_Route_Handler_SignIn;