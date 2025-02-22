const DynamicBooks= async(props)=>{
    console.log("props ",props.params.id)

    const url= await fetch(`https://simple-books-api.glitch.me/books/${props.params.id}`)
    const response= await url.json()
    console.log(response)
    return(
        <>
        <div className="text-center mt-11 font-extrabold text-[25px]">
        <h1 className="text-red-600">Dynamic Books DATA</h1>

<h1>{response.name}</h1>
<h1> id:{response.id}</h1>
<h1>{response.author}</h1>
<h1>price{response.price}</h1>
        </div>
      

     
        </>
    )
}
export default DynamicBooks