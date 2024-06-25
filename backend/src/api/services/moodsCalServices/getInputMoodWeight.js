exports.getInputMoodWeight = async (inputMood) => {
  try {
    inputMood = inputMood.toLowerCase();
    switch (inputMood) {
      case "happy":
        return 4;
      case "sad":
        return 1;
      case "worried":
        return 2;
      case "neutral":
        return 2.5;

      default:
        throw new Error("Mood Type is wrong");
        break;
    }
  } catch (error) {
    throw new Error(error);
  }
};
