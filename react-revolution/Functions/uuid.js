const uuid = () => {
  const timestamp = Math.floor(Date.now() / 1000);
  return `${timestamp}${Math.floor(Math.random() * 1000000)}`;
};

export default uuid;
