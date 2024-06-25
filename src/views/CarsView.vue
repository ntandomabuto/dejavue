<template>
    <div>
        <h1>This is the carsView</h1>
    </div>

    <card-comp>
        <template #carSlot>
            <div v-for="car in carsData()" :key="car">
            <h1>{{ car.make }}</h1>
            {{ car.model }}
            {{ car.year}}
            {{ car.color }}
            {{ car.price }}
            </div>
        </template>
        </card-comp>
    
</template>
<script>
import CardComp from '../components/CardComp.vue'
export default {
    methods:{
        carsData(){
           return this.$store.state.cars
        }
    },
    components:{
        CardComp
    },
    computed:{
        getCars(){
            return this.$store.dispatch('getCars')
        }
    },
    mounted(){
        this.getCars
    }
}
</script>
<style scoped>
</style>