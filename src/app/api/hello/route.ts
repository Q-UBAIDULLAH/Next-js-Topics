import { NextRequest, NextResponse } from "next/server";

const shoppinglist=[
    {Name:"shoes"}
]

export function GET(){
    console.log(shoppinglist)
return NextResponse.json(shoppinglist) // api ka response return krane me use krenge

}

export async function POST(request:NextRequest){
const body= await request.json() //IN
console.log("Backend",body)
shoppinglist.push(body)

return NextResponse.json(body) // json in json out
}