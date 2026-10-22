# Exercise 1 - From a System to a Matrix

## Problem Statement

Write the system
```math
\begin{cases}2x-y+z=4,\\x+3y-2z=1,\\3x+y+z=7.\end{cases}
```
in the form $Ax=b$.
Identify the coefficient matrix, the vector of unknowns, and the right-hand side vector. Explain how each row of the matrix corresponds to one equation.

## Theoretical Background and Concepts

In $Ax=b$, each row of $A$ contains the coefficients of one equation, $x$ holds the unknowns, and $b$ contains the right-hand sides.

## Step-by-Step Solution

```math
A=\begin{pmatrix}2&-1&1\\1&3&-2\\3&1&1\end{pmatrix},\quad x=\begin{pmatrix}x\\y\\z\end{pmatrix},\quad b=\begin{pmatrix}4\\1\\7\end{pmatrix},\quad Ax=b.
```

For example, the first row gives $2x-y+z=4$.

## Verification and Consistency Checks

Expanding all three rows of $Ax=b$ reproduces the three original equations.
