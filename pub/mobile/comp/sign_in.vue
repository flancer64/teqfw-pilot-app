<template>
    <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-input
                    id="input-user"
                    v-model="form.user"
                    type="email"
                    required
                    placeholder="Enter your email or user name"/>
            <b-form-input
                    id="input-password"
                    v-model="form.password"
                    type="password"
                    required
                    placeholder="Enter your password"/>


            <b-button type="submit" variant="primary">Sign In</b-button>

        </b-form>
        <!--        <b-card class="mt-3" header="Form Data Result">-->
        <!--            <pre class="m-0">{{ form }}</pre>-->
        <!--        </b-card>-->
    </div>
</template>

<script>
    define(["Vue"], function (Vue) {
        Vue.component("app-sign-in", {
            template,
            data() {
                return {
                    form: {
                        user: "",
                        password: ""
                    },
                    show: true
                }
            },
            methods: {
                onSubmit(evt) {
                debugger;
                    evt.preventDefault();
                    fetch("/app/sign_in").then((response) => {
                        return response.json();
                    }).then((result) => {
                        alert(JSON.stringify(result));
                    });
                }
            }

        });
    });

</script>