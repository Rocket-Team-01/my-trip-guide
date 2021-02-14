import React, { useEffect, useState } from "react";

function Search(props) {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState([]);


    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            headers: {
                "user-key": "415c9b42482714e36aa1e285b7ab62be",
                "content-type": "application/json",
              },
            redirect: 'follow'
        };

        fetch("https://developers.zomato.com/api/v2.1/search?q=Adana", requestOptions)
            .then(response => response.json())
            .then(result =>{
                setData(result);
                console.log(result.results_found);
            })
            .catch(error => console.log('error', error));
            console.log("calıstı")
    }, [])



    return (
        <div>
            <h1>Efekan</h1>
        </div>
    )
}



export default Search;