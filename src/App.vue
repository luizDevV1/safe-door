<template>
    <q-layout container>
        <q-header>
            <menu-bar />
        </q-header>

        <q-page-container>
            <q-page>
                <router-view />
            </q-page>
        </q-page-container>

        <q-footer class="bg-secondary footer" elevated> </q-footer>
    </q-layout>
</template>

<script lang="ts" setup>
import MenuBar from './views/components/menu-bar.component.vue'</script>

<style lang="scss">
#app {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    position: fixed;
    top: 0;
    left: 0;

    height: 100vh;
    width: 100vw;

    overflow: auto;

}

.footer {
    height: 20px;
}
</style>
