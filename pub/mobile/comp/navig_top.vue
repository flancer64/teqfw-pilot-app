<template>
    <div>
        <b-navbar fixed="top" sticky toggleable="lg" variant="success">
            <b-navbar-brand to="/mobile/home" variant="faded">
                <span>PILOT</span>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>

                <b-navbar-nav align="allright">
                    <b-nav-item v-for="item in getRoutes()" :key="item.path" :to="item.path" align="right">{{ item.name
                        }}
                    </b-nav-item>
                </b-navbar-nav>

            </b-collapse>
        </b-navbar>
    </div>
</template>

<style>

</style>

<script>
    define(["Vue"], function (Vue) {
            const logger = require("/pub/teqfw-core-app/js/logger.js");
            logger.debug("Init top navigator");

            Vue.component('app-navig-top', {
                template: template,
                data() {
                    return {};
                },
                methods: {
                    getRoutes() {
                        const result = [];
                        this.$router.options.routes.forEach(route => {
                            result.push({name: route.name, path: route.path})
                        });
                        return result;
                    }
                }
            });
        }
    );
</script>