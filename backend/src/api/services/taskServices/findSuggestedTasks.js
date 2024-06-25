const taskRatingTable = [
  {
    inputsCategory: "stressLevel",
    task1: 1.45,
    task2: 1.43,
    task3: 1.405,
    task4: 1.39,
    task5: 1.42,
    task6: 1.43,
    task7: 1.405,
  },

  {
    inputsCategory: "moods",
    task1: 2.393,
    task2: 2.415,
    task3: 2.45,
    task4: 2.448,
    task5: 2.433,
    task6: 2.42,
    task7: 2.443,
  },
];

const taskSuggestionTable = {
    task1: 0,
    task2: 0,
    task3: 0,
    task4: 0,
    task5: 0,
    task6: 0,
    task7: 0,
}

exports.findSuggestedTasks = async (decayValue,
    stressLevel,
    averageMoodWeight) => {

        taskSuggestionTable.task1 = taskRatingTable[0].task1 * stressLevel *decayValue + taskRatingTable[1].task1*averageMoodWeight;
        taskSuggestionTable.task2 = taskRatingTable[0].task2 * stressLevel *decayValue + taskRatingTable[1].task2*averageMoodWeight;
        taskSuggestionTable.task3 = taskRatingTable[0].task3 * stressLevel *decayValue + taskRatingTable[1].task3*averageMoodWeight;
        taskSuggestionTable.task4 = taskRatingTable[0].task4 * stressLevel *decayValue + taskRatingTable[1].task4*averageMoodWeight;
        taskSuggestionTable.task5 = taskRatingTable[0].task5 * stressLevel *decayValue + taskRatingTable[1].task5*averageMoodWeight;
        taskSuggestionTable.task6 = taskRatingTable[0].task6 * stressLevel *decayValue + taskRatingTable[1].task6*averageMoodWeight;
        taskSuggestionTable.task7 = taskRatingTable[0].task7 * stressLevel *decayValue + taskRatingTable[1].task7*averageMoodWeight;

        return findLargestCategories(taskSuggestionTable)

    };

    //finding suggestions
const findLargestCategories = (obj) => {
    // Convert the object into an array of key-value pairs
    const entries = Object.entries(obj);
  
    // Sort the array based on the values in descending order
    entries.sort((a, b) => b[1] - a[1]);
  
    // Extract the first three elements from the sorted array
    const largestThree = entries.slice(0, 4);
  
    return largestThree.map((entry) => entry[0]);
  };
  