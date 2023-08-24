declare module "nexaflow-web-sdk" {
  export class NexaflowInit {
    constructor(apiKey: string);

    getPageByID(obj: { pageId: string; websiteId: string }): Promise<any>;

    getAllWebsites(): Promise<any>;

    getWebsiteByID(obj: { websiteId: string }): Promise<any>;

    formSubmission(obj: { formId: string; data: any }): Promise<any>;

    getGoogleSheetData(obj: { googleSheetId: string }): Promise<any>;

    postGoogleSheetData(obj: {
      googleSheetId: string;
      data: any;
    }): Promise<any>;

    cors(obj: {
      id: string;
      data: {
        method: string;
        data?: any;
        headers?: any;
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
  }

  const NexaflowInit: NexaflowInit;

  export default NexaflowInit;
}
