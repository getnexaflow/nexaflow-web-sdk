import axios from "axios";
import urlConfig from "../utils/urlConfig.js";

const fetchAllWebsitesFn = async ({ apiKey }) => {
  try {
    const response = await axios({
      url: urlConfig.allWebsites(),
      method: "GET",
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
      message: error.response,
    };
  }
};

const fetchWebsiteByIdFn = async ({ apiKey, websiteId }) => {
  try {
    const response = await axios({
      url: urlConfig.websiteByID({ websiteId }),
      method: "GET",
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
      message: error.response,
    };
  }
};

export { fetchAllWebsitesFn, fetchWebsiteByIdFn };
