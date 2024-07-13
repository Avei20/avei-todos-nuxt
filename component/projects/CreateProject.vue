<template>
    <VDialog v-model="projectStore.isWantToCreate">
        <VToolbar title="Create Project">
            Paleo
        </VToolbar>
    </VDialog>
</template>

<script setup lang="ts">
    const projectStore = useProjectStore()
</script>