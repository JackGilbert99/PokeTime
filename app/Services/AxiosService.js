export const Sandboxserver = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/',
    timeout: 2500
})

export const Pokeserver = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 2500
})