import parseFn from "./utils/parse.js";
import { fetchPagesByIDFn } from "./service/page.js";
import { fetchAllWebsitesFn, fetchWebsiteByIdFn } from "./service/website.js";
import { formSubmit } from "./service/form.js";
import {
  getGoogleSheetsDataFn,
  postGoogleSheetsDataFn,
} from "./service/googlesheet.js";
import { corsFn } from "./service/cors.js";
import { emailVerificationFn } from "./service/emailVerification.js";
import { getWaiterFn, waiterOffboardFn } from "./service/waitlist.js";
import { authenticateFn } from "./service/authentication.js";

class NexaflowInit {
  constructor(apiKey) {
    if (!apiKey) {
      throw new Error("API key is required for initialization");
    }
    this.apiKey = apiKey;
  }

  async getPageByID(obj) {
    if (!obj?.pageId?.trim()) {
      throw new Error("pageId is required");
    }

    if (!obj?.websiteId?.trim()) {
      throw new Error("websiteId is required");
    }

    const { error, response, message } = await fetchPagesByIDFn({
      apiKey: this.apiKey,
      ...obj,
    });

    if (error) {
      throw new Error(message);
    }

    const parsedResponse = parseFn(await response);

    return parsedResponse;
  }

  async getAllWebsites() {
    const { error, response, message } = await fetchAllWebsitesFn({
      apiKey: this.apiKey,
    });

    if (error) {
      throw new Error(message);
    }

    return await response;
  }

  async getWebsiteByID(obj) {
    if (!obj?.websiteId?.trim()) {
      throw new Error("websiteId is required");
    }

    const { error, response, message } = await fetchWebsiteByIdFn({
      apiKey: this.apiKey,
      ...obj,
    });

    if (error) {
      throw new Error(message);
    }

    let websiteData = { ...response };

    for (let i in websiteData?.pages) {
      websiteData.pages[i].blocks = parseFn(websiteData?.pages[i]);
    }
    return websiteData;
  }

  async formSubmission(obj) {
    if (!obj?.formId?.trim()) {
      throw new Error("formId is required");
    }

    if (!obj?.data) {
      throw new Error("data is required");
    }
    const { error, response, message } = await formSubmit({
      apiKey: this.apiKey,
      ...obj,
    });

    if (error) {
      throw new Error(message);
    }

    return await response;
  }

  async getGoogleSheetData(obj) {
    if (!obj?.googleSheetId) {
      throw new Error("googleSheetId is required");
    }

    const { error, response, message } = await getGoogleSheetsDataFn({
      apiKey: this.apiKey,
      ...obj,
    });

    if (error) {
      throw new Error(message);
    }

    return await response;
  }

  async postGoogleSheetData(obj) {
    if (!obj?.googleSheetId) {
      throw new Error("googleSheetId is required");
    }

    if (!obj?.data) {
      throw new Error("data is required");
    }

    const { error, response, message } = await postGoogleSheetsDataFn({
      apiKey: this.apiKey,
      ...obj,
    });

    if (error) {
      throw new Error(message);
    }

    return await response;
  }

  async cors(obj) {
    if (!obj?.id) {
      throw new Error("id is required");
    }

    if (!obj?.data) {
      throw new Error("data is required");
    }

    if (!obj?.data?.method) {
      throw new Error("method is required");
    }

    const { error, response, message } = await corsFn({
      apiKey: this.apiKey,
      ...obj,
    });

    if (error) {
      throw new Error(message);
    }

    return await response;
  }

  async emailVerification(obj) {
    if (!obj?.id) {
      throw new Error("id is required");
    }

    if (!obj?.email) {
      throw new Error("email is required");
    }

    const { error, response, message } = await emailVerificationFn({
      apiKey: this.apiKey,
      ...obj,
    });

    if (error) {
      throw new Error(message);
    }

    return await response;
  }

  async getWaiter(obj) {
    if (!obj?.id) {
      throw new Error("id is required");
    }

    if (!obj?.waitlistId) {
      throw new Error("waitlistId is required");
    }

    const { error, response, message } = await getWaiterFn({
      apiKey: this.apiKey,
      ...obj,
    });

    if (error) {
      throw new Error(message);
    }

    return await response;
  }

  async offboardWaiter(obj) {
    if (!obj?.id) {
      throw new Error("id is required");
    }

    if (!obj?.waitlist_id) {
      throw new Error("waitlist_id is required");
    }

    if (!obj?.waiters) {
      throw new Error("waiters is required");
    }

    const { error, response, message } = await waiterOffboardFn({
      apiKey: this.apiKey,
      ...obj,
    });

    if (error) {
      throw new Error(message);
    }

    return await response;
  }

  async sendOtp(obj) {
    if (!obj?.id) {
      throw new Error("id is required");
    }

    if (!obj?.data) {
      throw new Error("data is required");
    }

    const { error, response, message } = await authenticateFn({
      apiKey: this.apiKey,
      type: "otp",
      ...obj,
    });

    if (error) {
      throw new Error(message);
    }

    return await response;
  }

  async signup(obj) {
    if (!obj?.id) {
      throw new Error("id is required");
    }

    if (!obj?.data) {
      throw new Error("data is required");
    }

    if (!obj?.data?.email) {
      throw new Error("email is required");
    }

    if (!obj?.data?.otp) {
      throw new Error("otp is required");
    }

    const { error, response, message } = await authenticateFn({
      apiKey: this.apiKey,
      type: "register",
      ...obj,
    });

    if (error) {
      throw new Error(message);
    }

    return await response;
  }

  async signin(obj) {
    if (!obj?.id) {
      throw new Error("id is required");
    }

    if (!obj?.data) {
      throw new Error("data is required");
    }

    if (!obj?.data?.email) {
      throw new Error("email is required");
    }

    if (!obj?.data?.otp) {
      throw new Error("otp is required");
    }

    const { error, response, message } = await authenticateFn({
      apiKey: this.apiKey,
      type: "login",
      ...obj,
    });

    if (error) {
      throw new Error(message);
    }

    return await response;
  }
}

export default NexaflowInit;
