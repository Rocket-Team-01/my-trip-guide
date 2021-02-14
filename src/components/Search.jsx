import React, { useEffect, useState } from "react";
import {useParams}  from 'react-router-dom'

function Search(props) {

    const [data, setData] = useState([]);

    const params = useParams();
    const { query } = params;
    console.log(`&query= ${query}`)

    const [city, setCity] = useState([]);


    useEffect(() => {
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
                console.log(result.location_suggestions[0].id);
                setCity(result.location_suggestions[0].id);

            })
            .catch(error => console.log('error', error));
            console.log("calıstı")
    }, [])

    
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
                 setData(result);
                 console.log(result.restaurants);
             })
             .catch(error => console.log('error', error));
             console.log("calıstı")
     }, [])
     


    return (
        <div>
            <h1>Efekan</h1>
            <h1>{query}</h1>
        </div>
    )
}



export default Search;