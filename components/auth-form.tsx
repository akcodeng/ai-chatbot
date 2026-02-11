import Form from "next/form";

import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function AuthForm({
  action,
  children,
  defaultEmail = "",
}: {
  action: NonNullable<
    string | ((formData: FormData) => void | Promise<void>) | undefined
  >;
  children: React.ReactNode;
  defaultEmail?: string;
}) {
  return (
    <Form action={action} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label
          className="text-sm font-medium text-foreground"
          htmlFor="email"
        >
          Email Address
        </Label>

        <Input
          autoComplete="email"
          autoFocus
          className="h-10 rounded-lg border-border/50 bg-secondary/50 text-sm transition-colors focus:border-primary/50 focus:bg-background"
          defaultValue={defaultEmail}
          id="email"
          name="email"
          placeholder="you@example.com"
          required
          type="email"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label
          className="text-sm font-medium text-foreground"
          htmlFor="password"
        >
          Password
        </Label>

        <Input
          className="h-10 rounded-lg border-border/50 bg-secondary/50 text-sm transition-colors focus:border-primary/50 focus:bg-background"
          id="password"
          name="password"
          placeholder="Enter your password"
          required
          type="password"
        />
      </div>

      {children}
    </Form>
  );
}
