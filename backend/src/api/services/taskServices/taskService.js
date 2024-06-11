const userModel = require("../../models/regularUser/regularUser");
const taskModel = require("../../models/tasksModel/taskModel");

const getOrAssignTask = async (userId) => {
  const user = await userModel.findById(userId);
  if (!user) throw new Error("User not found");

  const currentDate = new Date();
  const taskTakenDate = new Date(user.taskTakenDate);

  if (isSameDay(taskTakenDate, currentDate)) {
    return await getTasksForToday(user);
  }

  const taskDay = getCurrentTaskDay(user);
  const suggestedTasks = await taskModel.find({
    day: taskDay,
    duration: user.currentTaskType,
  });

  addTasksToUser(user, suggestedTasks, taskDay);
  user.taskTakenDate = currentDate;
  await user.save();

  return await getTasksForToday(user);
};

const isSameDay = (date1, date2) =>
  date1.getFullYear() === date2.getFullYear() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getDate() === date2.getDate();

const getTasksForToday = async (user) => {
  const taskDay = getCurrentTaskDay(user);
  await user.populate({
    path: "tasks.taskId",
    match: { day: taskDay, duration: user.currentTaskType },
  });
  return user.tasks.filter(
    (item) => item.day === taskDay && item.duration === user.currentTaskType
  );
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

const addTasksToUser = (user, tasks, taskDay) => {
  tasks.forEach((task) => {
    user.tasks.push({
      taskId: task._id,
      isComplete: false,
      day: taskDay,
      duration: user.currentTaskType,
    });
  });
};

module.exports = {
  getOrAssignTask,
};
