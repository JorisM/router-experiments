import React from "react";

type Props = {
  firstName: string;
  setFirstName: (firstName: string) => void;
};

export const FirstForm = ({ firstName, setFirstName }: Props) => {
  return (
    <input
      type="text"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
    />
  );
};
