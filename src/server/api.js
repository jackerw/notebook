import request from '../utils/request'
const path = 'https://www.easy-mock.com/mock/5cca66c735214241fede653f/example';

export async function ProList(options){
    return request(`${path}/newsList`,{ ...options,method: 'GET'})
}