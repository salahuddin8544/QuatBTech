import  { useEffect, useState } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
const Home = () => {
    const [products,setProduct] = useState([])
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div className="container">
        <div className="row">
          <div className="col-8">
          <div className='row'>
            {
              products.map(product=>{
                return(
                  <div className="col-2 card rounded-0 p-0 m-2" key={product.id}>
                    <img style={{height:'80px'}} src={product.show?.image?.medium} alt="" />
                    <div className="card-body text-start m-0 p-2">
                      <h5 className="card-title p-0 m-0">{product.show.name}</h5>
                      <p className="card-text  text-muted m-0">Type: {product.show.type}</p>
                      <p className="p-0 m-0 text-dark">Language: {product.show.language}</p>
                    </div>
                    <button className='btn btn-primary rounded-0' onClick={()=> setData(product.show)}>Details </button>
                  </div>
                )
              })
            }
          </div>
          </div>
          <div className="col-4 card m-0 p-0">
            <img style={{height:'250px'}} src={data?.image?.original} alt="" />
            <div className="card-body text-start m-0 p-2">
             <h5 className="card-title h4 p-0 m-0">{data?.name}</h5>
             <p className="card-text text-dark m-0">Runtime: {data?.runtime}</p>
             <p className="p-0 m-0 text-dark">premiered: {data?.premiered}</p>
             <p className="p-0 m-0 text-dark">Time: {data?.schedule?.time}</p>
              <p className="p-0 m-0  text-muted "><span className='text-bold text-dark'>Details:</span> {data?.summary?.slice(3,-4)}</p> 
              <Link to={data?.network?. officialSite} className='btn btn-primary rounded my-2'>Book Now </Link>   
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;