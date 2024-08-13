import { createLazyFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createLazyFileRoute("/second")({
  component: () => <div>Hello /second!</div>,
});
