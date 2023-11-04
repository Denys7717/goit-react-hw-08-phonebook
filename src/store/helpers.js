export const handleFulfilledAll = (state, { payload }) => {
  state.contacts = payload;
};

export const handleFulfilledAdd = (state, { payload }) => {
  state.contacts ? state.contacts.push(payload) : (state.contacts = payload);
};

export const handleFulfilledDelete = (state, { payload }) => {
  const index = state.contacts.findIndex(item => item.id === payload.id);
  state.contacts.splice(index, 1);
};
