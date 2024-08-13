import { type NavigateFn, useNavigate } from "@tanstack/react-router";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { match } from "ts-pattern";

type Step = "home" | "first" | "second" | "third";

type Lead = {
  firstName?: string;
  lastName?: string;
  step: Step;
};

type LeadContextType = {
  lead: Lead;
  setLead: (lead: Lead) => void;
  next: (lead: Lead) => void;
};

const LeadContext = createContext<LeadContextType | undefined>(undefined);

export const useLead = (): LeadContextType => {
  const context = useContext(LeadContext);
  if (!context) {
    throw new Error("useLead must be used within a LeadProvider");
  }
  return context;
};

const defaultLead: Lead = {
  step: "first",
};

const setStep =
  (step: Step, setLead: (lead: Lead) => void, navigate: NavigateFn) =>
  (lead: Lead) => {
    match(step)
      .with("home", () => {
        navigate({ to: "/first" });
        setLead({ ...lead, step: "first" });
      })
      .with("first", () => {
        if (lead.firstName === undefined) {
          navigate({ to: "/first" });
          setLead({ ...lead, step: "first" });
        } else {
          navigate({ to: "/second" });
          setLead({ ...lead, step: "second" });
        }
      })
      .with("second", () => {})
      .with("third", () => {
        navigate({ to: "/" });
        setLead(defaultLead);
      })
      .exhaustive();
  };

export const LeadProvider = ({ children }: { children: ReactNode }) => {
  const [lead, setLead] = useState<Lead>(defaultLead);
  const currentStep = lead.step;
  const navigate = useNavigate();

  const nextStep = setStep(currentStep, setLead, navigate);

  return (
    <LeadContext.Provider value={{ lead, setLead, next: nextStep }}>
      {children}
    </LeadContext.Provider>
  );
};
