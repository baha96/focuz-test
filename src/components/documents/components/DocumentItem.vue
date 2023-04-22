<template>
    <div class="documents-item">
        <DefaultDescription class="documents-item__title">Тестовое задание кандидата</DefaultDescription>
        <DefaultDot class="ml-20" :dots-color="['#00C2FF']" />
        <DefaultDescription class="ml-15 documents-item__required">
            Обязательный
        </DefaultDescription>
        <DefaultDot :dots-color="['#0066FF', '#8E9CBB']" class="ml-15" />
        <DefaultDescription class="documents-item__text ml-15">
            <span>
                Россия, Белоруссия, Украина, администратор филиала, повар-сушист, повар-пиццмейкер, повар горячего цеха
            </span>
        </DefaultDescription>
        <DocumentItemActions class="ml-auto" />
    </div>
</template>

<script>
import DefaultDescription from "@/components/ui/typography/DefaultDescription.vue";
import DefaultDot from "@/components/ui/DefaultDot.vue";
import DocumentItemActions from "@/components/documents/components/DocumentItemActions.vue";

export default {
    name: 'DocumentItem',
    components: {DocumentItemActions, DefaultDot, DefaultDescription},
}
</script>

<style scoped lang="sass">
.documents-item
    padding: 9px 16px
    background-color: #FFFFFF
    border: 1px solid $gray
    display: flex
    align-items: center
    &__required
        font-size: 11px
        color: $pink
        white-space: nowrap
    &__title
        font-size: 13px
    &__text
        font-size: 11px
        color: #8E9CBB
        flex-grow: 1
        overflow: hidden
        position: relative
        margin-right: 60px
        &::after
            content: ""
            position: absolute
            top: 0
            bottom: 0
            right: 0
            background: linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 50%)
            width: 14px
        span
            max-width: 100%
            white-space: nowrap
</style>
