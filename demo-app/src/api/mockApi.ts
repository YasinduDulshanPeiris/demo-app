export const mockApi = {
  borrowers: {
    new: [
      { id: "1", name: "Sarah Dunn", loan_type: "Home Loan", amount: 300000, status: "Renew" },
      { id: "3", name: "Lisa Carter", loan_type: "Home Loan", amount: 450000, status: "New" },
    ],
    in_review: [
      { id: "2", name: "Alan Matthews", loan_type: "Personal Loan", amount: 20000, status: "In Review" },
    ],
    approved: [],
  },
  borrowerDetails: {
    "1": {
      id: "1",
      name: "Sarah Dunn",
      email: "sarah.dunn@example.com",
      phone: "(355)123-4557",
      loan_amount: 300000,
      status: "In Review",
      employment: "At Tech Company",
      income: 120000,
      existing_loan: 240000,
      credit_score: 720,
      source_of_funds: "Declared",
      risk_signal: "Missing Source of Funds declaration",
      ai_flags: ["Income Inconsistent with Bank statements", "High Debt-to-Income Ratio detected"],
    },
  },
  broker: {
    name: "Robert Turner",
    deals: 16,
    approval_rate: "75%",
    pending: 7660,
  },
  onboarding: {
    steps: [
      "Deal Intake",
      "IDV & Credit Check",
      "Document Upload",
      "AI Validation",
      "Credit Committee",
      "Approval & Docs",
      "Funder Syndication",
    ],
  },
};