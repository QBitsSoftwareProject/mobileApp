import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchMethod =  () => {

 const [Data,setData] = useState('');

    useEffect (() => {

        const fetchData = async () => {
        try{
            let url;

            url = "http://10.10.0.85:8070/method/get-method"

            const response = await axios.get(url);
            setData(response.data);

        }catch(error){
            console.log(error);
        }
    };

    fetchData();
       
    },[])

    return Data;
}

export default FetchMethod;

