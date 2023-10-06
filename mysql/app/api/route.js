//db에 특정 값을 추가하고 불러오고 하려고 쓰는 함수
import { queryExecute } from "./DB"

export async function GET(){
    const get = await queryExecute('select * from new_table')

    return Response.json(get);
}

export async function POST(req){
    const { name, email, id} = await req.json();
    console.log(name, email, id);
    const get = await queryExecute(`
        insert into new_table (id, name, email)
        value (?, ?, ?)
    `,[id, name, email]) 
    return Response.json([]);
}