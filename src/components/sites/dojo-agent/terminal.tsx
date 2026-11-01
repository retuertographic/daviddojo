import { cn } from "@/lib/utils";

type TerminalProps = {
  variant?: "go" | "pocket" | "wired" | "duo";
  className?: string;
  amount?: string;
};

// Ilustración vectorial de un datáfono (no usa imágenes de terceros).
export function Terminal({ variant = "go", className, amount = "24,50 €" }: TerminalProps) {
  if (variant === "duo") {
    return (
      <div className={cn("relative flex items-end gap-3", className)}>
        <div className="w-44 rounded-[22px] bg-zinc-900 p-2 shadow-2xl ring-1 ring-white/10">
          <div className="aspect-[4/3] rounded-[16px] bg-gradient-to-br from-white to-zinc-100 p-3">
            <div className="mb-2 h-2 w-10 rounded-full bg-zinc-300" />
            <div className="grid grid-cols-3 gap-1.5">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-6 rounded-md bg-blue-100" />
              ))}
            </div>
            <div className="mt-2 h-4 rounded-md bg-blue-600" />
          </div>
        </div>
        <Terminal variant="go" className="w-24" amount={amount} />
      </div>
    );
  }

  const isPocket = variant === "pocket";
  const isWired = variant === "wired";

  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "relative rounded-[28px] bg-zinc-900 p-2.5 shadow-2xl ring-1 ring-white/10",
          isPocket ? "aspect-[9/17]" : "aspect-[9/15]",
        )}
      >
        <div className="flex h-full flex-col rounded-[20px] bg-gradient-to-b from-white to-zinc-100 p-3">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-semibold tracking-wide text-zinc-500">DOJO</span>
            <span className="h-1.5 w-6 rounded-full bg-zinc-300" />
          </div>
          <div className="mt-auto mb-auto text-center">
            <p className="text-[9px] text-zinc-500">Total</p>
            <p className="whitespace-nowrap text-base font-semibold tracking-tight text-zinc-900 sm:text-lg">{amount}</p>
            <div className="mx-auto mt-3 flex size-10 items-center justify-center rounded-full bg-blue-600/10">
              <svg viewBox="0 0 24 24" className="size-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M8.5 7.5a6 6 0 0 1 0 9" />
                <path d="M12 5a9.5 9.5 0 0 1 0 14" />
                <path d="M15.5 2.5a13 13 0 0 1 0 19" />
              </svg>
            </div>
            <p className="mt-2 text-[9px] text-zinc-500">Acerque la tarjeta</p>
          </div>
          <div className="h-5 rounded-lg bg-blue-600" />
        </div>
      </div>
      {isWired && <div className="mx-auto -mt-1 h-10 w-1.5 rounded-b-full bg-zinc-700" />}
    </div>
  );
}
