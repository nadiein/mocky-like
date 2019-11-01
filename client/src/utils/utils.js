import { ajax } from 'rxjs/ajax';
import { from } from 'rxjs';
import { map, toArray, switchMap } from 'rxjs/operators';

export const BASE_URL = 'http://localhost:9990';
export const USER_NAME = 'admin';
export const USER_PASS = '1234';

const corsHeader = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true
}

const postHeader = { 'Content-Type': 'application/json' }

const http = (endpoint, method, headers, body=null) => ajax({
    url: endpoint ? `${BASE_URL + endpoint}` : BASE_URL,
    method: method.toUpperCase(),
    headers: headers,
    crossDomain: true,
    body: body ? body : null
})

export class MocksService {

    getMocks(endpoint) {
        return http(endpoint, 'get', corsHeader).pipe(
            map(res => res.response),
            switchMap(items => from(items)),
            map(item => Object.assign(new MockModel(), item)),
            toArray()
        )
    }

    postMockForm(endpoint, data) {
        return http(endpoint, 'post', postHeader, data);
    }
}

export class MockModel {
    id = null;
    data = null;
}

export class MockDto {
    data = null;
}