export const BASE_URL = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8080";

//pega o valor da variável de ambiente , se nao existir 'VITE_BACKEND_URL'
//por padrão utilizar o localhost 