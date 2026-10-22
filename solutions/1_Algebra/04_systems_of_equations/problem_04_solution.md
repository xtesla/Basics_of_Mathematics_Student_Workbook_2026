# Exercise 4 - Infinitely Many Solutions

## Problem Statement

Solve
```math
\begin{cases}x+y+z=2,\\2x+2y+2z=4,\\x-y+z=0.\end{cases}
```
Give the solution in parametric form, identify a free variable, and for one chosen parameter value check that the resulting point really satisfies the system.

## Theoretical Background and Concepts

A free variable appears when an equation is dependent on the others. We can express the solutions using a parameter.

## Step-by-Step Solution

Equation 2 is twice equation 1. Subtract equation 3 from equation 1: $2y=2$, so $y=1$. Equation 1 then gives $x+z=1$. Set $z=t$:

```math
(x,y,z)=(1-t,1,t),\qquad t\in\mathbb R.
```

## Verification and Consistency Checks

For $t=0$, $(1,1,0)$ satisfies all three equations: $2$, $4$, and $0$.
