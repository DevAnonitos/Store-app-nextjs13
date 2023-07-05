// CreateProjectMutation
export const createProjectMutation = `
    mutation CreateProject($input: ProjectCreateInput!) {
        projectCreate(input: $input) {
            project {
                id
                title
                description
                createdBy {
                    email
                    name
                }
            }
        }
    }
`;
//UpdateProjectMutation
export const updateProjectMutation = `
    mutation UpdateProject($id: ID!, $input: ProjectUpdateInput!) {
        projectUpdate(by: {id: $id}, input: $input) {
            project {
                id
                title
                description
                createdBy {
                    email
                    name
                }
            }
        }
    }
`;
//deleteProjectMutation
export const deleteProjectMutation = `
    mutation DeleteProject($id: ID!) {
        projectDelete(by: { id: $id }) {
            deleteId
        }
    }
`;
// GetUserQuery
export const getUserQuery = `
    query GetUser($email: String!) {
        user(by: {email: $email}) {
            id
            name
            email
            avatarUrl
            description
            githubUrl
            linkedUrl
        }
    }
`;


