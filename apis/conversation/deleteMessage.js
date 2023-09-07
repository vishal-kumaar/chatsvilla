import axios from "axios";

const deleteMessage = async (messageId, token) => {
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/conversation/message/${messageId}`,
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

export default deleteMessage;
