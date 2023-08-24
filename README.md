![Logo](https://app.nexaflow.xyz/logo.png)

# Nexaflow

A npm package for content management system in web application using [NexaFlow](https://nexaflow.xyz) platform

## Installation

```bash
  npm install nexaflow-web-sdk
```

## Features

- [Websites](#Websites)
- [Pages](#Pages)
- [Forms](#Forms)
- [Googlesheets](#Googlesheets)
- [CORS](#CORS)
- [Waitlist](#Waitlist)
- [Email Verification](#EmailVerification)

## Initiation

```javascript
import NexaflowInit from "nexaflow-web-sdk";

const apiKey = "api key";

const nexaflowApi = new NexaflowInit(apiKey);
```

## Usage

<div id="Websites"></div>

#### Websites

```javascript
<!-- Get All Websites  -->

const getWebsites = async () => {
  const websites = await nexaflowApi.getAllWebsites();
  console.log(websites);
};
getWebsites();

<!-- Get a website by id -->

const getWebsiteByID = async () => {
  const website = await nexaflowApi.getWebsiteByID({
    websiteId: "WEBSITE_ID",
  });
  console.log(website);
};

getWebsiteByID();

```

<div id="Pages"></div>

#### Pages

```javascript
<!-- Get a page by id  -->
const getPageByID = async () => {
  const page=await nexaflowApi.getPageByID({
      pageId: "PAGE_ID",
      websiteId: "WEBSITE_ID",
    })
  console.log(page)
};

getPageByID();

```

<div id="Forms"></div>

#### Forms

```javascript
<!-- Form Submission -->

const submitForm = async () => {
  const response = await nexaflowApi.formSubmission({
    formId: "FORM_ID",
    data: {
      KEY: "VALUE",
    },
  });

  console.log(response);
};

submitForm();

```

<div id="Googlesheets"></div>

#### Googlesheets

```javascript
<!-- Get googlesheet data  -->

const getGoogleSheetData = async () => {
  const googlesheetData = await nexaflowApi.getGoogleSheetData({
    googleSheetId: "ID",
  });

  console.log(googlesheetData);
};
getGoogleSheetData();

<!-- Post googlesheet data -->

const postGoogleSheetData = async () => {
  const response = await nexaflowApi.postGoogleSheetData({
    googleSheetId: "ID",
    data: [["String"]],
  });
  console.log(response);
};

postGoogleSheetData();

```

<div id="CORS"></div>

#### CORS

```javascript
const cors = async () => {
  const response = await nexaflowApi.cors({
    id: "ID",
    data: {
      method: "post" || "get" || "put" || "delete",
      data: {},
    },
  });

  console.log(response);
};

cors();
```

<div id="Waitlist"></div>

#### Waitlist

```javascript
<!-- Get waiter -->

const getWaiterList = async () => {
  const response = await nexaflowApi.getWaiter({
    id: "ID",
    waitlistId: "WAITLISTID",
  });
  console.log(response);
};

getWaiterList();

<!-- Offboard Waiter -->

const offboardWaiter = async () => {
  const response = await nexaflowApi.offboardWaiter({
    id: "ID",
    waitlist_id: "WAITLIST_ID",
    waiters: [{
      uuid:"UUID"
    }],
  });
  console.log(response);
};

offboardWaiter();

```

<div id="EmailVerification"></div>

#### Email Verification

```javascript
const emailVerification = async () => {
  const response = await nexaflowApi.emailVerification({
    id: "ID",
    email: "EMAIL",
  });

  console.log(response);
};

emailVerification();
```

## Acknowledgements

- [API Reference](https://nexaflow.readme.io/)
- [Documentation](https://nexaflow.gitbook.io/)
