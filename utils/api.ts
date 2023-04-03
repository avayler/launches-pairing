import axios, { AxiosResponse } from 'axios';

export type PostResponse<T> = AxiosResponse<{ docs: T }>;

export const post = <T>(url: string, fields: string[]): Promise<PostResponse<T>> => {
    return axios({
        method: 'post',
        url,
        data: {
            query: {},
            options: {
                limit: 10,
                select: fields,
                populate: [
                    {
                        "path": "payloads",
                        "select": {
                            "type": 1
                        }
                    }, {
                        "path": "cores.core",
                        "select": {
                            "serial": 1
                        }
                    }
                ]
            },
        },
    })
}