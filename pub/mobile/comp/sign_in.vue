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
        Vue.component('app-sign-in', {
            template,
            data() {
                return {
                    form: {
                        email: '',
                        name: '',
                        food: null,
                        checked: []
                    },
                    foods: [{text: 'Select One', value: null}, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
                    show: true
                }
            },
            methods: {
                onSubmit(evt) {
                    evt.preventDefault()
                    alert(JSON.stringify(this.form))
                },
                onReset(evt) {
                    evt.preventDefault()
                    // Reset our form values
                    this.form.email = ''
                    this.form.name = ''
                    this.form.food = null
                    this.form.checked = []
                    // Trick to reset/clear native browser form validation state
                    this.show = false
                    this.$nextTick(() => {
                        this.show = true
                    })
                }
            }

        });
    });

</script>