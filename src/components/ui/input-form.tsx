import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  value,
  onChange,
  rows
}) => {
  const isTextarea = type === 'textarea';
  
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-text-primary">
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      {isTextarea ? (
        <Textarea
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={rows || 4}
          className="bg-surface border-border focus:border-gradient-start"
        />
      ) : (
        <Input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="bg-surface border-border focus:border-gradient-start"
        />
      )}
    </div>
  );
};