import { GraphQLClient } from "graphql-request";
import { ProjectForm } from "@/common.types";
import {
    createProjectMutation,
    deleteProjectMutation,
    updateProjectMutation,
    createUserMutation,
    getProjectByIdQuery,
    getProjectsOfUserQuery,
    getUserQuery,
    projectsQuery
} from "@/graphql";

const isProduction = process.env.NODE_ENV === 'production';
const apiUrl = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL || '' : 'http://127.0.0.1:4000/graphql ';
const apiKey = isProduction ? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY || '' : 'letmein';
const serverUrl = isProduction ? process.env.NEXT_PUBLIC_SERVER_URL : 'http://localhost:3000';


const client = new GraphQLClient(apiUrl);

export const fetchToken = async () => {
    try {
        const response = await fetch(`${serverUrl}/api/auth/token`);

        return response.json();
    } catch (error: any) {
        console.log(error);
        throw error;
    }
};

export const uploadImage = async (imagePath: string) => {
    try {
        const response = await fetch(`${serverUrl}/api/upload`, {
            method: "POST",
            body: JSON.stringify({
                path: imagePath,
            }),
        });

        return response.json();
    } catch (error: any) {
        console.log(error);
        throw error;
    }
};

const makeGraphQLRequest = async (query: string, variables = {}) => {
    try {
        return await client.request(query, variables);
    } catch (error: any) {
        console.log(error);
        throw error;
    }
};

export const fetchAllProjects = (
    category?: string | null,
    endcursor?: string | null
) => {
    client.setHeader("x-api-key", apiKey);

    return makeGraphQLRequest(projectsQuery, {
        category,
        endcursor,
    });
};

export const deleteProject = (id: string, token: string) => {
    
};

export const getProjectDetail = (id: string) => {

};

export const createUser = (name: string, email: string, avatarUrl: string) => {

};

export const getUserProjects = (id: string, last?: number) => {

};

export const getUser = (email: string) => {

};
