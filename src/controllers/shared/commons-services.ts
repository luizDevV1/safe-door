import { ICommonsEntity } from '../../models/shared/commons-entity';
import axios from '../config/axios.config';
import { err } from '../error';
import { AxiosResponse } from 'axios';

export abstract class CommonsServices<T extends ICommonsEntity> {
    protected constructor(private url: string) {}

    protected async get_all(filter?: Partial<T>): Promise<T[]> {
        return axios
            .get(this.url, { params: filter })
            .then((r: AxiosResponse<unknown>) => {
                return r.data as T[];
            })
            .catch(err);
    }

    protected async get_one({ uuid }: T): Promise<T> {
        return axios
            .get([this.url, uuid].join('/'))
            .then((r: AxiosResponse<unknown>) => {
                return r.data as T;
            })
            .catch(err);
    }

    protected async save(data: T): Promise<T | string> {
        return axios
            .post(this.url, data)
            .then((r: AxiosResponse<unknown>) => {
                return r.data as T | string;
            })
            .catch(err);
    }

    protected async update(data: T): Promise<T | string> {
        return axios
            .put([this.url, data.uuid].join('/'), data)
            .then((r: AxiosResponse<unknown>) => {
                return r.data as T | string;
            })
            .catch(err);
    }

    protected async remove({ uuid }: T): Promise<boolean> {
        return axios
            .delete([this.url, uuid].join('/'))
            .then((r: AxiosResponse<unknown>) => {
                return r.status === 200;
            })
            .catch(err);
    }
}
