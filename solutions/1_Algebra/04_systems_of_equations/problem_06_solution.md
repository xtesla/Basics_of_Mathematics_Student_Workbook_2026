# Exercise 6 - A System with a Parameter — Which Cases Actually Occur?

## Problem Statement

Analyze, depending on the parameter $a$, the system
```math
\begin{cases}x+y=2,\\ax+ay=4.\end{cases}
```

Among the three possibilities — exactly one solution, infinitely many solutions, no solution — determine which actually occur and for which values of $a$. If one type cannot occur, explain why.

## Theoretical Background and Concepts

If the second equation is a multiple of the first, the right sides must match the same multiple to have solutions.

## Step-by-Step Solution

The first equation is $x+y=2$. Multiplying by $a$ gives $ax+ay=2a$, but the second equation requires 4. If $2a=4$, then $a=2$ and infinitely many solutions satisfy $x+y=2$. For $a\ne2$ there is no solution.

Exactly one solution never occurs.

The geometric picture needs one exception. If $a\notin\{0,2\}$, the two equations give distinct parallel lines. At $a=0$, however, the second equation is $0=4$, an immediate contradiction rather than a line. At $a=2$, both equations describe the same line $x+y=2$, leaving one free variable.

## Verification and Consistency Checks

At $a=2$, both equations describe the same line. Otherwise they are parallel, distinct lines.
