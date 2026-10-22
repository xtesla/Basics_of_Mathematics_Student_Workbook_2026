# Exercise 10 - A Polynomial Through Three Points

## Problem Statement

Find a polynomial $p(x)=ax^2+bx+c$ whose graph passes through $(0,1)$, $(1,3)$, and $(2,9)$. Reduce the problem to a system of equations and check the result by substituting all three points.

## Theoretical Background and Concepts

Substituting points into $p(x)=ax^2+bx+c$ gives a linear system for $a,b,c$.

## Step-by-Step Solution

At $x=0$: $c=1$. At $x=1$: $a+b+c=3$, so $a+b=2$. At $x=2$: $4a+2b+c=9$, so $2a+b=4$. Subtracting gives $a=2$, then $b=0$.

```math
p(x)=2x^2+1.
```

## Verification and Consistency Checks

$p(0)=1$, $p(1)=3$, and $p(2)=9$, matching all given points.
