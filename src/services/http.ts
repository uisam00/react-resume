import createAxiosInstance from '../utils/http/createAxiosInstance';
import createRequestConfigInterceptor from '../utils/http/createRequestConfigInterceptor';

const publicApi = createAxiosInstance();

const requestInterceptor = createRequestConfigInterceptor();
publicApi.interceptors.request.use(requestInterceptor);

export { publicApi };
