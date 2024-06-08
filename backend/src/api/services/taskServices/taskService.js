const userModel = require("../../models/regularUser/regularUser");
const taskModel = require("../../models/tasksModel/taskModel");

const getOrAssignTask = async (userId) => {
  const user = await userModel.findById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  const currentDate = new Date();
  const taskTakenDate = new Date(user.taskTakenDate);

  // Check if tasks have been taken for today
  if (
    taskTakenDate.getFullYear() === currentDate.getFullYear() &&
    taskTakenDate.getMonth() === currentDate.getMonth() &&
    taskTakenDate.getDate() === currentDate.getDate()
  ) {
    // Tasks already assigned for today
    const taskDay = getCurrentTaskDay(user);

    const populatedTasks = await userModel
      .findById(userId)
      .populate("tasks.taskId");

    return populatedTasks.tasks;
  }

  // Increment the task day for the current task type
  incrementCurrentTaskDay(user);

  // Update task type
  updateTaskType(user);

  // Get the incremented task day
  const taskDay = getCurrentTaskDay(user);

  // Find new tasks for the current day and task type
  const suggestedTasks = await taskModel.find({
    day: taskDay,
    duration: user.currentTaskType,
  });

  if (suggestedTasks.length === 0) {
    throw new Error("No tasks found for the given day and duration");
  }

  // Add the tasks to the user's tasks
  suggestedTasks.forEach((task) => {
    user.tasks.push({
      taskId: task._id,
      isComplete: false,
      day: taskDay,
      duration: user.currentTaskType,
    });
  });

  // Update the taskTakenDate to today
  user.taskTakenDate = currentDate;

  // Save the updated user data
  await user.save();

  // Fetch the user again to populate tasks
  const populatedUser = await userModel
    .findById(userId)
    .populate("tasks.taskId");

  return populatedUser.tasks;
};

// Helper function to get the current task day
function getCurrentTaskDay(user) {
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
}

// Helper function to increment the current task day
function incrementCurrentTaskDay(user) {
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
}

// Helper function to update the task type
function updateTaskType(user) {
  if (user.currentTaskType === "short-term" && user.currentShortTermDay > 7) {
    user.currentTaskType = "medium-term";
    user.currentMediumTermDay = 1;
    user.currentShortTermDay = 0;
  } else if (
    user.currentTaskType === "medium-term" &&
    user.currentMediumTermDay > 14
  ) {
    user.currentTaskType = "long-term";
    user.currentLongTermDay = 1;
    user.currentMediumTermDay = 0;
  } else if (
    user.currentTaskType === "long-term" &&
    user.currentLongTermDay > 30
  ) {
    user.currentTaskType = "short-term";
    user.currentShortTermDay = 1;
    user.currentLongTermDay = 0;
  }
}

module.exports = {
  getOrAssignTask,
};
