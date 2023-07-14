import { View, Text } from 'react-native'
import React from 'react'
import dotenv from 'dotenv';
dotenv.config();
const apiToken = process.env.API_TOKEN;
const baseUrl = process.env.BASE_URL;
class fetchApi {
    static get = <T>(url: string, param: {}): Promise<T> => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${apiToken} `
            }
        };
        console.log(`${baseUrl}/${url}?${param}`)
        return fetch(`${baseUrl}/${url}?${param}`, options)
            .then(response => response.json())
            .then(response => response).catch(err => console.error(err));

    }
    static post = (url: string) => {
        const options = {
            method: 'POST',
            headers: { accept: 'application/json', 'Content-Type': 'application/json;charset=utf-8' }
        };

        fetch(`${url}`, options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }
}
export { fetchApi }