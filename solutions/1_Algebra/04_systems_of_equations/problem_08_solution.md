# Exercise 8 - Two Systems with the Same Coefficient Matrix

## Problem Statement

Solve by elimination the two systems
```math
\begin{cases}2x+y=5,\\x-y=1,\end{cases}
```
```math
\begin{cases}2x+y=1,\\x-y=4.\end{cases}
```
Compare the successive elimination steps. Which part of the calculation is the same in both cases, and why?

## Theoretical Background and Concepts

When systems share the same coefficient matrix, elimination multipliers are the same even if right-hand sides differ.

## Step-by-Step Solution

For the first system, twice $x-y=1$ subtracted from $2x+y=5$ gives $3y=3$, so $(x,y)=(2,1)$.

For the second, twice $x-y=4$ subtracted from $2x+y=1$ gives $3y=-7$, so $(x,y)=(5/3,-7/3)$.

Both use the same left-side elimination $3y$.

To show the back-substitution explicitly: in the first system, elimination gives $3y=3$, so $y=1$ and then $x=1+y=2$ from $x-y=1$. In the second, $3y=-7$, so $y=-7/3$ and then $x=4+y=4-7/3=5/3$ from $x-y=4$.

## Verification and Consistency Checks

First: $2(2)+1=5$ and $2-1=1$. Second: $2(5/3)-7/3=1$ and $5/3+7/3=4$.
