import axios from "axios";

const signup = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/signup`,
      data
    );
    return response.data;
  } catch (error) {
    return error.response?.data;
  }
};

export default signup;
