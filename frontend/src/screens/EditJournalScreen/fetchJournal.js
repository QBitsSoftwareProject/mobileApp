import axios from "axios";
import React, { useEffect, useState } from "react";
import {View, Text} from 'react';

const getJournal = async ({objectid})=>{


try{

    // const userid = '214102J';

    const journalDataArray = await axios.get(`http://192.168.43.51:3000/journal/getJournal-byObjectId/${objectid}`);
    return journalDataArray.data;
    
}
catch(error){
    console.log(error);
}
  

}

export default getJournal;