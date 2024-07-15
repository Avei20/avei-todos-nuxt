<template>
    <VDialog v-model="projectStore.isWantToCreate">
        <VCard>
            <VToolbar color="primary" title="Create Project" />
            <VCardText>
                <VTextField
                    variant="outlined"
                    density="comfortable"
                    v-model="projectStore.projectName"
                    label="Project Name"
                    outlined
                    required
                />
                <VTextField
                    variant="outlined"
                    density="comfortable"
                    v-model="projectStore.projectDescription"
                    label="Project Description"
                    outlined
                    required
                />
            </VCardText>
            <VCardActions>
                <VBtn>Submit</VBtn>
                <VBtn>Cancel</VBtn>
            </VCardActions>
        </VCard>
    </VDialog>
</template>

<script setup lang="ts">
const projectStore = useProjectStore();
</script>
