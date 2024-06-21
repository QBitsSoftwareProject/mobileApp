const userModel = require("../../models/regularUser/regularUser");
const taskModel = require("../../models/tasksModel/taskModel");

const getOrAssignTask = async (userId) => {
  const user = await userModel.findById(userId);
  if (!user) throw new Error("User not found");

  const currentDate = new Date();
  // currentDate.setDate(10);
  const taskTakenDate = new Date(user.taskTakenDate);

  if (isSameDay(taskTakenDate, currentDate)) {
    return await getTasksForToday(user, currentDate);
  }

  const taskDay = getCurrentTaskDay(user);
  const suggestedTasks = await taskModel.find({
    day: taskDay,
    duration: user.currentTaskType,
  });

  addTasksToUser(user, suggestedTasks, taskDay, currentDate);
  user.taskTakenDate = currentDate;
  await user.save();

  return await getTasksForToday(user, currentDate);
};

const isSameDay = (date1, date2) =>
  date1.getFullYear() === date2.getFullYear() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getDate() === date2.getDate();

const getTasksForToday = async (user, currentDate) => {
  const taskDay = getCurrentTaskDay(user);
  await user.populate({
    path: "tasks.taskId",
    match: { day: taskDay, duration: user.currentTaskType },
  });
  return user.tasks.filter(
    (item) =>
      item.day === taskDay &&
      item.duration === user.currentTaskType &&
      isSameDay(new Date(item.assignedDate), currentDate)
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

const addTasksToUser = (user, tasks, taskDay, currentDate) => {
  tasks.forEach((task) => {
    user.tasks.push({
      taskId: task._id,
      isComplete: false,
      day: taskDay,
      duration: user.currentTaskType,
      assignedDate: currentDate,
    });
  });
};

module.exports = {
  getOrAssignTask,
};
