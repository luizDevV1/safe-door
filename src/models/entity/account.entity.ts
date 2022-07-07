import { ICommonsEntity } from '../shared/commons-entity';

export class AccountEntity implements ICommonsEntity {
    uuid?: string;
    name!: string;
    birth_date!: Date | null;
    password!: string;
    email!: string;
    rg!: string;

    constructor(this_class: Partial<AccountEntity>, uuid?: string) {
        Object.assign(this, this_class);

        if (uuid) this.uuid = uuid;
    }
}
