# Exercise 14 - A Small Change in the Right-Hand Side

## Problem Statement

Compare the systems
```math
\begin{cases}x+y=2,\\2x-y=1,\\3x=3\end{cases}
```
and
```math
\begin{cases}x+y=2,\\2x-y=1,\\3x=3.1.\end{cases}
```
Check the consistency of each system and explain why a small change in one number can change the type of the system.

## Theoretical Background and Concepts

An overdetermined system is consistent only when all equations agree on the same solution.

## Step-by-Step Solution

From $x+y=2$ and $2x-y=1$, adding gives $3x=3$, so $x=1$ and $y=1$. The first system's third equation is $3x=3$, which holds. The second system requires $3x=3.1$, which fails.

## Verification and Consistency Checks

The first system has one solution $(1,1)$; the second has no solution despite changing only one right-hand-side value.
