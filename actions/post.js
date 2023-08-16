import axios from 'axios'





export async function getPost() {
    const posts = await fetch('http://localhost:3000/api/post', { cache: 'no-store' })
    const data = await posts.json()
    return data
}


export async function addPost(data) {
    const post = await axios.post('http://localhost:3000/api/post', data,
        {
            headers: {
                "token": localStorage.getItem("token"),
            }
        }

    )
    const res = post
    return res

}
