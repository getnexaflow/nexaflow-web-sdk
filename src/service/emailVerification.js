import axios from "axios";
import urlConfig from "../utils/urlConfig.js";

const emailVerificationFn = async ({ apiKey, ...obj }) => {
  try {
    const response = await axios({
      url: urlConfig.emailVerification(obj),
      method: "POST",
      data: { email: obj?.email },
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
export { emailVerificationFn };
