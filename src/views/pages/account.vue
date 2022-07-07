<template>
    <div class="q-pa-sm">
      <q-stepper
          v-model="step"
          ref="stepper"
          color="primary"
          animated
          :contracted="$q.screen.lt.md"
      >
        <q-step
            :name="1"
            title="Select campaign settings"
            icon="settings"
            :done="step > 1"
        >
          <personal-data-component />
        </q-step>

        <q-step
            :name="2"
            title="Create an ad group"
            caption="Optional"
            icon="create_new_folder"
            :done="step > 2"
        >
          An ad group contains one or more ads which target a shared set of keywords.
        </q-step>

        <q-step
            :name="3"
            title="Ad template"
            icon="assignment"
            disable
        >
          This step won't show up because it is disabled.
        </q-step>

        <q-step
            :name="4"
            title="Create an ad"
            icon="add_comment"
        >
          Try out different ad text to see what brings in the most customers, and learn how to
          enhance your ads using features like ad extensions. If you run into any problems with
          your ads, find out how to tell if they're running and how to resolve approval issues.
        </q-step>

        <template #navigation>
          <q-stepper-navigation>
            <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 4 ? 'Finish' : 'Continue'" />
            <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
          </q-stepper-navigation>
        </template>
      </q-stepper>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {QStepperNavigation, useQuasar} from "quasar";
import PersonalDataComponent from "../components/personal-data.component.vue"

const $q = useQuasar()
const stepper = ref<QStepperNavigation>()
const step = ref<number>(1)

</script>

<style lang="scss " scoped>
.layout--menu {
  max-height: calc(100vh - 50px);
}
</style>
