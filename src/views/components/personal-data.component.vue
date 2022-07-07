<template>
    <q-form @submit.prevent="save()">
        <div class="row">
            <div class="col col-sm-6 col-xs-12">
                <q-input
                    v-model="entity_account.name"
                    class="q-mb-md q-mx-xs"
                    clearable
                    :label="$t('message.first_name')"
                />
            </div>

          <div class="col col-sm-6 col-xs-12">
            <q-input
                v-model="entity_account.name"
                class="q-mb-md q-mx-xs"
                clearable
                :label="$t('message.last_name')"
            />
          </div>
        </div>

        <div class="row">
            <div class="col col-sm-8 col-xs-12">
                <q-input
                    v-model="entity_account.email"
                    class="q-mb-md q-mx-xs"
                    type="email"
                    :rules="['email']"
                    clearable
                    :label="$t('message.email')"
                />
            </div>

            <div class="col col-sm-4 col-xs-12">
                <q-input
                    class="q-mb-md q-mx-xs"
                    clearable
                    v-model="entity_account.birth_date"
                    :label="$t('message.birth_date')"
                    mask="date"
                    type="date"
                    stack-label
                />
            </div>
        </div>

      <div class="row">
        <div class="col col-sm-4 col-xs-12">
          <q-input
              class="q-mb-md q-mx-xs"
              :label="$t('message.cpf').toUpperCase()"
              mask="###.###.###-##"
              fill-mask
              stack-label
          />
        </div>

        <div class="col col-sm-4 col-xs-12">
          <q-input
              class="q-mb-md q-mx-xs"
              :label="$t('message.rg').toUpperCase()"
              mask="##.###.###-#"
              fill-mask
              stack-label
          />
        </div>

        <div class="col col-sm-4 col-xs-12">
          <q-input
              class="q-mb-md q-mx-xs"
              :label="$t('message.tel').toUpperCase()"
              mask="(##) #.####-####"
              hint="Telefone Celular"
              fill-mask
              stack-label
          />
        </div>
      </div>

        <div class="row">
            <div class="col">
                <q-input
                    v-model="entity_account.password"
                    class="q-mb-md q-mx-xs"
                    clearable
                    type="password"
                    :label="$t('message.password')"
                />
            </div>
        </div>

        <div class="row">
            <div class="col">
                <q-input
                    class="q-mb-md q-mx-xs"
                    clearable
                    type="password"
                    :label="$t('message.confirm_password')"
                />
            </div>
        </div>
    </q-form>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {AccountEntity} from '../../models/entity/account.entity';

const entity_account = ref(
    new AccountEntity({ password: '', birth_date: null, email: '', name: '', rg: '' }),
);

function save() {
    console.log(entity_account.value);
}
</script>

<style lang="scss" scoped></style>
