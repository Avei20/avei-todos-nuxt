<template>
    <VDialog v-model="projectStore.isWantToCreate">
        <VCard>
            <VToolbar color="primary" title="Create Project" />
            <VCardText>
                <VTextField
                    variant="outlined"
                    density="comfortable"
                    v-model="v$.code.$model"
                    label="Project Code"
                    :error-messages="
                        v$.code.$errors.map((e) => e.$message as string)
                    "
                    outlined
                    required
                />
                <VTextField
                    variant="outlined"
                    density="comfortable"
                    v-model="v$.name.$model"
                    :error-messages="
                        v$.name.$errors.map((e) => e.$message as string)
                    "
                    label="Project Name"
                    outlined
                    required
                />
                <VTextarea
                    variant="outlined"
                    density="comfortable"
                    v-model="v$.description.$model"
                    :error-messages="
                        v$.description.$errors.map((e) => e.$message as string)
                    "
                    label="Project Description"
                    outlined
                    required
                />
            </VCardText>
            <VCardActions>
                <VBtn class="mb-4" color="primary" @click="createProject"
                    >Submit</VBtn
                >
                <VBtn
                    class="mb-4"
                    color="primary"
                    @click="projectStore.mutateCreateDialog"
                    >Cancel</VBtn
                >
            </VCardActions>
        </VCard>
    </VDialog>
</template>

<script setup lang="ts">
import { helpers, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

const projectStore = useProjectStore();
const appStore = useAppStore();

const rules = {
    code: {
        // required: helpers.withMessage("Code Project cannot be empty", required)
    },
    name: {
        required: helpers.withMessage("Name Project cannot be empty", required),
    },
    description: {
        required: helpers.withMessage(
            "Description Project cannot be empty",
            required,
        ),
    },
};

const v$ = useVuelidate(rules, projectStore.create);

const createProject = async () => {
    const isFormCorrect = await v$.value.$validate();

    if (isFormCorrect) {
        const response = await useFetchApi("/v1/projects", {
            method: "POST",
            body: JSON.stringify(projectStore.create),
        });

        if (response.error.value) {
            appStore.showSnackbar(response.error.value.data.message);
        }

        if (response.data.value) {
            const data = response.data.value as { message: string };
            appStore.showSnackbar(data.message);
            // projectStore.initCreate()
            v$.value.$reset();
            projectStore.mutateCreateDialog();
        }
    }
};
</script>
