<template>
    <div v-if="item" class="documents-category-item">
        <div class="documents-category-item__wrapper">
            <DefaultButtons
                class="documents-category-item__button-collapse mr-14"
                @click="display = !display"
                :class="{ active: display && item.children.length }"
            >
                <ArrowDownIcon />
            </DefaultButtons>
            <DefaultTitle tag="h3" class="documents-category-item__title" @click="display = !display">
                {{ item.name }}
            </DefaultTitle>
            <DefaultDot v-if="item.dotsColor && item.dotsColor.length" class="ml-16" :dots-color="item.dotsColor" />
            <DefaultDescription class="ml-15 documents-category-item__description">
                <span>
                    {{ item.description }}
                </span>
            </DefaultDescription>
            <DocumentItemActions class="ml-auto" />
        </div>
        <Container
            class="ml-16 documents-category-item__children"
            v-show="display && item.children.length"
            @drop="onDrop"
            drag-handle-selector=".drag-handle-child"
            groupName="documents"
        >
            <Draggable v-for="child in item.children" :key="'contents-child-' + child.id">
                <DocumentItem :item="child" moveHandleClassName="drag-handle-child" />
            </Draggable>
        </Container>
    </div>
</template>

<script>
import DefaultButtons from '@/components/ui/buttons/DefaultButtons.vue'
import ArrowDownIcon from '@/components/icons/ArrowDownIcon.vue'
import DefaultTitle from '@/components/ui/typography/DefaultTitle.vue'
import DocumentItemActions from '@/components/documents/components/DocumentItemActions.vue'
import DefaultDot from '@/components/ui/DefaultDot.vue'
import DefaultDescription from '@/components/ui/typography/DefaultDescription.vue'
import DocumentItem from '@/components/documents/components/DocumentItem.vue'
import { Container, Draggable } from 'vue3-smooth-dnd'

export default {
    name: 'DocumentCategoryItem',
    components: {
        Container,
        Draggable,
        DocumentItem,
        DefaultDescription,
        DefaultDot,
        DocumentItemActions,
        DefaultTitle,
        ArrowDownIcon,
        DefaultButtons,
    },
    props: {
        item: {
            type: Object,
            default: null,
        },
    },
    emits: ['drop:change'],
    data() {
        return {
            display: false,
        }
    },
    methods: {
        onDrop(dropResult) {
            this.$emit('drop:change', dropResult)
        },
    },
}
</script>

<style scoped lang="sass">
.documents-category-item
    &__wrapper
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
        svg
            transition: 200ms
        &.active svg
            transform: scale(-1)
    &__title
        font-size: 15px
        //width: 100%
        max-width: 254px
        //flex-grow: 1
        cursor: pointer
    &__description
        color: #8E9CBB
        //flex-grow: 1
        flex: 1
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
    &__children
        animation: fadeIn 1.5s
</style>
