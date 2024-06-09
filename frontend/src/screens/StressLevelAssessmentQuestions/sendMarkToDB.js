import axiosInstance from "../../api/axios";

const submitToDatabase = async (totMark, u_id) => {
  try {
    const currentDate = new Date();

    // Extract date and time parts
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();

    // Prepare the payload with mark converted to a number
    const payload = {
      userid: u_id,
      mark: Number(totMark), 
      date: formattedDate,
      time: formattedTime,
    };

    // Send POST request using axiosInstance
    const response = await axiosInstance.post('/mark/add-mark', payload);

    
    if (response.status >= 200 && response.status < 300) {
      console.log("Data sent successfully");
    } else {
      console.error(`Failed to send data to the server. Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error sending mark:', error.message);
  }
};

export { submitToDatabase };
