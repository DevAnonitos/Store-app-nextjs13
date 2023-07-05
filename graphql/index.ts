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
export const createUserMutation = `
    mutation CreateUser($input: $input) {
        userCreate(input: $input) {
            user {
                name
                email
                avatarUrl
                description
                githubUrl
                linkedUrl
                id
            }
        }
    }
`;
export const projectsQuery = `
    query getProjects($category: String, $endcursor: String) {
        projectSearch(first: 8, after: $endcursor, filter: {category: {eq: $category}}) {
        pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
        }
        edges {
                node {
                    title
                    githubUrl
                    description
                    liveSiteUrl
                    id
                    image
                    category
                    createdBy {
                        id
                        email
                        name
                        avatarUrl
                    }
                }
            }
        }
    }
`;
export const getProjectByIdQuery = `
    query GetProjectById($id: ID!) {
        project(by: {id: $id}) {
            id
            title
            description
            image
            liveSiteUrl
            githubUrl
            category
            createdBy {
                id
                name
                email
                avatarUrl
            }
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
export const getProjectsOfUserQuery = `
    query getUserProjects($id: ID!, $last: Int = 4) {
        user(by: {id: $id}) {
            id
            name
            email
            description
            avatarUrl
            githubUrl
            linkedUrl
            projects(last: $last) {
                edges: {
                    node {
                        id
                        title
                        image
                    }
                }
            }
        }
    }
`;


