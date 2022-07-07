import { createI18n } from 'vue-i18n'
import { ptBr } from './locales/pt-br'

const i18n = createI18n({
    legacy: false,
    locale: 'pt-br',
    globalInjection: true,
    messages: {
        'pt-br': ptBr,
    },
})

export default i18n
