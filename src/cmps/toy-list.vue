<script>
import toyPreview from './toy-preview.vue';

export default {
    props:['toys'],
    computed:{
        getUser(){
            return this.$store.getters.getUser
        }
    },
    components:{
        toyPreview
    }
}

</script>

<template>
 <section class="toys-list-container">
        <ul class="toys-list clean-list ">
            <li v-for="toy in toys">
                <toy-preview :toy="toy" 
                    :key="toy._id" 
                    @removeToy="$emit('removeToy',$event)">
                </toy-preview>
            </li>
        </ul>
    </section>
</template>

