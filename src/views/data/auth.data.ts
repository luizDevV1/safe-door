import Data from './index';
import { AuthServices } from '../../controllers/services/auth.services';
import { THashPassword } from '../../models/entity/auth.entity';

class AuthData extends Data {
    async sign_in(entity: THashPassword): Promise<void> {
        console.log(entity);

        await new AuthServices(entity).sign_in();
    }
}

export default new AuthData();
