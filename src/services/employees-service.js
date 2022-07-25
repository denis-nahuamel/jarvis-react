export async function getEmployee() {
    while (true) {
        try {
            const response = await fetch("https://randomuser.me/api/?results=15")
            if (response.status === 200) {
                const employee = await response.json();
                return employee;
            }
        }
        catch (e) {
            console.log("error",e)
        }

    }
}