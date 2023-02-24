import axios from "axios";
import { useEffect, useState } from "react";

const URL = "https://frontend-take-home.fetchrewards.com/form";

export const useFetchData = () => {
  const [data, setData] = useState({});

  const fetch = async () => {
    const response = await axios.get(URL);

    if (response && response.data) setData(response.data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return { data };
};

export const submitForm = async ({
  fullName,
  email,
  password,
  state,
  occupation,
}) => {
  try {
    const response = await axios.post(URL, {
      name: fullName,
      email,
      password,
      occupation,
      state,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
