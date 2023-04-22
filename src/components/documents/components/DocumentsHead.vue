<template>
    <div class="documents-head">
        <h1 class="documents-head__title">
            Документы
        </h1>
        <div class="documents-head__actions">
            <DefaultButtons>
                <BookmarkIcon />
            </DefaultButtons>
            <DefaultButtons>
                <PlusIcon />
                <span class="ml-10">Новый тип</span>
            </DefaultButtons>
            <DefaultButtons>
                <PlusIcon />
                <span class="ml-10">Новый документ</span>
            </DefaultButtons>
        </div>
    </div>
</template>

<script>
import DefaultButtons from "@/components/ui/buttons/DefaultButtons.vue";
import PlusIcon from "@/components/icons/PlusIcon.vue";
import BookmarkIcon from "@/components/icons/BookmarkIcon.vue";

export default {
    name: "DocumentsHead",
    components: {BookmarkIcon, PlusIcon, DefaultButtons}
}
</script>

<style scoped lang="sass">
.documents-head
    display: flex
    justify-content: space-between
    align-items: center
    &__title
        font-weight: 500
        font-size: 22px
        line-height: 108%
    &__actions
        display: flex
        align-items: center
        .default-button
            display: flex
            align-items: center
            justify-content: center
            &:not(&:last-child)
                margin-right: 10px
</style>