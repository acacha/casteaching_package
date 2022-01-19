import axios from 'axios'

export default function(options) {
    let apiClient = axios.create({
        baseURL: options.baseUrl || process.env.MIX_API_URL,
        withCredentials: true,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })

    return {
        videos: async function() {
            const response = await apiClient.get('/videos')
            return response.data
        },
        login:  async function(email,password,device_name) {
            const postData = {
                email,
                password,
                device_name,
            }
            const response = await apiClient.post('/sanctum/token', postData)
            return response.data
        },
        user:  async function(token) {
            apiClient.defaults.headers.common['Authorization'] = token;
            const response = await apiClient.get('/user')
            return response.data
        },
        video: {
            show: async function(id) {
                const response = await apiClient.get('/videos/' + id)
                return response.data
            },
            create: async function(data) {
                const response = await apiClient.post('/videos',data)
                return response.data
            },
            update: async function(id, data) {
                const response = await apiClient.put('/videos/' + id,data)
                return response.data
            },
            destroy: async function(id) {
                const response = await apiClient.delete('/videos/' + id)
                return response.data
            },
        }
    }
}

