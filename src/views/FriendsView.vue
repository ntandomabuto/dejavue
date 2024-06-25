<template>
    <div>
        <h1>This is the consoleview</h1>
        <card-comp>
        <template #friends>
            <div v-for="friend in friendsData()" :key="friend">
            <h1>{{friend.id }}.
            {{ friend.firstName}}
            {{ friend.lastName}}<br>
            {{ friend.gender}}<br>  
            {{ friend.profile}}
            {{ friend.contactDetails}}</h1>
            
            </div>
        </template>
        </card-comp>

    </div>
</template>
<script>
import CardComp from '../components/CardComp.vue'
export default {
    methods:{
        friendsData(){
            return this.$store.state.friends
        }
    },
    components:{
        CardComp
    },
    computed:{
        getFriends(){
            return this.$store.dispatch('getFriends')
        }
    },
    mounted(){
        this.getFriends
    }
}
</script>
<style scoped>
    
</style>