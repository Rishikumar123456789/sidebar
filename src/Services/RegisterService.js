import React from 'react'
import { PublicApi } from '../Api/PublicApi';
const RegisterService = async (userDetails) => {
 const data={};
 try {
    const response=await PublicApi.post("/getRegister",data)
    return response;
 } catch (error) {
    throw error;
 }
}

export default RegisterService
