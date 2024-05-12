import { NextResponse } from 'next/server'


export async function POST(request: Request) {
   const res = await fetch(`${process.env.LinkPruebaAPI}`, {
   method: "POST",
   headers: {
     "Content-Type": "application/json",
     "key": `${process.env.API_KEY}`,
   },
 })
 const data = await res.json()
 return NextResponse.json({ data })
}

