import axios from '../config/axios.config';
import AuthEntity, { THashPassword } from '../../models/entity/auth.entity';
import { AxiosResponse } from 'axios';
import { AccountEntity } from '../../models/entity/account.entity';
import { err } from '../error';

export class AuthServices {
    private readonly entity!: AuthEntity;

    constructor(auth_entity: THashPassword) {
        Object.assign(this, auth_entity);
    }

    async sign_in(): Promise<Omit<AccountEntity, 'password'>> {
        return axios
            .post('sign-in', this.entity)
            .then((r: AxiosResponse<unknown>) => {
                return r.data as Omit<AccountEntity, 'password'>;
            })
            .catch(err);
    }
}
