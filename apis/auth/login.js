import axios from "axios";

const login = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/kogin`,
      data
    );
    return response.data;
  } catch (error) {
    return error.response?.data;
  }
};

export default login;
