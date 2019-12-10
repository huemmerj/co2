<template>
  <nav id="sidebar">
    <div class="sidebar-header">
          <h3>Co² </h3>
      </div>

      <ul class="list-unstyled components">
        <!-- Produktlisten -->
        <li
          v-if="productlists.length > 0"
          class="active" >
          <a href="#productlists">Produktlisten</a>
        </li>
        <!-- Produkte -->
        <li  v-if="products.length > 0">
          <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Produkte</a>
          <ul class="collapse list-unstyled" id="pageSubmenu">
              <li :key="index" v-for="(product, index) in products">
                  <a href="#">{{product.name}}</a>
              </li>
          </ul>
        </li>
        <!-- Kategorien -->
        <li v-if="categories.length > 0">
          <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Kategorien</a>
          <ul class="collapse list-unstyled" id="pageSubmenu">
              <li :key="index" v-for="(categorie, index) in categories">
                  <a href="#">{{categorie.name}}</a>
              </li>
          </ul>
        </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'productlists',
      'categories',
      'products',
    ]),
  },
}
</script>

<style>

</style>