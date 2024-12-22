import React, { FC, InputHTMLAttributes } from 'react';

interface RadioGroupProps {
  value?: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

interface RadioGroupItemProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
}

export const RadioGroup: FC<RadioGroupProps> = ({
  children,
  value,
  onValueChange,
  className = ''
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(e.target.value);
  };

  return (
    <div className={`space-y-2 ${className}`} role="radiogroup">
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            checked: child.props.value === value,
            onChange: handleChange
          });
        }
        return child;
      })}
    </div>
  );
};

export const RadioGroupItem: FC<RadioGroupItemProps> = ({
  id,
  value,
  className = '',
  ...props
}) => {
  return (
    <input
      type="radio"
      id={id}
      value={value}
      className={`w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
};
