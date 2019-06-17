

export async function ProList(){
    return fetch('https://www.easy-mock.com/mock/5ce79794db58af63d27a449b/example/pageList')
    .then(response=>response.json());
}