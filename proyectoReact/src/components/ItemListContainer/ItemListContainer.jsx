import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'
import { useParams } from "react-router-dom"

import {getDocs, collection, query, where} from 'firebase/firestore'

import { db } from "../../firebase/client"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)


    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const collectionRef = categoryId 
        ? query(collection(db,'products'), where('category', '==', categoryId))
        : collection(db,'products')



        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                }) 
                setProducts(productsAdapted)
            })

            .catch(error => {
                console.error(error)
            })
            .finally(()=> {
                setLoading(false)
            })
    }, [categoryId])
    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer