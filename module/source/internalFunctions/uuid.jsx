const uuid = () => {
  return `${Math.floor(Math.random() * 1000000)}${Math.floor(Math.random() * 1000000)}${Math.floor(Math.random() * 1000000)}`;
};

export default uuid;
