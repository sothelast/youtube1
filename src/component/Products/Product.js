import React, {useEffect} from "react";
import {useState} from "react";
// import datajson from "./the.json";
export default function Product() {
    let [data,
        setData] = useState([]);
    let [category,
        setCategory] = useState()

    //  let datajson=async()=>await JSON.parse(ifo)
    // console.log(datajson.rating.count);
    async function calldata() {
        let responce = await fetch("https://fakestoreapi.com/products");
        let data = await responce.json();
        setData(data);

    }

    useEffect(() => {
        calldata();
    }, [])

    function serchcatgory(e) {
        setCategory(e.target.value)

        console.log(e.target.value)

    }
    //  console.log(data)
    function send(data) {
   
        return(data.filter((item) =>item.category.includes(category)))
        
    }
    return (
        <div>
            <div className="main-container">
                <div className="header">
                    <select
                        className="slect"
                        name=""
                        id=""
                        value={category}
                        onChange={serchcatgory}>
                        <option >Sleact category</option>
                        <option value="women's clothing">women's clothing</option>
                        <option value="jewelery">jewelery</option>
                        <option value="men's clothing">men's clothing</option>
                    </select>
                </div>

                <div className="show-cards">
                    <Filterdata data={!send(data).length>0?data:send(data)}/>
                </div>
            </div>
        </div>
    );
}

function Filterdata(props) {
    return ( <>
     {
        props.data.map((item) => {
            return (
                <div key={item.id} className="card-frame">
                    <img src={item.image} alt="Product Image"/>
                    <h3>{item.title}</h3>
                    <p>{item.description}
                    </p>
                    {/* <h3>{item.rating[0].rate}</h3> */}
                    <h4>
                        <span>Price :
                            <i>
                                &euro;{item.price}</i>
                        </span>
                        <span>Rate :&nbsp; {item.rating.rate}</span>
                    </h4>
                </div>
            )
        })
    } 
    </>
    )
}