"use server"
import { cookies } from "next/headers"

export async function setAuthToken(token: string){
    return cookies().set("auth_token", token, {
        httpOnly: true,
        path: "/",
        expires: Date.now() + 24*60*60*1000,
    })
}

export async function getAuthToken(){
    return cookies().get("auth_token")?.value
}

export async function deleteAuthToken(){
    return cookies().delete("auth_token")
}

