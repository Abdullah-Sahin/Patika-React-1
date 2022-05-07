import axios from "axios"
const getData = (user_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { data: user } = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);
            const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id);
            user.posts = posts;
            resolve(user);
        }
        catch {
            reject("Bilgi alınamadı veya birleştirilemedi")
        }
    })
}

export default getData;