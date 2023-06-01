<script>
import axios from 'axios';
import WineCard from '../components/WineCard.vue';

export default {
    name: "WinesIndex",

    data() {
        return {
            baseURL: "http://127.0.0.1:8000/api/wines",

            wines: [],
        };
    },

    created() {
        this.getWines();
    },

    methods: {
        getWines() {
            axios.get(this.baseURL).then(res => {
                this.wines = res.data.results;
            });
        },
    },

    components: {
        WineCard,
    }
}
</script>

<template>
    <div class="container py-5">
        <h1>Lista dei vini</h1>

        <div class="row g-3">
            <div v-for="wine in wines" class="col-12 col-md-4 col-lg-3">
                <WineCard :wine="wine"></WineCard>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>