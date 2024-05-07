## Prueba Dev

Buscamos implementar una funcionalidad que permita visualizar los últimos viajes registrados por nuestra aplicación, App Logística. Para ello, necesitamos tu colaboración en la creación de una página que presente de forma ordenada dichos viajes, facilitando su visualización. Valoramos un enfoque de código sencillo y dejamos a tu criterio la forma de mostrar los datos.

En cuanto al diseño, te pedimos que mantengas los colores definidos en el archivo tailwind.config.js y que juegues con ellos. Además, hemos instalado la librería de [shadcn](https://ui.shadcn.com/) por si deseas incorporar algún componente de allí.

Para realizar consultas a nuestra API, te proporcionamos esta llamada de ejemplo que podrías utilizar como base (aunque tiene más campos, consideramos un desafío deducirlos a partir de la información proporcionada abajo):

```bash
import { NextResponse } from 'next/server'


export async function POST(request: Request) {
   const token = request.headers.get('token') || '';
   const res = await fetch(`${process.env.LinkPruebaAPI}`, {
   method: "POST",
   headers: {
     "Content-Type": "application/json",
   },
 })
 const data = await res.json()
 return NextResponse.json({ data })
}
```
Tu solución debe ser un fork privado de este mismo repo e implementar la solución en este mismo archivo. No incluyas la API_KEY hardcodeada en tu solución sino en un .env.

La idea no es abusar de la API y a modo de ayuda dejaremos los tipos de los datos para TypeScript en el archivo types.ts dentro del repo. Si necesitas aclarar algo puedes escribir por WhatsApp.

PD: Puntos extra si lograr filtrar los viajes quitando al usuario prueba.
