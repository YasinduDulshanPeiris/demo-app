import { useStore } from '../store';
import { getBorrowerDetail, requestDocuments, sendToValuer, approveLoan, escalateToCreditCommittee } from '../api';
import { Card, CardContent } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { AlertTriangle } from 'lucide-react';
import { useEffect, useState } from 'react';

interface BorrowerDetailType {
  id: string;
  name: string;
  email: string;
  phone: string;
  loan_amount: number;
  status: string;
  employment: string;
  income: number;
  existing_loan: number;
  credit_score: number;
  source_of_funds: string;
  risk_signal: string;
  ai_flags: string[];
}

const BorrowerDetail: React.FC = () => {
  const { activeBorrowerId } = useStore();
  const [borrower, setBorrower] = useState<BorrowerDetailType | null>(null);

  useEffect(() => {
    if (activeBorrowerId) {
      getBorrowerDetail(activeBorrowerId).then(setBorrower);
    }
  }, [activeBorrowerId]);

  if (!borrower) return <Card>Select a borrower to view details</Card>;

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="mb-4">
          <h2 className="text-xl font-bold">{borrower.name}</h2>
          <p className="text-gray-600">{borrower.email}</p>
          <p className="text-gray-600">{borrower.phone}</p>
          <p className="text-gray-600">${borrower.loan_amount.toLocaleString()}</p>
          <Badge variant={borrower.status === "In Review" ? "warning" : "default"}>{borrower.status}</Badge>
        </div>
        <Accordion type="single" collapsible>
          {borrower.ai_flags.map((flag, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  <span>{flag}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>Additional details about the issue.</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-4 flex space-x-2">
          <Button onClick={() => requestDocuments(borrower.id)}>Request Documents</Button>
          <Button onClick={() => sendToValuer(borrower.id)}>Send to Valuer</Button>
          <Button onClick={() => approveLoan(borrower.id)}>Approve</Button>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Loan Summary</h3>
          <dl className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <dt className="text-sm text-gray-600">Employment</dt>
              <dd>{borrower.employment}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-600">Existing Loan</dt>
              <dd>${borrower.existing_loan.toLocaleString()}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-600">Credit Score</dt>
              <dd>{borrower.credit_score}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-600">Source of Funds</dt>
              <dd>{borrower.source_of_funds}</dd>
            </div>
          </dl>
          <div className="mt-4 p-4 bg-yellow-50 rounded-md flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
            <p>{borrower.risk_signal}</p>
          </div>
          <Button
            variant="default"
            className="mt-4 w-full"
            onClick={() => escalateToCreditCommittee(borrower.id)}
            disabled={!borrower.risk_signal}
          >
            Escalate to Credit Committee
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BorrowerDetail;