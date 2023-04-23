<template>
    <div class="default-separator" :style="{ height: height + 'px', backgroundColor: color }"></div>
</template>

<script>
export default {
    name: 'DefaultSeparator',
    props: {
        height: {
            type: Number,
            default: 1,
        },
        color: {
            type: String,
            default: '#DFE4EF',
        },
    },
}
</script>

<style scoped lang="sass">
.default-separator
    width: 100%
</style>
