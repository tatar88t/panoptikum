import axios, { AxiosResponse, ResponseType } from 'axios';
import { APP_CONFIG } from './config';
import { showMessage } from 'src/Elements/ShowMessage';
import { useLoaderStore } from 'src/store/loaderStore';
import { MESSAGE_TYPE } from 'src/Constants/constants';


let auth_token = '';
export const getErrorMessage = (error) => {
    let message;
    if (error && error.response && error.response.data && typeof error.response.data !== 'string') {
        message = error.response.data.message ? error.response.data.message.split('\n')[0] : error.response.data.message;
    } else if (error.response && typeof error.response.data == 'string') {
        message = error.response.data.split('\n')[0] || error.response.data;
    } else if (error.response && error.response.data !== undefined) {
        message = error.response.data;
    } else {
        message = error.response;
    }
    return message;
};

export const getUrl = (endpoint) => {

    const server_url = APP_CONFIG.testUrl;

    return `${server_url}${endpoint}`
};

export enum API_METHOD {
    POST = 'post',
    GET = 'get',
    DELETE = 'delete',
    PUT = 'put',
    PATCH = 'patch',
    OPTIONS = 'options'
}

interface RequestParams {
    endpoint: string;
    body?: any;
    manualError?: boolean;
    responseType?: ResponseType;
    headers?: any;
    withLoader?: boolean;
}

export const REQUEST_ERROR_MESSAGE = "Ошибка при выполнении запроса"

export const api = (method: API_METHOD, params: RequestParams) => {
    const { endpoint, body = {}, manualError = false, responseType, headers, withLoader = true } = params
    const url = getUrl(endpoint);
    const data = auth_token ? { ...body, auth_token } : body;

    const loadingStore = useLoaderStore();

    const { setLoading } = loadingStore;
    withLoader ? setLoading(true) : null;
    return axios({
        method,
        url,
        data,
        responseType,
        headers,
    })
        .then((response) => {
            if (endpoint === 'login') {
                auth_token = response?.data?.auth_token
            }
            return response.data;
        })
        .catch(async (error) => {

            let message = getErrorMessage(error) ? getErrorMessage(error) : `${REQUEST_ERROR_MESSAGE}: ${endpoint}`;
            if (!manualError) {
                console.error(error.message)
                showMessage({ type: MESSAGE_TYPE.ERROR, message })
            } else {

                showMessage({ type: MESSAGE_TYPE.ERROR, message })
            }
        })
        .finally(() => {
            setLoading(false);
        })
};


