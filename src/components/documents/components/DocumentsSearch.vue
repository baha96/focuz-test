<template>
    <div class="documents-search">
        <div class="documents-search__wrapper mb-12">
            <label for="documents-search-input" class="mr-12">
                <LupeIcon />
            </label>
            <input id="documents-search-input" type="text" />
            <button type="button" class="ml-12">
                <CloseIcon />
            </button>
        </div>
        <DefaultSeparator />
    </div>
</template>

<script>
import LupeIcon from "@/components/icons/LupeIcon.vue";
import CloseIcon from "@/components/icons/CloseIcon.vue";
import DefaultSeparator from "@/components/ui/DefaultSeparator.vue";

export default {
    name: "DocumentsSearch",
    components: {DefaultSeparator, CloseIcon, LupeIcon}
}
</script>

<style scoped lang="sass">
.documents-search
    width: 100%
    max-width: 564px
    &__wrapper
        display: flex
        align-items: center
    label
        svg
            display: block
    input
        width: 100%
        border: 0
        outline: none
        font-family: inherit
        font-style: normal
        font-weight: 400
        font-size: 15px
        line-height: 108%
        color: #000000
        padding: 0
    button
        display: flex
        align-items: center
        justify-content: center
        background-color: transparent
        border: 0
        width: 16px
        height: 17px

</style>