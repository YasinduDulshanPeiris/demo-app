import { useStore } from '../store';
import { Badge } from './ui/badge';

interface Borrower {
  id: string;
  name: string;
  loan_type: string;
  amount: number;
  status: string;
}

const BorrowerCard: React.FC<{ borrower: Borrower }> = ({ borrower }) => {
  const { setActiveBorrower } = useStore();
  return (
    <div
      className="p-4 bg-gray-50 rounded-md flex justify-between items-center cursor-pointer hover:bg-gray-100"
      onClick={() => setActiveBorrower(borrower.id)}
    >
      <div>
        <p className="font-medium">{borrower.name}</p>
        <p className="text-sm text-gray-600">{borrower.loan_type}</p>
      </div>
      <div className="text-right">
        <p className="font-medium">${borrower.amount.toLocaleString()}</p>
        <Badge variant={borrower.status === "In Review" ? "warning" : "default"}>{borrower.status}</Badge>
      </div>
    </div>
  );
};

export default BorrowerCard;