<template>
    <div class="document-item-actions">
        <DefaultButtons class="document-item-actions__button flex-center mr-10">
            <EditIcon />
        </DefaultButtons>
        <DefaultButtons class="document-item-actions__button flex-center mr-10">
            <DeleteIcon />
        </DefaultButtons>
        <DefaultButtons class="document-item-actions__button flex-center" :class="[moveHandleClassName]">
            <MoveIcon />
        </DefaultButtons>
    </div>
</template>

<script>
import DefaultButtons from '@/components/ui/buttons/DefaultButtons.vue'
import EditIcon from '@/components/icons/EditIcon.vue'
import DeleteIcon from '@/components/icons/DeleteIcon.vue'
import MoveIcon from '@/components/icons/MoveIcon.vue'

export default {
    name: 'DocumentItemActions',
    components: { MoveIcon, DeleteIcon, EditIcon, DefaultButtons },
    props: {
        moveHandleClassName: {
            type: String,
            default: 'drag-handle',
        },
    },
}
</script>

<style scoped lang="sass">
.document-item-actions
    display: flex
    align-items: center
    &__button
        padding: 0
        border: 0
        width: 20px
        height: 20px
</style>
