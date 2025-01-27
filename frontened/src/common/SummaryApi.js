
export const baseURL = "http://localhost:8080"

const SummaryApi = {
    register : {
        url : "/api/user/register",
        method:"post"
    },
    login : {
        url : "/api/user/login",
        method:"post"
    },
    addProduct:{
        url:"/api/products/add",
        method:"post"
    }
}

export default SummaryApi