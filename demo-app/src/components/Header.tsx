import { Search, HelpCircle, Bell } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-50">
      <h1 className="text-2xl font-bold">DemoApp</h1>
      <div className="flex space-x-4">
        <Search className="h-6 w-6" />
        <HelpCircle className="h-6 w-6" />
        <Bell className="h-6 w-6" />
      </div>
    </header>
  );
};

export default Header;