const markModel = require("../../models/stressMark/mark.model");

exports.getStressData = async (userId) => {
  try {
    //sort stress levels by recent taken
    const stressLevels = await markModel
      .find({ userid: userId })
      .sort({ date: -1 });

    if (!stressLevels[0]) {
      stressLevels.push({ mark: 0 });
    }

    const mostRecentStressLevelDate = new Date(stressLevels[0].date);
    const currentDate = new Date();

    //difference in milli seconds
    const difference = currentDate - mostRecentStressLevelDate;

    const millisecondsPerDay = 24 * 60 * 60 * 1000;

    //get difference in days
    const differenceInDays = Math.floor(difference / millisecondsPerDay);

    const decayFactor = -0.1;

    const decayValue = Math.exp(decayFactor * differenceInDays);

    return {
      decayValue: decayValue.toFixed(4),
      score: categorizeLevels(stressLevels[0].mark),
    };
  } catch (error) {
    console.log(error);
  }
};

//categorize stressLevels
const categorizeLevels = (stresLevel) => {
  if (stresLevel <= 10) {
    return 1;
  } else if (stresLevel <= 20) {
    return 2;
  } else if (stresLevel <= 30) {
    return 3;
  } else if (stresLevel <= 40) {
    return 4;
  } else {
    return 0;
  }
};
