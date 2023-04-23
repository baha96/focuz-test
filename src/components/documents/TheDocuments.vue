<template>
    <div class="documents">
        <DocumentsHead class="mb-23" />
        <DocumentsSearch class="mb-19" />
        <Container
            class="container documents__wrapper"
            @drop="onDrop($event)"
            drag-handle-selector=".drag-handle"
            :animation-duration="200"
            groupName="documents"
            dragClass="document-selected-ghost"
            dropClass="document-selected-drop"
        >
            <Draggable
                v-for="(content, idx) in items"
                :key="'documents-' + content.id"
                class="documents__group"
                :class="isNeedMargin(content.category === documentTypes.group, idx)"
            >
                <component
                    :is="content.category === documentTypes.group ? 'DocumentsCategoryItem' : 'DocumentItem'"
                    :item="content"
                    @drop:change="onDropInCategory($event, idx)"
                />
            </Draggable>
        </Container>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import DocumentsHead from '@/components/documents/components/DocumentsHead.vue'
import DocumentsSearch from '@/components/documents/components/DocumentsSearch.vue'
import { documents } from '@/components/documents/mock/documents'
import { documentTypes } from '@/components/documents/mock/documentTypes'
import { Container, Draggable } from 'vue3-smooth-dnd'
const items = ref(documents)
let documentTempDropItem = null
function onDropInCategory (dragResult, categoryIndex = 0) {
    const { removedIndex, addedIndex } = dragResult
    if (removedIndex === null && addedIndex === null) return items

    // [Event loop] - Тут в очередь задач кидаем чтобы по порядку выполнилось
    // то есть сперва родительская события а после уже события добавление на дочерний уровень
    if (removedIndex === null && addedIndex !== null) {
        setTimeout(() => {
            items.value[categoryIndex].children = changePositionArr(items.value[categoryIndex].children, dragResult)
        }, 0)
    }
    // Это если только между собой на одном уровне
    else {
        items.value[categoryIndex].children = changePositionArr(items.value[categoryIndex].children, dragResult)
    }
}
function onDrop(dragResult) {
    const { removedIndex, addedIndex } = dragResult
    if (removedIndex === null && addedIndex === null) return items

    items.value = changePositionArr(items.value, dragResult)
}
function changePositionArr(arr = [], dragResult ) {
    const { removedIndex, addedIndex, payload } = dragResult
    const result = [...arr]
    let itemToAdd = payload

    if (removedIndex !== null) {
        itemToAdd = result.splice(removedIndex, 1)[0]
        documentTempDropItem = itemToAdd
    }

    if (addedIndex !== null) {
        if (!itemToAdd && removedIndex === null) {
            itemToAdd = documentTempDropItem
            documentTempDropItem = null
        }
        result.splice(addedIndex, 0, itemToAdd)
    }
    return result
}
function isNeedMargin(isGroup, idx) {
    const prevContent = items.value[idx - 1]
    const nextContent = items.value[idx + 1]
    let margin = ''
    if (isGroup && nextContent && nextContent.category === documentTypes.document) {
        margin += 'mb-14'
    }
    if (isGroup && prevContent && prevContent.category === documentTypes.document) {
        margin += " mt-14"
    }
    if (
        !isGroup &&
        prevContent &&
        prevContent.category === documentTypes.group &&
        nextContent &&
        nextContent.category === documentTypes.group
    ) {
        margin += ' mt-14 mb-14'
    }
    return margin
}
</script>
<script>
import DocumentsCategoryItem from '@/components/documents/components/DocumentCategoryItem.vue'
import DocumentItem from '@/components/documents/components/DocumentItem.vue'
export default {
    name: 'TheDocuments',
    components: {
        DocumentsCategoryItem,
        DocumentItem,
    }
}
</script>

<style scoped lang="sass">
.documents
    .document-selected-ghost
        background: #FFFFFF
        border: 1px solid #DFE4EF !important
        box-shadow: 0 3px 16px rgba(0, 102, 255, 0.7)
</style>
