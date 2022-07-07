<template>
    <q-toolbar class="bg-primary text-white shadow-4">
        <div class="flex content-center justify-center logo bg-secondary">
            <q-icon class="fa-solid fa-house-lock q-mx-md" size="xs" />
        </div>

        <q-toolbar-title class="text-italic">
            <span v-text="$t('message.title')" />
        </q-toolbar-title>
    </q-toolbar>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.logo {
    position: relative;
    top: 0;
    height: 50px;
}
</style>
