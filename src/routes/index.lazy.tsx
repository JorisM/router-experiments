import React from "react";

import { createLazyFileRoute } from "@tanstack/react-router";
import { useLead } from "../LeadContext";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { lead, setLead } = useLead();
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <button type="button" onClick={() => setLead({ ...lead, step: "first" })}>
        Next
      </button>
    </div>
  );
}
