import axios from "axios";

const acceptRequests = async (userId, token) => {
  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/request/accept/${userId}`,
      null,
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

export default acceptRequests;
