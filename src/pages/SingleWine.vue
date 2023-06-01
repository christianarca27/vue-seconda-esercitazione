<script>
import axios from 'axios';

export default {
    data() {
        return {
            baseURL: "http://127.0.0.1:8000/api/wines/",

            wine: {},

            isLoading: true,

            isSuccess: false,

            error: '',
        }
    },

    methods: {
        getSingleWine() {
            axios.get(this.baseURL + this.$route.params.id).then(res => {
                this.isSuccess = res.data.success;

                if (this.isSuccess) {
                    this.wine = res.data.result;
                }
                else {
                    this.error = res.data.error;
                }

                this.isLoading = false;
            });
        },
    },

    created() {
        this.getSingleWine();
    }
}
</script>

<template>
    <div class="container py-5">
        <div v-if="!isLoading">
            <div v-if="isSuccess">
                <h1>{{ wine.nome }}</h1>

                <ul>
                    <li v-for="(value, key) in wine">{{ key + ': ' + value }}</li>
                </ul>
            </div>

            <div v-else class="alert alert-danger" role="alert">
                {{ error }}
            </div>
        </div>

        <div v-else class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>