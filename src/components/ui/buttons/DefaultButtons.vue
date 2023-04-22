<template>
    <div class="default-button">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "DefaultButtons"
}
</script>

<style scoped lang="sass">
.default-button
    border: 1px solid $gray
    padding: 8px 10px
    border-radius: 50px
    font-weight: 500
    font-size: 12px
    line-height: 108%
    cursor: pointer
</style>