import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormComponentProps {
  fields: { id: string; label: string; defaultValue: string }[];
  onChange: (id: string, value: string) => void;
}

export const FormComponent: React.FC<FormComponentProps> = ({
  fields,
  onChange,
}) => {
  return (
    <>
      {fields.map((field) => (
        <div key={field.id} className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor={field.id} className="text-right">
            {field.label}
          </Label>
          <Input
            id={field.id}
            defaultValue={field.defaultValue}
            className="col-span-3"
            onChange={(e) => onChange(field.id, e.target.value)}
          />
        </div>
      ))}
    </>
  );
};
