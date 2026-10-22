# Exercise 13 - Does Every Equation Add New Information?

## Problem Statement

Consider the system
```math
x_1+x_2=10,\qquad x_2+x_3=8,\qquad x_1-x_3=2.
```
Solve it and check whether all three equations are independently necessary to describe the solution set. If one follows from the others, show this by calculation.

## Theoretical Background and Concepts

A dependent equation does not reduce the number of solutions because it repeats information already implied by other equations.

## Step-by-Step Solution

Subtract $x_2+x_3=8$ from $x_1+x_2=10$: $x_1-x_3=2$, which is exactly equation 3. Let $x_3=t$; then

```math
(x_1,x_2,x_3)=(t+2,8-t,t),\quad t\in\mathbb R.
```

## Verification and Consistency Checks

All three equations hold for every $t$; equation 3 adds no new condition.
