<script>
import '../assets/css/app-toy-preview.css';

export default {
    props: {
        toy: Object,
    },
    methods: {
        toggleToyState() {
            this.$emit('toggleToyState', this.todo)
        },
    },
    computed: {
        findLabel() {
            return this.$store.getters.toysLables.filter(l => this.toy.labels.includes(l.label))
        }
    }
}

</script>

<template>
    <section class="toy-preview">
        <button @click="$emit('removeToy', toy._id)">X</button>
        <h2 class="txt">
            {{ toy.name }}
        </h2>
        <hr />
        <div class="toy-preview-img">
            <img :src="toy.img" :alt="toy.name" />
        </div>
        <div>
            <router-link class="btn" :to="{ path: 'toy/edit/' + toy._id }">Edit</router-link> | 
            <router-link class="btn" :to="{ path: 'toy/' + toy._id }">Details</router-link>
        </div>
        <ul class="toy-preview-labels clean-list">
            <li v-for="label in findLabel" :style="{'background-color' : label.color}">{{ label.label }}</li>
        </ul>
    </section>
</template>

