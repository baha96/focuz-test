<template>
    <p class="default-description">
        <slot></slot>
    </p>
</template>

<script>
export default {
    name: 'DefaultDescription',
}
</script>

<style scoped lang="sass">
.default-description
    font-weight: 400
    font-size: 11px
    line-height: 108%
</style>
