<template>
    <v-container class="cat-details" color="rgb(243 241 241)" >
        <v-flex class="image" width=30%>
            <v-img width=100% src="https://cdn.chotot.com/1DIewdEQm1r-j8IpMQXUnTcCVXP_KcMiYylIZMbkSY0/preset:listing/plain/e30b1f210d44deeca4dd23ab892ae944-2740420474764745734.jpg"/>
        </v-flex>
        <v-flex  grow=2 width=70%>
            <v-card width=600px height=500px class="detail">
                <b>Name</b>: {{ cat.name }} <br>
                <b>Type</b>: {{ cat.type }} <br>
                <b>Location</b>: {{ cat.city.name }} <br>
                <b>Age</b>: {{ cat.age }} <br>
                <b>Price</b>: {{ cat.price }} <br><br>
            </v-card>
        </v-flex>
    </v-container>
</template>

<script>

export default {
    name: "CatDetail",
    mounted: function() {
        const id = this.$route.params.id
        this.$store.dispatch('cat/getCat', id)
        console.log(this.$store.getters)
    },
    computed: {
        cat: function() {
            return this.$store.getters['cat/catDetail']
        }
    }
}
</script>

<style>
.cat-details {
    top: 150px;
    position: absolute;
    display: flex;
    flex-direction: row;
    width: 70%;
    justify-content: center;
    left: 10%;
}

.image {
    padding-right: 50px
}

.detail {
    padding-left: 50px;
    padding-top: 50px    
}

</style>
