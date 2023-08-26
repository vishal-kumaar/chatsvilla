import axios from "axios";

const getReceivedRequests = async (token) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/requests/received`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    return error.response?.data;
  }
};

export default getReceivedRequests;
