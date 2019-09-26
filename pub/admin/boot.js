import TeqFw_Di_Container from "/Container.mjs";
// create DI container and place globally loaded objects (from HTML.head) inside
/** @type {TeqFw_Di_Container} */
const container = new TeqFw_Di_Container();
container.addSourceMapping("TeqFw_Di", "/mod/teqfw/di/", true, "mjs");
container.addSourceMapping("MyApp", "/pub/admin", true, "js");
// place globally loaded objects (from HTML.head) inside
const Vue = window.Vue;
const VueRouter = window.VueRouter;
container.set("Vue$", Vue);
container.set("VueRouter$", VueRouter);
// add `vue$$` plugin to DI container
container.get('TeqFw_Di_Container_Plugin_Vue$')
    .then(/** @type {TeqFw_Di_Container_Plugin_Vue} */(di_plugin_vue) => {
        di_plugin_vue.setVue(Vue);
        container.addPlugin("vue", di_plugin_vue);
        container.get("vue$$MyApp_App").then((app) => {
            // fetch application configuration (JSON)
            fetch("/core/app/config/get")
                .then(function (response) {
                    return response.json();
                })
                .then(function (cfg) {
                    // load hierarchy of application components
                    container.get("vue$$MyApp_App").then((app) => {
                        debugger;
                        Vue.use(VueRouter);
                        const routes = [];
                        const routes_items = cfg.routes;
                        /** @type {TeqFw_Core_App_Registry_Front_Route.Entry} one */
                        for (const one of routes_items) {
                            const path = one.path;
                            const label = one.label;
                            const comp_name = one.component_name;
                            const comp_obj = Vue.component(comp_name);
                            routes.push({path: path, name: label, component: comp_obj});
                        }

                        const router = new VueRouter({
                            mode: "history",
                            routes: routes
                        });

                        new Vue({
                            router,
                            el: "#teqfw-app"
                        });
                    });
                });
        });
    });


