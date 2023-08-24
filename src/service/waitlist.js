import axios from "axios";
import urlConfig from "../utils/urlConfig.js";

const createQueryParams = (paramsObject) => {
  const queryParams = new URLSearchParams();

  for (const key in paramsObject) {
    if (paramsObject.hasOwnProperty(key)) {
      queryParams.append(key, paramsObject[key]);
    }
  }

  return queryParams.toString();
};

const getWaiterFn = async ({ apiKey, ...obj }) => {
  try {
    const tempQueryObj = JSON.parse(JSON.stringify({ ...obj }));

    delete tempQueryObj.id;

    const queryParams = createQueryParams(tempQueryObj);

    const response = await axios({
      url: `${urlConfig.waitlist(obj)}${queryParams ? `?${queryParams}` : ""}`,
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
      message: error?.response?.data?.message,
    };
  }
};

const waiterOffboardFn = async ({ apiKey, ...obj }) => {
  try {
    const response = await axios({
      url: urlConfig.waitlist(obj),
      method: "POST",
      data: {
        waitlist_id: obj?.waitlist_id,
        waiters: obj?.waiters,
      },
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

export { getWaiterFn, waiterOffboardFn };
