<template>
    <div>
        <h1>Home</h1>
        <p>
            Welcome to the redirect after google login. Please Wait until the
            data returned from google. Avei.
        </p>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
onBeforeMount(async () => {
    const response = await useFetchApi("/v1/auth/google/callback", {
        method: "GET",
        params: route.query,
    });
});
</script>
