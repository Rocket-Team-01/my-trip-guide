import React, { useEffect, useState } from "react";
import {useParams}  from 'react-router-dom'
import List from "../components/List";

function Search(props) {


    const params = useParams();
    const { query } = params;
    /*
    console.log(`&query= ${query}`)
    */
    // const [city, setCity] = useState([]);
    const [cityRest, setCityRest] = useState([]);

    function getCityID(){
        
        var requestOptions = {
            method: 'GET',
            headers: {
                "user-key": "415c9b42482714e36aa1e285b7ab62be",
                "content-type": "application/json",
              },
            redirect: 'follow'
        };

        fetch(`https://developers.zomato.com/api/v2.1/cities?q=${query}\n`, requestOptions)
            .then(response => response.json())
            .then(result =>{
                /*
                console.log(result.location_suggestions[0].id);
                */
               getCityRest(result.location_suggestions[0].id)
                // setCity(result.location_suggestions[0].id);
                /*
                console.log(city);
                */
            })
            .catch(error => console.log('error', error));
    }

    function getCityRest(event){
        var requestOptions = {
            method: 'GET',
            headers: {
                "user-key": "415c9b42482714e36aa1e285b7ab62be",
                "content-type": "application/json",
              },
            redirect: 'follow'
        };

        fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=${event}&entity_type=city&sort=rating&order=dsc`, requestOptions)
            .then(response => response.json())
            .then(result =>{
                /*
                console.log(result.location_suggestions[0].id);
                */
                setCityRest(result.restaurants);
                // console.log(result)
                // console.log(`cityRest:: ${cityRest}`);
                
            })
            .catch(error => console.log('error', error));
    }

    
    useEffect(() => {
       
        getCityID()
        

    }, [])

    
     
     


    return (
        <div>
            {/* <List city = {city} /> */}
            {cityRest.map((item,index)=> (
                <div key={index} >
                    <p>{item.restaurant.name}</p>
                </div>
            ))}
        </div>
    )
}



export default Search;




/* 
<h1>Efekan</h1>
            <h1>{query}</h1>
            <h5>{data.map((item,index)=> (
                <div key={index} >
                    <p>{item.restaurant.name}</p>
                </div>
            ))}</h5>
*/



/* 
useEffect(() => {
         var requestOptions = {
             method: 'GET',
             headers: {
                 "user-key": "415c9b42482714e36aa1e285b7ab62be",
                 "content-type": "application/json",
               },
             redirect: 'follow'
         };

         fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=${city}&entity_type=city&sort=rating&order=dsc`, requestOptions)
             .then(response => response.json())
             .then(result =>{
                 setData(result.restaurants);
                 console.log(result.restaurants);
             })
             .catch(error => console.log('error', error));
            
     }, [])

*/