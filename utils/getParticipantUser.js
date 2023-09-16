const getParticipantUser = (userId, participants) => {
  for (let i = 0; i < participants.length; i++) {
    if (participants[i].user._id !== userId) {
      return participants[i];
    }
  }
};

export default getParticipantUser;
