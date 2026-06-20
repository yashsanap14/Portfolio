import { createContext, useContext, useState, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { RESUME } from "@/data/site";

interface ResumeContextValue {
  openResume: () => void;
}

const ResumeContext = createContext<ResumeContextValue | undefined>(undefined);

export function ResumeProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <ResumeContext.Provider value={{ openResume: () => setOpen(true) }}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle>{RESUME.title}</DialogTitle>
          </DialogHeader>
          <div className="px-6 pb-6">
            <iframe
              src={RESUME.previewUrl}
              title={RESUME.title}
              className="h-[60vh] w-full rounded-lg border border-[var(--color-border)]"
            />
            <div className="mt-4 flex justify-end">
              <Button asChild>
                <a href={RESUME.downloadUrl} download={RESUME.downloadFilename}>
                  <Download className="h-4 w-4" />
                  Download PDF
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const ctx = useContext(ResumeContext);
  if (!ctx) throw new Error("useResume must be used within ResumeProvider");
  return ctx;
}
