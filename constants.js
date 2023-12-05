export const API_URLS = {
    CREATE_PROMPT: "api/prompt/create-prompt",
    EDIT_PROMPT: "api/prompt/edit-prompt",
    GET_PROMPTS: "api/prompt",
    GET_PROMPT: (id) => {
        return `api/prompt/${id}`
    },
    GET_POSTS: (userId) => {
        return `/api/users/${userId}/posts`
    }
}

export const MODES = {
    CREATE: "Create",
    EDIT: "Edit",
}
