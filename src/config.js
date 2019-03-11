const dev = {
  STRIPE_KEY: "pk_test_V09IOXZiEs3xpc6GmZnSzieh",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-l3i9krhw7job"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ub2ozcago8.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_pdhtxPjAr",
    APP_CLIENT_ID: "3g51j8mb84de7k1ic0p4ckh7q3",
    IDENTITY_POOL_ID: "us-east-1:642fc7ac-fb38-4bf0-9cd8-242126b44eb3"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_V09IOXZiEs3xpc6GmZnSzieh",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1f8lgfqzzwnwn"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://pfmvxq6fc7.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_HBYy52Kd8",
    APP_CLIENT_ID: "50g5mgs15htnum592t14f1n657",
    IDENTITY_POOL_ID: "us-east-1:60472d0c-80e3-45d4-9dd1-8abdba3cbbec"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
