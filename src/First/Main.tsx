import React from "react";
import { useLead } from "../LeadContext";
import { FirstForm } from "./Form";
import { produce } from "immer";

export const First = () => {
  const { lead, setLead, next } = useLead();
  return (
    <div>
      <h3>First Component</h3>
      <p>Current Step: {lead.step}</p>
      <FirstForm
        firstName={lead.firstName ?? ""}
        setFirstName={(firstName: string) =>
          setLead(
            produce(lead, (draft) => {
              draft.firstName = firstName;
            })
          )
        }
      />
      <button type="button" onClick={() => next(lead)}>
        Next
      </button>
    </div>
  );
};
