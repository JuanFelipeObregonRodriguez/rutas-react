import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
 const Usuario = () => {
    const [usuarios, setUsuarios] = useState([])

    const obtenerUsuario = async () =>{
        const {id} = useParams
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        const user = await res.data
        setUsuarios(user)

    }
     
    useEffect(()=>{

      obtenerUsuario()


    },[])
    return (
        <div>
            <h4>usuario</h4>
            <p>nombre: {usuarios.name}</p>
            <p>email: {usuarios.email}</p>
            <small>phone: {usuarios.phone}</small>
        </div>
    )
}
export default Usuario
