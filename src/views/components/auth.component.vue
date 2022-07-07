<template>
    <q-form @submit.prevent="sign_in">
        <div class="row">
            <div class="col">
                <q-input
                    class="q-mb-md"
                    :label="$t('message.username')"
                    clearable
                    v-model="auth_entity.username"
                    :rules="rules_for_sign_in"
                >
                    <template #prepend>
                        <q-icon class="fa-solid fa-user" size="xs" />
                    </template>
                </q-input>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <q-input
                    class="q-mb-md"
                    :label="$t('message.password')"
                    clearable
                    v-model="auth_entity.password"
                    :type="show_password ? 'text' : 'password'"
                    :rules="rules_for_sign_in"
                >
                    <template #prepend>
                        <q-icon class="fa-solid fa-lock" size="xs" />
                    </template>

                    <template #append>
                        <q-btn
                            class="q-ml-sm radius-50"
                            flat
                            dense
                            size="xs"
                            @click.prevent="show_password = !show_password"
                        >
                            <q-icon
                                :class="`fa-solid ${show_password ? 'fa-eye-slash' : 'fa-eye'}`"
                                size="xs"
                            />

                            <q-tooltip>
                                <span
                                    v-text="
                                        $t(
                                            `message.${
                                                show_password ? 'hide_password' : 'view_password'
                                            }`
                                        )
                                    "
                                />
                            </q-tooltip>
                        </q-btn>
                    </template>
                </q-input>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <q-checkbox v-model="remember_me">
                    <span class="text-primary" v-text="$t('message.remember_me')" />
                </q-checkbox>
            </div>
        </div>

        <div class="flex items-center justify-end text-weight-bold">
            <div class="q-mr-sm">
                <span v-text="$t('message.forgot_password')" />

                <span class="text-secondary q-ml-xs clickable" v-text="$t('message.click_here')" />
            </div>

            <q-btn color="primary" type="submit">
                <q-icon class="fa-solid fa-sign-in" left size="xs" />
                <span v-text="$t('message.sing_in')" />
            </q-btn>
        </div>
    </q-form>

    <fieldset class="q-mt-lg q-mb-sm">
        <legend class="text-weight-bold text-primary">
            <span v-text="$t('message.or_continue_with')" />
        </legend>
    </fieldset>

    <div class="flex justify-center">
        <q-btn class="button-to-other-login" fab>
            <q-icon class="fa-brands fa-google" />

            <q-tooltip>
                <span v-text="$t('message.google')" />
            </q-tooltip>
        </q-btn>

        <q-btn class="button-to-other-login q-mx-md" fab>
            <q-icon class="fa-brands fa-facebook" />

            <q-tooltip>
                <span v-text="$t('message.facebook')" />
            </q-tooltip>
        </q-btn>

        <q-btn class="button-to-other-login" fab>
            <q-icon class="fa-brands fa-github" />

            <q-tooltip>
                <span v-text="$t('message.github')" />
            </q-tooltip>
        </q-btn>
    </div>

    <div class="flex justify-center q-mt-lg">
        <b class="text-primary">
            <span v-text="$t('message.not_have_account')" />
            <router-link to="new-account" class="text-secondary q-ml-xs clickable">
                <span v-text="$t('message.click_here')" />
            </router-link>
        </b>
    </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import AuthEntity from '../../models/entity/auth.entity'
import AuthData from '../data/auth.data'
import {useQuasar} from 'quasar'

const q = useQuasar()
const remember_me = ref<boolean>(false)
const auth_entity = ref<AuthEntity>(new AuthEntity())
const show_password = ref(false)
const data = AuthData
const rules_for_sign_in = [data.required_field]

async function sign_in() {
    const auth = auth_entity.value

    try {
        await data.sign_in(auth.hash_password(auth))
    } catch (err: unknown) {
        q.notify({
            color: 'negative',
            textColor: 'white',
            message: (err as Error).message,
            actions: [
                {
                    icon: 'close',
                    color: 'white',
                    handler: () => {
                        //
                    },
                    fab: true,
                },
            ],
        })
    }
}
</script>

<style lang="scss" scoped>
fieldset {
    border-top: 1px solid #c3c3c3;
    border-bottom: none;
    border-left: none;
    border-right: none;
    display: block;
    text-align: center;

    legend {
        padding: 5px 10px;
    }
}

.button-to-other-login {
    height: 50px;
    width: 50px;
}

.clickable {
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
}

.radius-50 {
    border-radius: 50%;
}
</style>
