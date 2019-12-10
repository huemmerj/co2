<template>
  <div>
    <search-field class="mb-5"/>
    <div class="table-responsive">
      <table class="table">
        <caption>Produktlisten</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Kategorie</th>
            <th scope="col">CO 2</th>
          </tr>
        </thead>
        <tbody>
          <tr 
          :key="index"
          v-for="(productlist, index) in productlists">
            <th scope="row">{{productlist.name}}</th>
            <td>{{productlist.category.name}}</td>
            <td>{{productlist.co2}}</td>
            <td>
              <button class="btn-danger">X</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import SearchField from './search.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    'search-field': SearchField
  },
  computed: {
    ...mapGetters([
      'productlists',
      'categories',
      'products',
    ]),
  },
}
</script>