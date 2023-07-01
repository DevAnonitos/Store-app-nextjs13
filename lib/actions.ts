import { GraphQLClient } from "graphql-request";
import { ProjectForm } from "@/common.types";

const isProduction = process.env.NODE_ENV === 'production';
const apiUrl = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL || '' : 'http://127.0.0.1:4000/graphql ';
const apiKey = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || '' : 'letmein';
const serverUrl = isProduction ? process.env.NEXT_PUBLIC_SERVER_URL : 'http://localhost:3000';


const client = new GraphQLClient(apiUrl);

export const fetchToken = async () => {
    try {

    } catch (error: any) {
        console.log(error);
        throw error;
    }
};

export const uploadImage = async (imagePath: string) => {
    try {

    } catch (error: any) {
        console.log(error);
        throw error;
    }
};

const makeGraphQLRequest = async (query: string, variables = {}) => {
    try {

    } catch (error: any) {
        console.log(error);
        throw error;
    }
};
