import { createLazyFileRoute } from "@tanstack/react-router";
import React from "react";
import { First } from "../First/Main";

export const Route = createLazyFileRoute("/first")({
  component: () => <First />,
});
