const jwt = require('jsonwebtoken')

export default async function jwtoken(user: User) {
    var authUser = jwt.sign({ user }, process.env.SECRET_TOKEN);
    return authUser
}

