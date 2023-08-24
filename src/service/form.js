import axios from "axios";
import urlConfig from "../utils/urlConfig.js";

const formSubmit = async ({ apiKey, ...obj }) => {
  try {
    const response = await axios({
      url: urlConfig.formSubmit(obj),
      method: "POST",
      data: obj?.data,
      headers: {
        "x-api-key": apiKey,
      },
    });

    const result = await response?.data;

    return {
      error: false,
      response: result,
      message: null,
    };
  } catch (error) {
    return {
      error: true,
      response: null,
      message: error?.response?.data?.message,
    };
  }
};

export { formSubmit };
