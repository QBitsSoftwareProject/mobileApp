const userModel = require("../../models/regularUser/regularUser");
const motivationModel = require("../../models/motivations/motivation");

const getMotivationByDay = async (userId) => {
  const user = await userModel.findById(userId);
  if (!user) return { error: true, status: 404, message: "User not found" };

  const currentDate = new Date();
  const answerDate = new Date(user.answeredDate);

  if (!isSameDay(answerDate, currentDate)) {
    incrementCurrentTaskDay(user);
    await user.save();
  }

  const day = getCurrentTaskDay(user);
  const motivation = await motivationModel.findOne({
    day,
    duration: user.currentTaskType,
  });

  if (!motivation)
    return { error: true, status: 404, message: "Motivation not found" };

  return { error: false, data: { motivation, userName: user.userName } };
};

const isSameDay = (date1, date2) =>
  date1.getUTCDate() === date2.getUTCDate() &&
  date1.getUTCMonth() === date2.getUTCMonth() &&
  date1.getUTCFullYear() === date2.getUTCFullYear();

const incrementCurrentTaskDay = (user) => {
  switch (user.currentTaskType) {
    case "short-term":
      user.currentShortTermDay += 1;
      break;
    case "medium-term":
      user.currentMediumTermDay += 1;
      break;
    case "long-term":
      user.currentLongTermDay += 1;
      break;
    default:
      throw new Error("Invalid task type");
  }
};

const getCurrentTaskDay = (user) => {
  switch (user.currentTaskType) {
    case "short-term":
      return user.currentShortTermDay;
    case "medium-term":
      return user.currentMediumTermDay;
    case "long-term":
      return user.currentLongTermDay;
    default:
      throw new Error("Invalid task type");
  }
};

module.exports = {
  getMotivationByDay,
};
