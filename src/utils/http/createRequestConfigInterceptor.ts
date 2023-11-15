import axios, { AxiosRequestConfig } from 'axios';

const { CancelToken } = axios;

type CreateRequestConfigInterceptorProps = {
    sourceRequest?: object;
};

const { VITE_CORS_ANYWHERE_URL } = import.meta.env;

export function createRequestConfigInterceptor<T>({
    sourceRequest = {},
}: CreateRequestConfigInterceptorProps = {}) {
    return async function (config) {
        if (import.meta.env.DEV && VITE_CORS_ANYWHERE_URL)
            config.url = `${VITE_CORS_ANYWHERE_URL}${config.url}`;

        config.cancelToken = new CancelToken(function executor(cancel) {
            sourceRequest[config.url] = { cancel };
        });
        return config;
    };
}

export default createRequestConfigInterceptor;
