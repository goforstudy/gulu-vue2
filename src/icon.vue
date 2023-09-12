<template>
  <svg v-if="name" class="icon">
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            default: ''
        }
    }
};
</script>
<style lang="scss" scoped>

.icon {
  height: 1em;
  width: 1em;
}
</style>