<script>

export default {
    props:['toy'],
    methods:{
        toggleToyState(){
            this.$emit('toggleToyState', this.todo)
        }
    }
}

</script>

<template>
    <section class="toy-preview-container flex space-between m-b-xs">
        <h2 class="txt" 
            :style="(toy.inStock)? 'text-decoration: none;' : 'text-decoration: line-through;'">
            {{ toy.name }}
        </h2>
        <div class="toy-preview-btns flex space-around">
            <!-- <router-link class="btn" :to="{ path: 'toy/edit/' + toy._id }">Edit</router-link> -->
            <!-- <router-link class="btn" :to="{ path: 'toy/' + toy._id }">Details</router-link> -->
            <button class="btn" @click="$emit('removeToy', toy._id)">X</button>
        </div>
    </section>
</template>

