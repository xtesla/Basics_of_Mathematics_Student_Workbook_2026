# Exercise 11 - A Parameter in a System of Three Equations

## Problem Statement

Analyze the number of solutions depending on $t$:
```math
\begin{cases}x+y+z=1,\\x+ty+z=2,\\x+y+tz=3.\end{cases}
```
Use elimination and separately analyze the parameter values for which a standard calculation step ceases to be valid.

## Theoretical Background and Concepts

When elimination produces a factor involving a parameter, analyze separately where division by that factor would fail.

## Step-by-Step Solution

Subtract equation 1 from equations 2 and 3:

```math
(t-1)y=1,\qquad (t-1)z=2.
```

For $t\ne1$, $y=1/(t-1)$, $z=2/(t-1)$, and $x=1-y-z=(t-4)/(t-1)$. For $t=1$, the second equation minus the first gives $0=1$, so no solution.

## Verification and Consistency Checks

For $t\ne1$, substitution gives the right sides 1, 2, 3. At $t=1$ the contradiction rules out any solution.
