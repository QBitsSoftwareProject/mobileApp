const { Error } = require("mongoose");
const methodModel = require("../../models/mindRelaxingMethods/method.model");
const {
  findSuggestedVideo,
} = require("../../services/mindRelaxingMethods/videoSuggestion");
const {
  getInputMoodWeight,
} = require("../../services/moodsCalServices/getInputMoodWeight");
const {
  getWeightedMoodAvg,
} = require("../../services/moodsCalServices/getWeightedMoodAvg");
const { getStressData } = require("../../services/stressMarks/getDecayValue");
const {
  findSuggestedAudio,
} = require("../../services/mindRelaxingMethods/audioSuggestion");

exports.methodSuggestion = async (req, res) => {
  try {
    const userId = req.user.user_id;
    const { inputMood } = req.body;

    if (!inputMood) {
      return res.status(400).send("Mood is required");
    }

    //get average mood weight
    const averageMoodWeight = await getWeightedMoodAvg(req.user.user_id);

    //get weight for input mood
    const inputMoodWeight = await getInputMoodWeight(inputMood);

    //get the stressLevel score and decay value
    const stressLevelData = await getStressData(req.user.user_id);
    // console.log(stressLevelData, averageMoodWeight);

    //find suggested video category
    const suggestedVideoCategory = await findSuggestedVideo(
      stressLevelData.decayValue,
      stressLevelData.score,
      averageMoodWeight,
      inputMoodWeight
    );

    //find suggested auido category
    const suggestedAuidoCategory = await findSuggestedAudio(
      stressLevelData.decayValue,
      stressLevelData.score,
      averageMoodWeight,
      inputMoodWeight
    );

    // console.log(suggestedAuidoCategory);
    console.log(suggestedVideoCategory);

    //video----------------------------------------------------------------------------------------------
    //find all relevent videos and short it into descending order
    const suggestedVideos = await methodModel
      .find({
        methodType: "video",
        category: { $in: suggestedVideoCategory },
      })
      .sort({ currentRating: -1 });

    //categorize suggested videos
    const videosByCategory = setCategory(suggestedVideos);

    //get top rating video
    const topRatingVideos = topRatingMethod(videosByCategory);

    //audio----------------------------------------------------------------------------------------------
    //find all relevent audios and short it into descending order
    const suggestedAudios = await methodModel
      .find({
        methodType: "audio",
        category: { $in: suggestedAuidoCategory },
      })
      .sort({ currentRating: -1 });

    //categorize suggested audios
    const audiosByCategory = setCategory(suggestedAudios);

    //get top rating audios
    const topRatingAudios = topRatingMethod(audiosByCategory);

    //pdf----------------------------------------------------------------------------------------------
    //find all  pdfs and short it into descending order
    const suggestedPdf = await methodModel
      .find({
        methodType: "pdf",
      })
      .sort({ currentRating: -1 });

    //send highest rating  2 videos---------------------------------------------------------------------
    return res.status(201).json({
      video: topRatingVideos,
      audio: topRatingAudios,
      pdf: suggestedPdf.slice(0, 2),
    });
  } catch (error) {
    res.status(500).send({ error: "fetch failed", error: error.message });
  }
};

//categorize function
const setCategory = (arr) => {
  const data = arr.reduce((acc, video) => {
    if (!acc[video.category]) {
      acc[video.category] = [];
    }

    acc[video.category].push(video);
    return acc;
  }, {});

  return data;
};

//find top rating video
const topRatingMethod = (arr) => {
  return Object.values(arr).flatMap((item) => {
    return item.slice(0, 1);
  });
};
