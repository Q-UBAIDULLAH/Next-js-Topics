export default{
    name:"pet",
    type:"document",
    title:"pet",
    fields:[
        {
            name:"name", //unique name key always
            type:"string",
            title:"pet Name"
        },
        {
            name:"description",
            type:"string",
            title:"Description",
        }
    ]
}