const weightedStressLevelData = [
  {
    stressLevel: "low",
    meditation: 0.135,
    physicalActivity: 0.15,
    socialConnection: 0.145,
    creativeExpression: 0.15,
    personalGrowth: 0.14,
    relaxation: 0.135,
    inspirationalContent: 0.14,
  },
  {
    stressLevel: "medium",
    meditation: 0.28,
    physicalActivity: 0.28,
    socialConnection: 0.28,
    creativeExpression: 0.28,
    personalGrowth: 0.27,
    relaxation: 0.3,
    inspirationalContent: 0.3,
  },
  {
    stressLevel: "high",
    meditation: 0.435,
    physicalActivity: 0.42,
    socialConnection: 0.42,
    creativeExpression: 0.42,
    personalGrowth: 0.45,
    relaxation: 0.435,
    inspirationalContent: 0.405,
  },
  {
    stressLevel: "veryHigh",
    meditation: 0.6,
    physicalActivity: 0.58,
    socialConnection: 0.56,
    creativeExpression: 0.54,
    personalGrowth: 0.56,
    relaxation: 0.56,
    inspirationalContent: 0.56,
  },
];

const weightedMoodsData = [
  {
    moodCategory: "happy",
    meditation: 0.54,
    physicalActivity: 0.58,
    socialConnection: 0.6,
    creativeExpression: 0.6,
    personalGrowth: 0.56,
    relaxation: 0.54,
    inspirationalContent: 0.58,
  },
  {
    moodCategory: "neutral",
    meditation: 0.338,
    physicalActivity: 0.338,
    socialConnection: 0.35,
    creativeExpression: 0.375,
    personalGrowth: 0.375,
    relaxation: 0.363,
    inspirationalContent: 0.363,
  },
  {
    moodCategory: "sad",
    meditation: 0.14,
    physicalActivity: 0.14,
    socialConnection: 0.15,
    creativeExpression: 0.145,
    personalGrowth: 0.135,
    relaxation: 0.145,
    inspirationalContent: 0.145,
  },
  {
    moodCategory: "worried",
    meditation: 0.3,
    physicalActivity: 0.3,
    socialConnection: 0.28,
    creativeExpression: 0.25,
    personalGrowth: 0.28,
    relaxation: 0.3,
    inspirationalContent: 0.29,
  },
  {
    moodCategory: "lovely",
    meditation: 0.49,
    physicalActivity: 0.473,
    socialConnection: 0.525,
    creativeExpression: 0.508,
    personalGrowth: 0.508,
    relaxation: 0.49,
    inspirationalContent: 0.508,
  },
  {
    moodCategory: "boring",
    meditation: 0.21,
    physicalActivity: 0.225,
    socialConnection: 0.203,
    creativeExpression: 0.218,
    personalGrowth: 0.225,
    relaxation: 0.21,
    inspirationalContent: 0.21,
  },
  {
    moodCategory: "overWhelmed",
    meditation: 0.225,
    physicalActivity: 0.21,
    socialConnection: 0.203,
    creativeExpression: 0.203,
    personalGrowth: 0.21,
    relaxation: 0.233,
    inspirationalContent: 0.218,
  },
  {
    moodCategory: "angry",
    meditation: 0.15,
    physicalActivity: 0.15,
    socialConnection: 0.14,
    creativeExpression: 0.15,
    personalGrowth: 0.14,
    relaxation: 0.14,
    inspirationalContent: 0.13,
  },
];

const goalRatingTable = [
  {
    inputsCategory: "stressLevel",
    meditation: 0,
    physicalActivity: 0,
    socialConnection: 0,
    creativeExpression: 0,
    personalGrowth: 0,
    relaxation: 0,
    inspirationalContent: 0,
  },
  {
    inputsCategory: "moods",
    meditation: 0,
    physicalActivity: 0,
    socialConnection: 0,
    creativeExpression: 0,
    personalGrowth: 0,
    relaxation: 0,
    inspirationalContent: 0,
  },
];

const suggestionTable = {
  meditation: 0,
  physicalActivity: 0,
  socialConnection: 0,
  creativeExpression: 0,
  personalGrowth: 0,
  relaxation: 0,
  inspirationalContent: 0,
};

exports.findSuggestedGoals = async (
  decayValue,
  stressLevel,
  averageMoodWeight
) => {
  //calculating ratings for moods

  const moodRating = getSum(weightedMoodsData, "moods");

  //calculating ratings for stress levels
  const stressLevelRating = getSum(
    weightedStressLevelData,
    "stressLevel",
    decayValue
  );

  //set suggestion values for each category
  suggestionTable.meditation =
    stressLevelRating.meditation * stressLevel +
    moodRating.meditation * averageMoodWeight;
  suggestionTable.physicalActivity =
    stressLevelRating.physicalActivity * stressLevel +
    moodRating.physicalActivity * averageMoodWeight;
  suggestionTable.socialConnection =
    stressLevelRating.socialConnection * stressLevel +
    moodRating.socialConnection * averageMoodWeight;
  suggestionTable.creativeExpression =
    stressLevelRating.creativeExpression * stressLevel +
    moodRating.creativeExpression * averageMoodWeight;
  suggestionTable.personalGrowth =
    stressLevelRating.personalGrowth * stressLevel +
    moodRating.personalGrowth * averageMoodWeight;
  suggestionTable.relaxation =
    stressLevelRating.relaxation * stressLevel +
    moodRating.relaxation * averageMoodWeight;
  suggestionTable.inspirationalContent =
    stressLevelRating.inspirationalContent * stressLevel +
    moodRating.inspirationalContent * averageMoodWeight;

  console.log(findLargestThreeCategories(suggestionTable));
};

//function for calculate the sum
const getSum = (dataArray, type, decayValue) => {
  let meditationRating = 0,
    physicalActivityRating = 0,
    socialConnectionRating = 0,
    creativeExpressionRating = 0,
    personalGrowthRating = 0,
    relaxationRating = 0,
    inspirationalContentRating = 0;

  let index = 1;
  let value = 1;

  dataArray.map((item) => {
    meditationRating += item.meditation;
    physicalActivityRating += item.physicalActivity;
    socialConnectionRating += item.socialConnection;
    creativeExpressionRating += item.creativeExpression;
    personalGrowthRating += item.personalGrowth;
    relaxationRating += item.relaxation;
    inspirationalContentRating += item.inspirationalContent;
  });

  if (type === "stressLevel") {
    index = 0;
    value = decayValue;
  }

  meditationRating = meditationRating * value;
  physicalActivityRating = physicalActivityRating * value;
  socialConnectionRating = socialConnectionRating * value;
  creativeExpressionRating = creativeExpressionRating * value;
  personalGrowthRating = personalGrowthRating * value;
  relaxationRating = relaxationRating * value;
  inspirationalContentRating = inspirationalContentRating * value;

  goalRatingTable[index].meditation = meditationRating.toFixed(3);
  goalRatingTable[index].physicalActivity = physicalActivityRating.toFixed(3);
  goalRatingTable[index].socialConnection = socialConnectionRating.toFixed(3);
  goalRatingTable[index].creativeExpression =
    creativeExpressionRating.toFixed(3);
  goalRatingTable[index].personalGrowth = personalGrowthRating.toFixed(3);
  goalRatingTable[index].relaxation = relaxationRating.toFixed(3);
  goalRatingTable[index].inspirationalContent =
    inspirationalContentRating.toFixed(3);

  // console.log(goalRatingTable[index]);
  return goalRatingTable[index];
};

//finding suggestions
const findLargestThreeCategories = (obj) => {
  // Convert the object into an array of key-value pairs
  const entries = Object.entries(obj);

  // Sort the array based on the values in descending order
  entries.sort((a, b) => b[1] - a[1]);

  // Extract the first three elements from the sorted array
  const largestThree = entries.slice(0, 3);

  return largestThree.map((entry) => entry[0]);
};
