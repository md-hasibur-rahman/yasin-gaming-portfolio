"use client";
import { useActionState } from "react";
import { sendMessageAction } from "@/app/actions/messages";
import { toast } from "sonner";
import { useEffect, useRef } from "react";

export function MessageForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, pending] = useActionState(async (_prev: any, formData: FormData) => {
    const res = await sendMessageAction(formData);
    return res;
  }, null);

  useEffect(() => {
    if (!state) return;
    if (state.ok) {
      toast.success("Message sent");
      formRef.current?.reset();
    } else if (state.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="grid gap-4">
      <div className="grid gap-2">
        <label className="text-sm text-zinc-300" htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} required className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" placeholder="Write your message..." />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center rounded-md px-4 py-2 bg-purple-600 text-white hover:bg-purple-500 disabled:opacity-60"
      >
        {pending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
