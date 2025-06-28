import { useStore } from '../store';
import { getBorrowerPipeline } from '../api';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import BorrowerCard from './BorrowerCard';
import { useEffect, useState } from 'react';

interface Borrower {
  id: string;
  name: string;
  loan_type: string;
  amount: number;
  status: string;
}

const BorrowerPipeline: React.FC = () => {
  const { pipelineTab, setPipelineTab } = useStore();
  const [borrowers, setBorrowers] = useState<{ new: Borrower[]; in_review: Borrower[]; approved: Borrower[] }>({
    new: [],
    in_review: [],
    approved: [],
  });

  useEffect(() => {
    getBorrowerPipeline().then(setBorrowers);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">F-SANATISED ACTIVE</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={pipelineTab} onValueChange={setPipelineTab}>
          <TabsList>
            <TabsTrigger value="New">New</TabsTrigger>
            <TabsTrigger value="In Review">In Review</TabsTrigger>
            <TabsTrigger value="Approved">Approved</TabsTrigger>
          </TabsList>
          <TabsContent value="New">
            {borrowers.new.map((borrower) => (
              <BorrowerCard key={borrower.id} borrower={borrower} />
            ))}
          </TabsContent>
          <TabsContent value="In Review">
            {borrowers.in_review.map((borrower) => (
              <BorrowerCard key={borrower.id} borrower={borrower} />
            ))}
          </TabsContent>
          <TabsContent value="Approved">
            {borrowers.approved.map((borrower) => (
              <BorrowerCard key={borrower.id} borrower={borrower} />
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default BorrowerPipeline;