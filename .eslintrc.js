module.exports = {
    env: {
        es6: true,
        node: true,
        browser: true,
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['vue', '@typescript-eslint'],
    extends: ['plugin:vue/base', 'plugin:vue/vue3-essential', 'plugin:@typescript-eslint/recommended', 'prettier'],
    rules: {
        'vue/no-unused-vars': 'error',
        'vue/multi-word-component-names': 'off',
    },
}
