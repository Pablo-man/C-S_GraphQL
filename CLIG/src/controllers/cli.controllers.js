export const startPage= async (req, res)=>{
    const query = `
    query {
        listAll {
            id
            title
            albun
        }
    }`;

    const response= await fetch('http://localhost:8080/graphql',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
    })
    const {data}= await response.json()
    res.render('index', {
        data: data.listAll
    })
}

export const editPage= async(req, res)=>{
    const {id}= req.params;
    const rows = await fetch(`http://localhost:8080/graphql/${id}`,{
        method: 'GET'
    })
    const data= await rows.json()
    res.render('updateSong',{
        data
    })
}