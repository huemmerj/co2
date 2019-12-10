<template>
  <div class="input-group">
    <input type="text" placeholder="Suchen" class="form-control" v-model="searchValue">
    <div class="input-group-append">
      <button class="btn btn-primary" @click="$emit('onSearched', searchValue)">Suchen</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchValue: ''
    }
  }
}
</script>

<style>

</style>