<template>
    <VBtn @click="fetchNestApi">Fetch </VBtn>
</template>

<script setup lang="ts">
const fetchNestApi = async () => {
    await useFetchApi("/v1/auth/google/login", {
        method: "GET",
    });
};
</script>
