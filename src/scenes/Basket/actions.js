const updateFirstName = (name) => ({
  type: 'UPDATE_FIRST_NAME',
  payload: name,
});

const updateLastName = (name) => ({
  type: 'UPDATE_LAST_NAME',
  payload: name,
});

const updatePhone = (phone) => ({
  type: 'UPDATE_PHONE',
  payload: phone,
});

const updateAddress = (address) => ({
  type: 'UPDATE_ADDRESS',
  payload: address,
});

const resetOrder = () => ({ type: 'RESET_ORDER' });


export {
  updateFirstName,
  updateLastName,
  updatePhone,
  updateAddress,
  resetOrder,
};
