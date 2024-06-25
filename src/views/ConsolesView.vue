<template>
    <div>
        <h1>This is the consoleview</h1>
        
        <card-comp>
            <template #gaming_consoleSlot>
            <div v-for="gaming_console in gameConsole()" :key="gaming_console">
            <h1>{{ gaming_console.name }}</h1>
            {{ gaming_console.manufacturer }}
            {{ gaming_console.release_year }}<br>
            {{ gaming_console.storage }} <br>
            R{{ gaming_console.price }} <br>
            {{ gaming_console.best_selling_game }}
            
            </div>
        </template>
        </card-comp>

    </div>
</template>
<script>
import CardComp from '../components/CardComp.vue'
export default {
    methods:{
        gameConsole(){
            return this.$store.state.gaming_consoles
        }
    },
    components:{
        CardComp
    },
    computed:{
        getGamingConsoles(){
            return this.$store.dispatch('getGamingConsoles')
        }
    },
    mounted(){
        this.getGamingConsoles
    }
}
</script>
<style scoped>

</style>