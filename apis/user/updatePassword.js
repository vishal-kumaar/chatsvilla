import axios from "axios";

const updatePassword = async (data, token) => {
  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/password/update`,
      data,
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

export default updatePassword;
