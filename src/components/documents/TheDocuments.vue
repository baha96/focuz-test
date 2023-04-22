<template>
    <div class="documents">
        <DocumentsHead class="mb-23" />
        <DocumentsSearch class="mb-19" />
        <div class="container documents__wrapper">
            <DocumentsTypeItem />
            <DocumentsTypeItem />
            <DocumentsTypeItem />
            <DocumentItem />
        </div>
    </div>
</template>
<script setup>
import DocumentsHead from '@/components/documents/components/DocumentsHead.vue'
import DocumentsSearch from '@/components/documents/components/DocumentsSearch.vue'
import DocumentsTypeItem from '@/components/documents/components/DocumentTypeItem.vue'
import DocumentItem from '@/components/documents/components/DocumentItem.vue'
</script>
<script>
export default {
    name: 'TheDocuments',
}
</script>

<style scoped lang="sass"></style>
