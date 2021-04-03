<template>
  <Header />
  <div class="m-4 text-3xl font-bold">Hello from tailwind</div>
  <Store />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "header/Header";
import Store from "store/Store";

export default defineComponent({
  components: {
    Header,
    Store,
  },
});
</script>
