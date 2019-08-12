<template>
    <div>
        <app-navig-top></app-navig-top>
        <span class="name">Mobile realm.</span>
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
        "vue!./comp/navig_top.vue"
    ], function (Vue) {
        // const Vue = window.Vue;
        Vue.component("app-main", {
            template: template
        });
    });
</script>