import { getBrokerInfo, getOnboardingWorkflow } from '../api';
import { useStore } from '../store';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import { Switch } from './ui/switch';
import { useEffect, useState } from 'react';

interface Broker {
  name: string;
  deals: number;
  approval_rate: string;
  pending: number;
}

interface Onboarding {
  steps: string[];
}

const BrokerOverview: React.FC = () => {
  const { assistantEnabled, toggleAssistant } = useStore();
  const [broker, setBroker] = useState<Broker | null>(null);
  const [onboarding, setOnboarding] = useState<Onboarding | null>(null);

  useEffect(() => {
    getBrokerInfo().then(setBroker);
    getOnboardingWorkflow().then(setOnboarding);
  }, []);

  if (!broker || !onboarding) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{broker.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-2xl font-bold">{broker.deals}</p>
            <p className="text-sm text-gray-600">Deals</p>
          </div>
          <div>
            <p className="text-2xl font-bold">{broker.approval_rate}</p>
            <p className="text-sm text-gray-600">Approval Rate</p>
          </div>
          <div>
            <p className="text-2xl font-bold">${broker.pending.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Pending</p>
          </div>
        </div>
        <div className="mt-4 flex space-x-2">
          <Button>
            <Phone className="h-4 w-4 mr-2" /> Call
          </Button>
          <Button>
            <Mail className="h-4 w-4 mr-2" /> Email
          </Button>
          <Button>
            <MessageSquare className="h-4 w-4 mr-2" /> Chat
          </Button>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Onboarding Workflow</h3>
          <ol className="mt-2 space-y-2">
            {onboarding.steps.map((step, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <Switch checked={assistantEnabled} onCheckedChange={toggleAssistant} />
          <span>E Ardsassist</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default BrokerOverview;