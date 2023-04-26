import { useState, useEffect } from 'react';
import { getCat } from '../services/cats.js';
import { useParams } from "react-router-dom";

export default function DetailCat() {
  const [cat, setCat] = useState({})

  let { id } = useParams()

  const fetchCat = async () => {
    const oneCat = await getCat(id)
    setCat(oneCat)
  }

  useEffect(() => {
    fetchCat()
  }, [])

  return (
    <div>
      <h1>{cat.name}</h1>
      <img src={cat.image} alt={cat.name} />
      <p>{cat.age}</p>
      <p>{cat.species}</p>
    </div>
  )
}
