"use server"
import { PassThrough } from "stream";
import apiClient, { ResponseSchema } from "./apiClient";
import { deleteAuthToken, getAuthToken, setAuthToken } from "./AuthTokenService";

export type IUserLoginRequest = {
    email: string;
    password: string;
}

export type IUserRegisterRequest = {
    email: string;
    first_name: string;
    last_name: string;
    customer_password: string;
    confirm_password: string;
}

export type IUser = {
    email: string;
    first_name: string;
    last_name: string;
    active_address: null;
    created_at: string;
    updated_at: string;
}

export type IUserLoginResult = {
    user: IUser;
    token: string;
}

export async function login(request: IUserLoginRequest){
    try {
        const response = await apiClient.post<ResponseSchema<IUserLoginResult>>("/customer/login", {
            email: request.email,
            password: request.password
        })

        const authToken = response.data.data.token
        await setAuthToken(authToken)

        return 1

    } catch (error) {
        console.error(error);
        return 0
    }
}

export async function register(request: IUserRegisterRequest){
    try {
        await apiClient.post<ResponseSchema<IUser>>("/customer/register", {
            email: request.email,
            first_name: request.first_name,
            last_name: request.last_name,
            password: request.customer_password,
            // confirm_password: request.confirm_password
        })
        return 1;
    } catch (error) {
        console.error(error);
        return 0;
    }
}

export async function getCurrentUser(){
    try {
        const token = await getAuthToken();

        const response = await apiClient.get<ResponseSchema<IUser>>("/customer/current", {
          headers: { 
            Authorization: `Bearer ${token}`
          }
        });
    
        return response.data.data;
        
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

export async function logout(){
    return deleteAuthToken()
}