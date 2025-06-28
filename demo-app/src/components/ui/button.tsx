import { cn } from '../../lib/utils';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ className, variant = 'default', ...props }) => {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-md',
        variant === 'primary' ? 'bg-blue-600 text-white' : variant === 'secondary' ? 'bg-gray-200 text-gray-800' : 'bg-gray-100 text-gray-800',
        className
      )}
      {...props}
    />
  );
};