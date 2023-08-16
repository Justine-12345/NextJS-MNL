
type User = {
    username: string,
    password: string,
    createdAt: string
}


type Post = {
    _id: string
    userId: {
        _id: string,
        username: string
    },
    caption: string,
    image: string,
    userId: string,
    createdAt: string,
}

