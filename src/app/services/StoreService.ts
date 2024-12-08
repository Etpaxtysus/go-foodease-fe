"use server"

import apiClient, { ResponseSchema } from "./apiClient";
import { getAuthToken, setAuthToken } from "./AuthTokenService";

export type IStoreLoginRequest = {
    email: string;
    store_password: string;
}

export type IStore = {
    email: string;
    store_name: string;
    description: string;
    store_password: string;
    free_time: string;
    address_street: string;
    address_longitude: number;
    address_latitude: number;
    address_created_at: Date;
    address_updated_at: Date;
    created_at: Date;
    updated_at: Date;
}

export type IStoreLoginResult = {
    store: IStore;
    token: string;
}

export async function login(request: IStoreLoginRequest){
    try {
        
        const response = await apiClient.post<ResponseSchema<IStoreLoginResult>>("/store/login", {
            email: request.email,
            store_password: request.store_password
        })

        const authToken = response.data.data.token
        await setAuthToken(authToken)

        return 1;

    } catch (error) {
        console.error(error)
        return 0;
    }
}

export async function getCurrentStore(){
    try {
        const token = await getAuthToken();

        const response = await apiClient.get<ResponseSchema<IStore>>("/store/me", {
          headers: { 
            Authorization: `Bearer ${token}`
          }
        });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error)
        return undefined;
    }
}