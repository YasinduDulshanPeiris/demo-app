import { mockApi } from './mockApi';

export const getBorrowerPipeline = async () => {
  return mockApi.borrowers;
};

export const getBorrowerDetail = async (id: string) => {
  return mockApi.borrowerDetails[id] || null;
};

export const getBrokerInfo = async () => {
  return mockApi.broker;
};

export const getOnboardingWorkflow = async () => {
  return mockApi.onboarding;
};

export const requestDocuments = async (id: string) => {
  console.log(`Documents requested for borrower ${id}`);
  return { success: true, message: "Documents requested." };
};

export const sendToValuer = async (id: string) => {
  console.log(`Sent to valuer for borrower ${id}`);
  return { success: true, message: "Valuer notified." };
};

export const approveLoan = async (id: string) => {
  console.log(`Loan approved for borrower ${id}`);
  return { success: true, message: "Loan approved." };
};

export const escalateToCreditCommittee = async (id: string) => {
  console.log(`Escalated to Credit Committee for borrower ${id}`);
  return { success: true, message: "Escalated to Credit Committee." };
};