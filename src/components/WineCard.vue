<script>
export default {
    name: 'WineCard',

    data() {
        return {

        }
    },

    props: {
        wine: Object,
    },
}
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ wine.nome }}</h5>

            <ul class="list-group py-3">
                <li class="list-group-item">Tipologia: {{ wine.tipologia }}</li>
                <li class="list-group-item">Colore: {{ wine.colore }}</li>
                <li class="list-group-item">Annata: {{ wine.annata }}</li>
            </ul>

            <router-link class="btn btn-primary"
                :to="{ name: 'singleWine', params: { id: wine.id } }">Dettagli</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>