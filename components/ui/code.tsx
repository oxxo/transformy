import * as React from "react"

import { cn } from "@/lib/utils"

export interface CodeProps extends React.HTMLAttributes<HTMLElement> {}

const Code = React.forwardRef<HTMLElement, CodeProps>(({ className, ...props }, ref) => {
  return (
    <pre className={cn("relative rounded bg-muted px-3 py-1.5 font-mono text-sm font-semibold", className)} ref={ref}>
      <code {...props} />
    </pre>
  )
})
Code.displayName = "Code"

export { Code }
