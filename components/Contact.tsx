import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { endpoints } from "@/config/api";

interface ProfileDialogProps {
  open: boolean;
  onOpenChange: (isOpen: boolean) => void;
  button: string;
  downloadCV: () => void;
}

export const ProfileDialog: React.FC<ProfileDialogProps> = ({
  open,
  onOpenChange,
  downloadCV,
  button,
}) => {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("Resume Downloaded");

  const sendTestEmail = async () => {
    try {
      const response = await fetch(`${endpoints.notifyAdmin}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, subject, description }), // Send form data
      });
      const data = await response.json();

      if (response.ok) {
        console.log("Email sent:", data);
        toast({
          className: cn(
            "top-0 left-1/2 transform -translate-x-1/2 flex fixed md:max-w-[420px] md:top-4"
          ),
          variant: "default",
          title: "Email Sent!",
          description: "Thank you! for showing interest in my profile",
        });
      } else {
        console.error("Error sending email:", data);
      }
      setSubject("");
      setDescription("");
      setEmail("");
    } catch (error) {
      setSubject("");
      setDescription("");
      setEmail("");
      console.error("Unexpected error:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    sendTestEmail();
    onOpenChange(false);
    e.preventDefault();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Me</DialogTitle>
          <DialogDescription>
            {` Please fill out the form, and I'll get back to you shortly!`}
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={
            button === "cv"
              ? (e) => {
                  downloadCV();
                  handleSubmit(e);
                }
              : (e) => {
                  handleSubmit(e);
                }
          }
        >
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="col-span-3"
              />
            </div>
            {button !== "cv" && (
              <>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="subject" className="text-right">
                    Subject
                  </Label>
                  <select
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="col-span-3 p-2 border rounded"
                  >
                    <option value="Job Role">Job Role</option>
                    <option value="Project Collaboration">
                      Project Collaboration
                    </option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="col-span-3"
                  />
                </div>
              </>
            )}
          </div>
          <DialogFooter>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
