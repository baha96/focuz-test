<template>
    <component :is="tag" class="default-title">
        <slot></slot>
    </component>
</template>

<script>
export default {
    name: 'DefaultTitle',
    props: {
        tag: {
            type: String,
            default: 'h2',
        },
    },
}
</script>

<style scoped lang="sass">
.default-title
    font-weight: 500
    line-height: 108%
</style>
