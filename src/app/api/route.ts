
const api = process.env.NEXT_PUBLIC_API
const key = process.env.NEXT_PUBLIC_SECRET_KEY
const currencies = process.env.NEXT_PUBLIC_API
const sourse = process.env.NEXT_PUBLIC_SECRET_KEY

export async function GET() {
    try {
        const response = await fetch(
            `${api}/live?access_key=${key}&currencies=${currencies}&sourse=${sourse}&format=1`,
            { cache: 'force-cache' }
        );
        if (!response.ok) {
            throw new Error('Error en la solicitud a la API');
        }

        const data = await response.json();
        return Response.json({ data })
    } catch (error) {
        console.error('Error al obtener tasas de cambio:', error);
    }

}