import CryptoJS from 'crypto-js'

export declare type THashPassword = { username: string; password: CryptoJS.lib.CipherParams }

class AuthEntity {
    username?: string
    password?: string

    public hash_password(this_class: AuthEntity): THashPassword {
        if (this_class.password && this_class.username) {
            const password = CryptoJS.DES.encrypt(
                this_class.password,
                import.meta.env.VITE_AUTH_SECRET
            )

            return {
                username: this_class.username,
                password,
            }
        }

        const error_field: Array<string> = []

        if (!this_class.username) error_field.push('login')

        if (!this_class.password) error_field.push('senha')

        throw new Error(
            `Campo${error_field.length > 1 ? 's' : ''} ${error_field.join(',')} não informado!`
        )
    }
}

export default AuthEntity
