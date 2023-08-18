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
            setTex(data.author)
            setAuthor(data.content)
        }
    
        catch(error){
            console.log("Error de API",error)
        }
    }

    return(
        <>
            <h1>Aplicación de citas famosas</h1>
            <p>Texto: {text}</p>
            <p>Autor: {author}</p>        
            <button onClick={fetchQuote}>Generar cita</button>
        </>
    )
}

export default Quote