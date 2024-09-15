import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DialogWrapperProps {
  title: string;
  description: string;
  triggerButtonText: string;
  children: React.ReactNode;
  onSubmit?: () => void; // Optional, used for form submissions
  isForm?: boolean; // Optional, indicates whether the dialog is a form
}

export const DialogWrapper: React.FC<DialogWrapperProps> = ({
  title,
  description,
  triggerButtonText,
  children,
  onSubmit,
  isForm = false,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{triggerButtonText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">{children}</div>

        {/* Render form footer only if it's a form */}
        {isForm && (
          <DialogFooter>
            <Button type="submit" onClick={onSubmit}>
              Save changes
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};
