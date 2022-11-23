<script>
import toyService from '../services/toy.service.js'

export default {
  name: 'toy-edit',
  data() {
    return {
      toyToEdit: null,
    }
  },
  created() {
    const { _id } = this.$route.params
    if (_id) {
      toyService.getById(_id).then((toy) => {
        this.toyToEdit = toy
      })
    } else this.toyToEdit = toyService.getEmptyToy()
    console.log('')
  },
  methods: {
    goBack() {
      this.$router.push('/toy')
    },
    saveToy() {
      this.$store
        .dispatch({ type: 'saveToy', toy: this.toyToEdit })
        .then(() => {
          this.$router.push('/toy')
        })
    },
  },
}
</script>

<template>
  <section v-if="toyToEdit">
    <form @submit.prevent="saveToy">
      <div>
        <label for="txt">Toy Name</label>
        <input required v-model="toyToEdit.name" id="txt" type="text"
          placeholder="Enter your toy name here..." />
      </div>
      <div>
        <label for="inStock">Toy Price</label>

        <input required v-model.number="toyToEdit.price" id="inStock" type="number" />
      </div>
      <div>
        <button @click="saveToy">save</button>
        <button @click="goBack">go back</button>
      </div>
    </form>
  </section>
</template>