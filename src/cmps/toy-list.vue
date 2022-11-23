<script>
import toyPreview from './toy-preview.vue';
import '../assets/css/app-main-toy.css';

export default {
    props:{
        toys: Array,
    },
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
 <section>
        <ul class="toys-list clean-list">
            <li v-for="toy in toys">
                <toy-preview :toy="toy" 
                    :key="toy._id" 
                    @removeToy="$emit('removeToy',$event)">
                </toy-preview>
            </li>
        </ul>
    </section>
</template>

