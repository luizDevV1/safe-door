import { AxiosError } from 'axios';

export const err = (err: AxiosError): never => {
    throw new Error(err.message);
};
