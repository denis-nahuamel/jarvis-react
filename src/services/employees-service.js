export const getEmployees = () => {
    return fetch("https://randomuser.me/api/").then(response => {return response.json()})
}