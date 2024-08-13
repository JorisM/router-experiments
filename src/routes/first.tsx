import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/first")({
  component: () => <div>Hello /first!</div>,
});
