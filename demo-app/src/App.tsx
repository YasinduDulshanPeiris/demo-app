import Header from './components/Header';
import BorrowerPipeline from './components/BorrowerPipeline';
import BorrowerDetail from './components/BorrowerDetail';
import BrokerOverview from './components/BrokerOverview';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1">
          <BorrowerPipeline />
        </div>
        <div className="col-span-1">
          <BorrowerDetail />
        </div>
        <div className="col-span-1 md:contents hidden">
          <BrokerOverview />
        </div>
        <div className="col-span-1 md:hidden">
          <Accordion type="single" collapsible>
            <AccordionItem value="broker-info">
              <AccordionTrigger>Broker Info</AccordionTrigger>
              <AccordionContent>
                <BrokerOverview />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default App;