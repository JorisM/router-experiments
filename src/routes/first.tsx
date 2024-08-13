import { createFileRoute } from "@tanstack/react-router";
import React from "react";
import { First } from "../First/Main";

export const Route = createFileRoute("/first")({
  component: () => <First />,
});
