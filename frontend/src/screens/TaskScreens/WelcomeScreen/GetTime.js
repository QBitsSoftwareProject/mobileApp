// Function to get the current time

export const getTime = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
  
    if (currentHour >= 4 && currentHour < 12) {
      return 'Morning';
    } else if (currentHour >= 12 && currentHour < 17) {
      return 'Afternoon';
    } else if (currentHour >= 17 && currentHour < 20) {
      return 'Evening';
    } else {
      return 'Day';
    }
};
