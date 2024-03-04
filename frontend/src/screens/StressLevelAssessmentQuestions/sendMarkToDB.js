import axiosInstance from "../../api/axios";

const submitToDatabase = async(totMark, u_id) => {

    try{

      const currentDate = new Date();

// Extract date and time parts
const formattedDate = currentDate.toLocaleDateString();
const formattedTime = currentDate.toLocaleTimeString();

      const payload = {
        userid:u_id,
        mark: totMark,
        date: formattedDate,
        time: formattedTime,
      }


      // const response = await axiosInstance.post('/mark/add-mark', payload);

      const response = await fetch('http://10.10.11.15:8070/mark/add-mark', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
      },
        body: JSON.stringify(payload),
      });

  if(response.ok) {
    console.log("data sent");
  }else {
    console.error("Failed to send data to the server", response.status, response.statusText);
  }

}catch (error) {
  console.error('Error sending mark:', error.message);
}
};

export { submitToDatabase };