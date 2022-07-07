import { CommonsServices } from '../shared/commons-services';
import { AccountEntity } from '../../models/entity/account.entity';

export class AccountServices extends CommonsServices<AccountEntity> {
    constructor() {
        super('/account');
    }
}
