import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import Load from '../components/Load';
const Home = () => {
  const [loading, setloading]=useState(true);
  const [data,setData]=useState([]);
  const [loader,setloader]=useState(true);
  
  useEffect(() => {
    const Fetch = async function() {
      setloader(true)
      const res = await fetch('https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand')
      const  data=await res.json();
   const num=   Math.floor(Math.random() * 10);
      setData(data[num]);
      setloader(false)

      setTimeout(() => {
        setloading(false);
      }, 2000);
    }
    Fetch()
  }, [])
if(loader && loading )
return null;
  if(loading && !loader){
    return(
      <Load data={data}/>
    )
  }
  return (
    <div>
      <Navbar/>
    </div>
  )
}

export default Home