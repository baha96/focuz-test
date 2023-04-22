<template>
    <div class="documents-type-item">
        <DefaultButtons class="documents-type-item__button-collapse mr-14">
            <ArrowDownIcon />
        </DefaultButtons>
        <DefaultTitle tag="h3" class="documents-type-item__title"> Обязательные для трудоустройства </DefaultTitle>
        <DefaultDot class="ml-16" :dots-color="['#FF238D', '#FFB800', '#FF8D23']" />
        <DefaultDescription class="ml-15 documents-type-item__description">
            <span>
                Документы, без которых невозможно трудоустройство человека на какую бы то ни было должность в компании
                вне зависимости от граж
            </span>
        </DefaultDescription>
        <DocumentItemActions class="ml-auto" />
    </div>
</template>

<script>
import DefaultButtons from '@/components/ui/buttons/DefaultButtons.vue'
import ArrowDownIcon from '@/components/icons/ArrowDownIcon.vue'
import DefaultTitle from '@/components/ui/typography/DefaultTitle.vue'
import DocumentItemActions from '@/components/documents/components/DocumentItemActions.vue'
import DefaultDot from '@/components/ui/DefaultDot.vue'
import DefaultDescription from '@/components/ui/typography/DefaultDescription.vue'

export default {
    name: 'DocumentTypeItem',
    components: { DefaultDescription, DefaultDot, DocumentItemActions, DefaultTitle, ArrowDownIcon, DefaultButtons },
}
</script>

<style scoped lang="sass">
.documents-type-item
    padding: 13px 16px
    border: 1px solid #DFE4EF
    background-color: #fff
    display: flex
    align-items: center
    &__button-collapse
        padding: 0
        width: 22px
        height: 22px
        display: flex
        align-items: center
        justify-content: center
    &__title
        font-size: 15px
        width: 100%
        max-width: 254px
        flex-grow: 1
    &__description
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
