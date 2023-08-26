import axios from "axios";

const markConversationAsRead = async (conversationId, token) => {
  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/conversation/${conversationId}/read`,
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

export default markConversationAsRead;
