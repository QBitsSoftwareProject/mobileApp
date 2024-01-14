const submitToDatabase = async(totMark, u_id) => {

    try{

      const currentDate = new Date();

      const formattedDate = currentDate.toISOString().split('T')[0];
      const formattedTime = (currentDate.getUTCHours() + 5) + ':' + (currentDate.getUTCMinutes() + 30); 

      const payload = {
        userid:u_id,
        mark: totMark,
        date: formattedDate,
        time: formattedTime,
      }


    const response = await fetch('http://192.168.1.26:8070/mark/add-mark', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
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