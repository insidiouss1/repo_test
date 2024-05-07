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
