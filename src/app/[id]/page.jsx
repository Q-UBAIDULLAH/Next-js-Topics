const DynamicBooks= async(props)=>{
    console.log("props ",props.params.id)

    const url= await fetch(`https://simple-books-api.glitch.me/books/${props.params.id}`)
    const response= await url.json()
    console.log(response)
    return(
        <>
        <h1>Dynamic Books</h1>

<h1>{response.name}</h1>
<h1>{response.id}</h1>
<h1>{response.author}</h1>
<h1>price{response.price}</h1>

        {/* {response.map((item)=>{
                return(
                <>
                <h1>{item.name}</h1>
                </>
                )
            })
        } */}
        </>
    )
}
export default DynamicBooks