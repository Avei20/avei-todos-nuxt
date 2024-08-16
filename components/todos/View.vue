<template>
    <div class="d-flex align-center justify-center">
        <VCheckbox density="compact" />
        <VTextField
            class="align-self-center pa-0 ma-0 remove-input-padding"
            density="compact"
            variant="plain"
            hide-details
        />
    </div>
</template>

<script setup lang="ts">
const props = defineProps({});
</script>

<style scoped>
.remove-input-padding :deep(.v-field__input) {
    padding: 0 !important;
}
.remove-input-padding :deep(.v-field__input input) {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
}
</style>
