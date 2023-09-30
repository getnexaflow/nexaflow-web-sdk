type AuthObject = {
  otp: string;
  email: string;
} & {
  [key: string]: any;
};

type OtpObject = { email: string } & {
  [key: string]: any;
};

declare module "nexaflow-web-sdk" {
  class NexaflowInit {
    constructor(apiKey: string);

    getPageByID(obj: { pageId: string; websiteId: string }): Promise<any>;

    getAllWebsites(): Promise<any>;

    getWebsiteByID(obj: { websiteId: string }): Promise<any>;

    formSubmission(obj: {
      formId: string;
      data: {
        [key: string]: string;
      };
    }): Promise<any>;

    getGoogleSheetData(obj: { googleSheetId: string }): Promise<any>;

    postGoogleSheetData(obj: {
      googleSheetId: string;
      data: Array<Array<string>>;
    }): Promise<any>;

    cors(obj: {
      id: string;
      data: {
        method: string;
        data?: any;
        headers?: {
          [key: string]: any;
        };
      };
    }): Promise<any>;

    emailVerification(obj: { id: string; email: string }): Promise<any>;

    getWaiter(obj: {
      id: string;
      waitlistId: string;
      offset?: number;
      limit?: number;
      referral_token?: string;
      questions_request?: boolean;
      offboarded_request?: boolean;
    }): Promise<any>;

    offboardWaiter(obj: {
      id: string;
      waitlist_id: string;
      waiters: { uuid: string }[];
    }): Promise<any>;

    sendOtp(obj: { id: string; data: OtpObject }): Promise<any>;

    signup(obj: { id: string; data: AuthObject }): Promise<any>;

    signin(obj: { id: string; data: AuthObject }): Promise<any>;

    getUserDetails(obj: { id: string; Authorization: string }): Promise<any>;

    updateUserDetails(obj: {
      id: string;
      Authorization: string;
      data: {
        [key: string]: string;
      };
    }): Promise<any>;

    deleteUserDetails(obj: { id: string; Authorization: string }): Promise<any>;
  }

  export default NexaflowInit;
}
