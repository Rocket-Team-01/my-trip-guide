import React, {useEffect, useState} from "react";

function List(props){
    const [data, setData] = useState([]);

    const {city} = props;
    
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
           console.log(data)
    }, [])

    
    return(
        <div>
            <h1>ef</h1>
            <h2>{city}</h2>
        </div>
    )
}


export default List;