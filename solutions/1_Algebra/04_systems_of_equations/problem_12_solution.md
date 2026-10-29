# Exercise 12 - Homogeneous System

## Problem Statement

Solve
```math
\begin{cases}x+2y-z=0,\\2x+4y-2z=0,\\x-y+2z=0.\end{cases}
```
Give all solutions in parametric form and explain why $(0,0,0)$ always satisfies a homogeneous system.

## Theoretical Background and Concepts

A homogeneous linear system always includes the zero vector. Dependent equations may also allow nonzero solutions.

## Step-by-Step Solution

Equation 2 is twice equation 1. Solve $x+2y-z=0$ and $x-y+2z=0$: subtraction gives $3y-3z=0$, so $y=z=t$ and $x=-t$.

```math
(x,y,z)=(-t,t,t),\quad t\in\mathbb R.
```

The zero vector always solves any homogeneous linear system, not only this example. Every right-hand side is zero, and setting all unknowns to zero makes every left-hand side $a_1\cdot0+\cdots+a_n\cdot0=0$. Thus $(0,0,0)$ is always a solution here. Other solutions may exist as well, as the parameter $t$ shows.

## Verification and Consistency Checks

The original equations become $-t+2t-t=0$ and $-t-t+2t=0$. $t=0$ gives $(0,0,0)$.
