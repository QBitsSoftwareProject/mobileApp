let totalMark = 0;

export const getMark = (markArray) => {

    totalMark = 0;
        markArray.forEach((value) => {
        console.log('value is',value);
        totalMark = totalMark + value;
     });

     console.log('total mark is',totalMark);

     return totalMark;

}