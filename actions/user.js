import axios from 'axios'

export async function login(data) {

    const post = await axios.post('http://localhost:3000/api/login', data)
    const res = post
    localStorage.setItem("token", res.data.token);
    return res

}

export async function register(data) {

    const post = await axios.post('http://localhost:3000/api/user', data)
    const res = post
    localStorage.setItem("token", res.data.token);
    return res

}

export async function logout(data) {

    
    localStorage.clear()
    data = { success: true }
    return data

}


export async function getAuthUser() {

    const user = await axios.get('http://localhost:3000/api/user/auth',
        {
            headers: {
                "token": localStorage.getItem("token"),
            }
        }

    )
    const data = user
    return data
}


export async function myPost() {

    const posts = await axios.get('http://localhost:3000/api/user/post',
        {
            headers: {
                "token": localStorage.getItem("token"),
            }
        }

    )
    const data = posts
    return data
}
