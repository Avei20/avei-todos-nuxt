<template>
    <VCard class="ma-2 h-100">
        <VCardTitle color="primary" class="bg-black text-center">
            <VIcon icon="mdi-calendar-check-outline" class="mr-2" />
            <span>Daily Todos</span>
        </VCardTitle>
        <VCardText>
            <VDivider />
            <VCard class="my-2" v-for="project in projectStore.projectList">
                <VCardTitle> {{ project.name }} </VCardTitle>
                <VCardText> </VCardText>
            </VCard>
            <VCard class="my-2">
                <VCardTitle> Avei Project </VCardTitle>
                <VCardText>
                    <VCheckbox label="Title" density="compact" hide-details />
                    <div class="d-flex align-center justify-center">
                        <VCheckbox density="compact" hide-details />
                        <VTextField
                            class="align-self-center pa-0 ma-0 remove-input-padding"
                            v-model="simpleTodos"
                            density="compact"
                            variant="plain"
                            hide-details
                        >
                        </VTextField>
                    </div>
                    <VCheckbox
                        label="Title"
                        density="compact"
                        hide-details
                        class="ml-4"
                    />
                    <VCheckbox
                        label="Title"
                        density="compact"
                        hide-details
                        class="ml-8"
                    />
                    <VCheckbox
                        label="Title"
                        density="compact"
                        hide-details
                        class="ml-8"
                    />
                    <VCheckbox
                        label="Title"
                        density="compact"
                        hide-details
                        class="ml-4"
                    />
                    <VCheckbox
                        label="Title"
                        density="compact"
                        hide-details
                        class="ml-8"
                    />
                    <VCheckbox
                        label="Title"
                        density="compact"
                        hide-details
                        class="ml-8"
                    />
                    <VCheckbox
                        label="Title"
                        density="compact"
                        hide-details
                        class="ml-8"
                    />
                    <VCheckbox label="Title" density="compact" hide-details />
                    <VCheckbox label="Title" density="compact" hide-details />
                    <VCheckbox label="Title" density="compact" hide-details />
                    <VCheckbox label="Title" density="compact" hide-details />
                </VCardText>
            </VCard>
            <VCard class="my-2">
                <VCardTitle> Avei Project </VCardTitle>
                <VCardText>
                    <VCheckbox label="Title" density="compact" hide-details />
                    <VCheckbox
                        label="Title"
                        density="compact"
                        hide-details
                        class="ml-4"
                    />
                    <VCheckbox
                        label="Title"
                        density="compact"
                        hide-details
                        class="ml-4"
                    />
                    <VCheckbox
                        label="Title"
                        density="compact"
                        hide-details
                        class="ml-8"
                    />
                    <VCheckbox
                        label="Title"
                        density="compact"
                        hide-details
                        class="ml-8"
                    />
                    <VCheckbox
                        label="Title"
                        density="compact"
                        hide-details
                        class="ml-4"
                    />
                    <VCheckbox
                        label="Title"
                        density="compact"
                        hide-details
                        class="ml-8"
                    />
                    <VCheckbox
                        label="Title"
                        density="compact"
                        hide-details
                        class="ml-8"
                    />
                    <VCheckbox
                        label="Title"
                        density="compact"
                        hide-details
                        class="ml-8"
                    />
                    <VCheckbox label="Title" density="compact" hide-details />
                    <VCheckbox label="Title" density="compact" hide-details />
                    <VCheckbox label="Title" density="compact" hide-details />
                    <VCheckbox label="Title" density="compact" hide-details />
                </VCardText>
            </VCard>
        </VCardText>
    </VCard>
    <VFab icon="mdi-plus" @click="projectStore.mutateCreateDialog" />
    <ProjectsCreate />
</template>

<script setup lang="ts">
const projectStore = useProjectStore();
const todoStore = useTodoStore();

const simpleTodos = ref("Doing Nothing!");

onBeforeMount(async () => {
    await projectStore.fetchProjectList();
});
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
