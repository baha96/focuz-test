<template>
    <div class="default-dot">
        <span
            v-for="color in dotsColor"
            :key="'dot-' + color"
            class="default-dot__item"
            :style="{ backgroundColor: color }"
        ></span>
    </div>
</template>

<script>
export default {
    name: 'DefaultDot',
    props: {
        dotsColor: {
            type: Array,
            required: true,
        },
    },
}
</script>

<style scoped lang="sass">
.default-dot
    display: flex
    align-items: center
    &__item
        width: 9px
        height: 9px
        border-radius: 50%
        border: 1px solid transparent
        &:not(&:last-child)
            margin-right: 8px
</style>
