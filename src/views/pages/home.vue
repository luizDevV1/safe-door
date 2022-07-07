<template>
    <div class="sign-in-component bg-transparent q-px-lg">
        <auth-component />
    </div>
</template>

<script lang="ts" setup>
import AuthComponent from "../components/auth.component.vue"

//
</script>

<style lang="scss" scoped>
.sign-in-component {
    position: relative;
    top: 0;
    left: 50%;

    width: 45vw;
    min-width: 400px;

  transform: translate(-50%, 50%);

  @media screen and ( max-height: 768px ) {
    transform: translate(-50%, 12%);
  }

}
</style>
