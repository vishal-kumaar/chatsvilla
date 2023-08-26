import axios from "axios";

const updateStatus = async (isOnline, token) => {
  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/profile/update`,
      { isOnline },
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

export default updateStatus;
