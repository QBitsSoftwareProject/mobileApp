import React, { useEffect, useState } from 'react';

// Function to get the current time
export const getTime = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
  
    if (currentHour >= 5 && currentHour < 12) {
      return 'Morning';
    } else if (currentHour >= 12 && currentHour < 18) {
      return 'Afternoon';
    } else if (currentHour >= 18 && currentHour < 21) {
      return 'Evening';
    } else {
      return 'Day';
    }
};
