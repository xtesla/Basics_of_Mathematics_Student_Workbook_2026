# Exercise 2 - Gaussian Elimination — One Solution

## Problem Statement

Solve using Gaussian elimination:
```math
\begin{cases}x+y+z=6,\\2x-y+z=3,\\x+2y-z=2.\end{cases}
```
After solving, substitute the result into all equations and check consistency.

## Theoretical Background and Concepts

Gaussian elimination removes variables by replacing rows with linear combinations, then uses back-substitution.

## Step-by-Step Solution

Subtract twice equation 1 from equation 2: $-3y-z=-9$. Subtract equation 1 from equation 3: $y-2z=-4$. Thus $z=9-3y$ and $y-2(9-3y)=-4$, giving $y=2$, $z=3$, and $x=1$.

```math
(x,y,z)=(1,2,3).
```

## Verification and Consistency Checks

Check: $1+2+3=6$, $2(1)-2+3=3$, and $1+2(2)-3=2$.
