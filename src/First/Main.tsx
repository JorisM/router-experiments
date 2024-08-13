import React from "react";
import { useLead } from "../LeadContext";

export const First = () => {
  const { lead, setLead } = useLead();
  return (
    <div>
      <h3>First Component</h3>
      <p>Current Step: {lead.step}</p>
      <button
        type="button"
        onClick={() => setLead({ ...lead, step: "second" })}
      >
        Next
      </button>
    </div>
  );
};
