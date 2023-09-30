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
- [Authentication](#Authentication)

## Initiation

```javascript
import NexaflowInit from "nexaflow-web-sdk";

const apiKey = "apikey";

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

<div id="Authentication"></div>

#### Authentication

```javascript
const sendOtp = async () => {
  const response = await nexaflowApi.sendOtp({
    id: "ID",
    data: {
      email: "EMAIL", //required field
      // other fields
    },
  });
  console.log(response);
};

sendOtp();

const signup = async () => {
  const response = await nexaflowApi.signup({
    id: "ID",
    data: {
      email: "EMAIL",
      otp: "OTP",
      // other fields
    },
  });
  console.log(response);
};

signup();

const signin = async () => {
  const response = await nexaflowApi.signin({
    id: "ID",
    data: {
      email: "EMAIL",
      otp: "OTP",
    },
  });
  console.log(response);
};

signin();

const getUser = async () => {
  const response = await nexaflowApi.getUserDetails({
    id: "ID",
    Authorization: "AUTHORIZATION",
  });
  console.log(response);
};

getUserList();

const updateUser = async () => {
  const response = await nexaflowApi.updateUserDetails({
    id: "ID",
    Authorization: "AUTHORIZATION",
    data: {
      // other fields
    },
  });
  console.log(response);
};

updateUser();

const deleteUser = async () => {
  const response = await nexaflowApi.deleteUserDetails({
    id: "ID",
    Authorization: "AUTHORIZATION",
  });
  console.log(response);
};

deleteUser();
```

## Acknowledgements

- [API Reference](https://nexaflow.readme.io/)
- [Documentation](https://nexaflow.gitbook.io/)
