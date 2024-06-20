"use client";

import { useId } from "react";
import { useFormState, useFormStatus } from "react-dom";

import { Button } from "components/ui/button";
import { Input } from "components/ui/input";
import { Label } from "components/ui/label";

import { signup } from "./actions";

const initialState = {
  email: "",
  password: "",
};

export default function Page() {
  const emailId = useId();
  const passwordId = useId();
  const [state, formAction] = useFormState(signup, initialState);
  const { pending } = useFormStatus();

  return (
    <div className="flex flex-col items-start justify-start gap-4 w-full">
      <div className="flex flex-col items-start justify-start gap-2">
        <h1 className="font-bold text-3xl">Sign up</h1>
        <p>Enter your email and password to create an account.</p>
      </div>
      {state.errors && state.errors.length && (
        <p className="text-destructive">{state.errors[0]}</p>
      )}
      <form
        action={formAction}
        className="flex flex-col items-start justify-start gap-4 w-full"
      >
        <div className="flex flex-col items-start justify-start gap-2 w-full">
          <Label htmlFor={emailId}>Email</Label>
          <Input id={emailId} name="email" type="email" required />
        </div>
        <div className="flex flex-col items-start justify-start gap-2 w-full">
          <Label htmlFor={passwordId}>Password</Label>
          <Input id={passwordId} name="password" type="password" required />
        </div>
        <Button type="submit" disabled={pending} className="w-full">
          Continue
        </Button>
      </form>
      <p>
        Already have an account?{" "}
        <a href="/login" className="underline">
          Log in
        </a>
        .
      </p>
    </div>
  );
}
