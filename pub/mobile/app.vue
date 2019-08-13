<template>
    <div>
        <app-navig-top></app-navig-top>
        <!--        <span v-for="item in getRoutes()">-->
        <!--            <router-link :to="item.path">{{item.name}}</router-link> |-->
        <!--        </span>-->
        <router-view></router-view>
    </div>

</template>

<style>
    .name {
        color: chocolate;
    }
</style>

<script>
    define([
        "Vue",
        "vue!./comp/navig_top.vue",
        "vue!./comp/sign_in.vue"
    ], function (Vue) {
        // const Vue = window.Vue;
        Vue.component("AppMain", {
            template,
            methods: {
                getRoutes: function () {
                    const result = [];
                    this.$router.options.routes.forEach(route => {
                        result.push({name: route.name, path: route.path})
                    });
                    return result;
                }
            }
        });
    });
</script>