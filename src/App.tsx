import React, { type ReactNode } from "react";
import { LeadProvider } from "./LeadContext";

interface AppProps {
  children: ReactNode;
}

export const App = ({ children }: AppProps) => {
  return (
    <LeadProvider>
      <div className="p-2">
        <h3>App</h3>
        {children}
      </div>
    </LeadProvider>
  );
};
