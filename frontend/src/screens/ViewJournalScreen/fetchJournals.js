import axios from "axios";
import React, { useState } from "react";
import {View, Text} from 'react';

const getJournals = async ()=>{
    
try{

    const userid = '214102J';



    const journalArray = await axios.get(`http://192.168.43.51:3000/journal/getJournal-byObjectId//${userid}`);

    return journalArray.data;
    
}


catch(error){
    console.log(error);
}
  

}

export default getJournals;