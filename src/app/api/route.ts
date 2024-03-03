
const api: string = process.env.NEXT_PUBLIC_API || ""
const key: string = process.env.NEXT_PUBLIC_SECRET_KEY || ""
// const currencies: string = process.env.NEXT_PUBLIC_API || ""
const sourse: string = process.env.NEXT_PUBLIC_SECRET_KEY || ""


let cachedData: any = null; // Variable para almacenar en caché la respuesta
let lastUpdateTime: number = 0; // Variable para almacenar la última vez que se actualizó la caché
const cacheDuration = 600000;

export async function GET() {
    try {
        const currentTime = new Date().getTime();

        if (!cachedData || currentTime - lastUpdateTime > cacheDuration) {
            console.log("============= Se ejecuto de nuevo")
            const response = await fetch(
                `${api}?access_key=${key}&currencies=EUR,GBP,CAD,BTC,USD,JPY,XAU,XAG,AUD,COP&sourse=${sourse}&format=1`,
                { cache: 'force-cache' }
            );
            if (!response.ok) {
                throw new Error('Error en la solicitud a la API');
            }


            cachedData = await response.json();
            lastUpdateTime = currentTime;


        }
    } catch (error) {
        console.error('Error al obtener tasas de cambio:', error);
    }
    return Response.json({ cachedData })
}