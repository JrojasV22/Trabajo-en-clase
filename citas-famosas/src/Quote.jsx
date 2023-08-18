import React,{useState,useEffect} from "react";





function Quote(){
    // const[quote, setQuote] = useState({text: '' , author: ''})
    
    const [text,setTex]=useState("")
    const [author,setAuthor]=useState("")

    useEffect(()=>{
        fetchQuote()
    },[])

    const  fetchQuote=async()=>{
       
        try{
            const response=await fetch("https://api.quotable.io/random")
            const data=await response.json()
            setAuthor(data.author)
            setTex(data.content)
        }
    
        catch(error){
            console.log("Error de API",error)
        }
    }

    return(
        <>  
            <div className="text-center aa">
                <h1>Aplicación de citas famosas</h1>
            </div>
            
            <p className="te b">Texto: {text}</p>
            <p className="te l">Autor: {author}</p>     
            <div className="text-center">
                <button onClick={fetchQuote} className="bu miB miBB">Generar cita</button>
          
            </div>   
            
        </>
    )
}

export default Quote