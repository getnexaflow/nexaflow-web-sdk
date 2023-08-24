const url = "https://api.nexaflow.xyz";

const urlConfig = {
  allWebsites: () => `${url}/api/websites`,

  websiteByID: ({ websiteId }) => `${url}/api/website/${websiteId}`,

  pageByID: ({ pageId, websiteId }) =>
    `${url}/api/page/${pageId}?websiteId=${websiteId}`,

  formSubmit: ({ formId }) => `${url}/api/form/${formId}`,

  googleSheet: ({ googleSheetId }) =>
    `${url}/api/googleSheets/${googleSheetId}`,

  cors: ({ id }) => `${url}/api/cors/${id}`,

  emailVerification: ({ id }) => `${url}/api/email-verify/${id}`,

  waitlist: ({ id }) => `${url}/api/waitlist/${id}`,
};

export default urlConfig;
