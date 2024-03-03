

//*Consulta la api para obntener los datos de Currencylayer
export class ServiceForex {
    static getForex = async () => {
        try {
            const response = await fetch("/api/", {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'content-type': 'aplication/json',
                },

            }

            )
            const res = await response.json()
            console.log(res)
            return res
        } catch (error) {
            console.log(error)
        }
    }
}
