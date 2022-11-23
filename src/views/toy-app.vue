<script>

import toyList from '../cmps/toy-list.vue'

export default {
    el: '#app',
    computed: {
        toys() {
            return this.$store.getters.toysForDisplay
        },
    },
    methods: {
        removeToy(toyId) {
            this.$store
                .dispatch({
                    type: 'removeToy',
                    toyId,
                })
                .then(() => {
                    const msg = { txt: 'Toy was succesfully removed', type: 'success' }
                    console.log(msg.txt)
                    // this.$store.commit({ type: 'setMsg', msg })
                })
        },
    },
    components: {
        toyList,
    },
}

</script>

<template>
    <toy-list v-if="toys && toys.length" 
        :toys="toys" 
        @removeToy="removeToy">
    </toy-list>
</template>

