declare module "@webdev07/t-api" {
  export function getPageByID(
    pageId: string,
    websiteId: string,
    apiKey: string
  ): Promise<any>;

  export function getAllWebsites(apiKey: string): Promise<any>;

  export function getWebsiteByID(
    websiteId: string,
    apiKey: string
  ): Promise<any>;
}
