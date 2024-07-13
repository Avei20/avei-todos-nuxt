<template>
    <VCard class="ma-2">
        <VCardTitle color="primary" class="">
            <div class="w-100 text-center mb-2">
                <span>Avei's Todos</span>
            </div>
            <div class="w-100">
                <VAutocomplete 
                    variant="outlined"
                    density="comfortable"
                    :items="projectStore.projectList" 
                    placeholder="Select the Project">
                    <template v-slot:append>
                        <VIcon icon="mdi-plus" color="primary" @click="projectStore.mutateCreateDialog"/>
                    </template>
                </VAutocomplete>
            </div>
        </VCardTitle>
        <VCardText></VCardText>
    </VCard>
    <Create/>
</template>

<script setup lang="ts">
const projectStore = useProjectStore()

onMounted(async () => {
    await projectStore.fetchProjectList()
})
</script>