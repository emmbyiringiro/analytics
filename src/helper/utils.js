export const getUsersData = async url => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
