<script>
import toyService from '../services/toy.service.js'

export default {
  name: 'toy-detail',
  data() {
    return {
      toy: null,
      isEditMode: false,
    }
  },
  created() {
    const { _id } = this.$route.params
    toyService.getById(_id).then((toy) => {
      this.toy = toy
    })
  },
  methods: {
    updateReview({ target }, idx) {
      this.toy.reviews[idx].content = target.innerText
      this.$store.dispatch({ type: 'saveToy', toy: this.toy })
    },
    toggleEditMode() {
      this.isEditMode = !this.isEditMode
    },
    goBack() {
      this.$router.push('/toy')
    },
  },
  computed: {
    formattedDate() {
      var currToyCreatedAt = this.toy.createdAt
      var formatedDate = new Date(currToyCreatedAt)
      return formatedDate
    },
  },
}
</script>

<template>
  <section v-if="toy" class="toy-details flex flex-col items-center gap-2">
    <article>
      <p>ID: {{ toy._id }}</p>
      <p>Name: {{ toy.name }}</p>
      <p>Price: ${{ toy.price }}</p>
      <p>Created at:{{ formattedDate }}</p>
      <p>In stock: {{ toy.inStock }}</p>
    </article>
    <button @click="goBack">go back</button>

    <!-- reviews -->
    <!-- <h2>Reviews</h2> -->
    <!-- <section v-if="toy.reviews">
      <article
        v-editable="isEditMode"
        v-for="({ content, user, id }, idx) in toy.reviews"
        :key="id"
      >
        <button @click="toggleEditMode">edit review</button>
        <h3>{{ user }}</h3>
        <span @blur="updateReview($event, idx)">{{ content }}</span>
      </article>
    </section> -->
  </section>
</template>
