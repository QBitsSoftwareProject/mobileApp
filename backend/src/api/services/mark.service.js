const markModel = require("../models/mark.model");

// service for store mark
const storeMark =  (userid, mark, date, time) => {
    try {
        if (!mark || !date || !time || !userid) {
            throw new Error('Mark is required');
        }

        const newMark =  markModel.create({
            userid: userid,
            mark: mark,
            date: date,
            time: time,
        });

        return newMark;
    } catch (error) {
        console.error(error);
        throw new Error('Internal server error');
    }
};

// service for get mark by id

const getMarkById =  (userid) => {
    try {
        const mark =  markModel.find({userid: userid});
        return mark || null;
    } catch (error) {
        console.error(error);
        throw new Error('Internal Server Error');
    }
};

//service for get sorted and grouped data

const getMarkData = async (marks) => {
    try {
      // Fetch mark data from the API
      console.log('data is',marks);
      
      // Extract the mark data from the response
      const markData = marks;

      

      if (!markData || !Array.isArray(markData)) {
        throw new Error('Mark data is missing or invalid');
      }
      
      markData.reverse();

      const groupedData = markData.reduce((acc, item) => {
        const date = item.date;
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(item);
        return acc;
      }, {});

      
  
      // Return the sorted mark data
      return groupedData;
  
    } catch (error) {
      console.error('Error fetching mark data:', error);
      throw error;
    }
  };

module.exports = {
    storeMark,
    getMarkById,
    getMarkData
};
