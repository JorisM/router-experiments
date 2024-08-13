import { useNavigate } from "@tanstack/react-router";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

type Step = "first" | "second" | "third";

type Lead = {
  firstName?: string;
  lastName?: string;
  step: Step;
};

type LeadContextType = {
  lead: Lead;
  setLead: (lead: Lead) => void;
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

const getStep = (step: Step) => (lead: Lead) => {
  switch (step) {
    case "first":
      if (lead.firstName === undefined) {
        return "first";
      }
      return "second";
    default:
      return step;
  }
};

export const LeadProvider = ({ children }: { children: ReactNode }) => {
  const [lead, setLead] = useState<Lead>(defaultLead);
  const currentStep = lead.step;
  const navigate = useNavigate();

  useEffect(() => {
    const nextStep = getStep(currentStep)(lead);

    navigate({ to: `/${nextStep}` });
  }, [currentStep, navigate, lead]);

  return (
    <LeadContext.Provider value={{ lead, setLead }}>
      {children}
    </LeadContext.Provider>
  );
};
