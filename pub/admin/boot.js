import TeqFw_Di_Container from "/Container.mjs";
// create DI container and place globally loaded objects (from HTML.head) inside
/** @type {TeqFw_Di_Container} */
const container = new TeqFw_Di_Container();
container.set("Vue$", Vue);
container.set("VueRouter$", VueRouter);
container.addSourceMapping("MyApp", "/pub/admin", true, "js");

fetch("/core/app/config/get")
    .then(function (response) {
        return response.json();
    })
    .then(function (cfg) {
        // const fn_load = httpVueLoader.register(Vue, "/pub/admin/app.vue");

        container.get("MyApp_app").then((app) => {
            app.load().then(
                () => {
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
                }
            );

        });
    });
