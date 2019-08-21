import $Paseto from 'paseto.js';

const $encoder = new $Paseto.V2();
const _b64sk = "hNoAS1BVeOZkKYUt4Y5WcheSdu7L5DVsNmX14dKvADQ";
const _pk = new $Paseto.PublicKey(new $Paseto.V2());


/**
 * Authenticate users by username & password.
 */
export default class Fl64_Pilot_Back_Route_Handler_SignIn {
    constructor(spec) {
        /** @type {TeqFw_Core_App_Logger} */
        const _logger = spec.TeqFw_Core_App_Logger;
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
         * @memberOf Fl64_Pilot_Back_Route_Handler_SignIn.prototype
         */
        this.exec = function (req, res, next) {
            _logger.debug("SignIn API request is here...");
            const body = req.body;
            let result = {msg: "U-ups... authentication is failed."};
            if (typeof body === "object" && body.user && body.password) {
                if (_base[body.user] === body.password) {
                    // compose body token for authentication token
                    const message = JSON.stringify({user: body.user});
                    _pk.base64(_b64sk)
                        .then(() => {
                            const encoder = _pk.protocol();
                            return encoder.encrypt(message, _pk);
                        })
                        .then(token => {
                            result = {token};
                            const opts = {maxAge: 900000, httpOnly: true};
                            res.cookie("teq-fw-auth", token, opts);
                            res.send(result);
                        })
                        .catch((err) => {
                            _logger.error(err);
                            res.send(result);
                        });

                    // $encoder.symmetric()
                    //     .then(sk => {
                    //         // (sk instanceof Paseto.SymmetricKey) -> true
                    //         const message = 'A screaming comes across the sky.'
                    //         return $encoder.encrypt(message, sk);
                    //     })
                    //     .then(token => {
                    //         result = {token};
                    //         res.send(result);
                    //     })
                    //     .catch((err) => {
                    //         _logger.error(err);
                    //         res.send(result);
                    //     });
                } else {
                    res.send(result);
                }
            } else {
                res.send(result);
            }
        };
    }
}