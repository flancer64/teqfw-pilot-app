import $path from "path";

/**
 * Initializer for the application.
 */
export default class Fl64_Pilot_Sys_App_Init {
    constructor(spec) {
        /** @type {TeqFw_Core_App_Configurator} */
        const _config = spec.TeqFw_Core_App_Configurator;
        /** @type {TeqFw_Core_App_Registry_Front_Route} */
        const _reg_front_routes = spec.TeqFw_Core_App_Registry_Front_Route;
        /** @type {TeqFw_Core_App_Registry_Server_Realm} */
        const _reg_back_realms = spec.TeqFw_Core_App_Registry_Server_Realm;
        /** @type {TeqFw_Core_App_Registry_Server_Route} */
        const _reg_back_routes = spec.TeqFw_Core_App_Registry_Server_Route;
        /** @type {Fl64_Pilot_Back_Route_Handler_SignIn} */
        const _hndl_sign_in = spec.Fl64_Pilot_Back_Route_Handler_SignIn;


        /**
         * Execute module's initialization. This function is called by framework on application startup.
         *
         * @return {Promise<void>}
         * @memberOf Fl64_Pilot_Sys_App_Init.prototype
         */
        this.exec = async function () {

            function setup_languages() {
                _config.set("lang", {available: ["en", "es", "ru"], default: "en"});
            }

            function setup_realms() {
                const path_root = _config.get("path/root");

                /* Init web server realms: TODO add docs URL here */
                _reg_back_realms.add({
                    name: "mobile",
                    path_to_home_page: $path.join(path_root, "pub", "mobile.html")
                });
                _reg_back_realms.add({
                    name: "admin",
                    path_to_home_page: $path.join(path_root, "pub", "admin.html")
                });
                _reg_back_realms.setDefaultRealm("mobile");
            }

            /**
             * Setup backend routes (server side API).
             */
            function setup_routes_back() {
                _reg_back_routes.add({path: "/app/sign_in", handler: _hndl_sign_in});
            }

            /**
             * Setup frontend routes (Single Page Application).
             */
            function setup_routes_front() {
                /* init web server routes */
                _reg_front_routes.add({path: "/home", component_name: "app-home", label: "Home"});
                _reg_front_routes.add({path: "/profile", component_name: "app-home", label: "Profile"});
                _reg_front_routes.add({path: "/sign/in", component_name: "app-sign-in", label: "Sign In"});
                _reg_front_routes.add({path: "/sign/out", component_name: "app-home", label: "Sign Out"});
                _reg_front_routes.add({path: "/sign/up", component_name: "app-home", label: "Sign Up"});
            }

            /* This function actions. */
            setup_languages();
            setup_realms();
            setup_routes_back();
            setup_routes_front();

        };

    }
}