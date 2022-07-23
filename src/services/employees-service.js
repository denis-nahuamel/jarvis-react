// export const getEmployees = () => {
//     return fetch("https://randomuser.me/api/").then(r => r.json().then(data => ({ status: r.status, body: data })))
// }
// export async function getEmployees() {
//     const response = await fetch("https://randomuser.me/api/")
//     return response.json()
// }
export async function getEmployee() {
    while (true) {
        try {
            const response = await fetch("https://randomuser.me/api/")
            if (response.status === 200) {
                const employee = await response.json();
                return employee;
            }
        }
        catch (e) {
        }

    }
}
export const getEmployees = () => {
    let i = 0;
    let array_employees = [];
    while (i<5){
        getEmployee().then(response=> {
            array_employees.push(response)
        })
        if(array_employees.length===3) return array_employees
        i++;
    }
}