const audioRatingTable = [
  {
    inputsCategory: "stressLevel",
    meditation: 2.125,
    soundTherapy: 1.95,
    relaxation: 1.975,
    cognitiveTraining: 2.01,
    inspirationalContent: 1.94,
  },
  {
    inputsCategory: "moods",
    meditation: 3.3025,
    soundTherapy: 3.425,
    relaxation: 3.415,
    cognitiveTraining: 3.3925,
    inspirationalContent: 3.4275,
  },
];

const suggestionTable = {
  meditation: 0,
  soundTherapy: 0,
  relaxation: 0,
  cognitiveTraining: 0,
  inspirationalContent: 0,
};

exports.findSuggestedAudio = async (
  decayValue,
  stressLevel,
  averageMoodWeight,
  inputMood
) => {
  try {
    const combinedMoodWeight = averageMoodWeight * 0.25 + inputMood * 0.75;

    suggestionTable.meditation =
      audioRatingTable[0].meditation * stressLevel * decayValue +
      audioRatingTable[1].meditation * combinedMoodWeight;
    suggestionTable.soundTherapy =
      audioRatingTable[0].soundTherapy * stressLevel * decayValue +
      audioRatingTable[1].soundTherapy * combinedMoodWeight;
    suggestionTable.relaxation =
      audioRatingTable[0].relaxation * stressLevel * decayValue +
      audioRatingTable[1].relaxation * combinedMoodWeight;
    suggestionTable.cognitiveTraining =
      audioRatingTable[0].cognitiveTraining * stressLevel * decayValue +
      audioRatingTable[1].cognitiveTraining * combinedMoodWeight;
    suggestionTable.inspirationalContent =
      audioRatingTable[0].inspirationalContent * stressLevel * decayValue +
      audioRatingTable[1].inspirationalContent * combinedMoodWeight;

    return findLargestCategories(suggestionTable);
  } catch (error) {
    throw new Error(error);
  }
};

//finding suggestions
const findLargestCategories = (obj) => {
  // Convert the object into an array of key-value pairs
  const entries = Object.entries(obj);

  // Sort the array based on the values in descending order
  entries.sort((a, b) => b[1] - a[1]);

  // Extract the first three elements from the sorted array
  const largestThree = entries.slice(0, 2);

  return largestThree.map((entry) => entry[0]);
};
