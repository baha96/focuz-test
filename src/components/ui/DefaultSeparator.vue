<template>
    <div class="default-separator" :style="{ height: height + 'px' }"></div>
</template>

<script>
export default {
    name: "DefaultSeparator",
    props: {
        height: {
            type: Number,
            default: 1
        }
    }
}
</script>

<style scoped lang="sass">
.default-separator
    width: 100%
    background-color: $blue
</style>