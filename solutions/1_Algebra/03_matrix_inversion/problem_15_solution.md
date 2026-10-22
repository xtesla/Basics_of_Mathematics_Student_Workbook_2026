# Exercise 15 - Two Methods for Solving the Same System

## Problem Statement

For
```math
A=\begin{pmatrix}2&1\\1&3\end{pmatrix},\qquad b=\begin{pmatrix}7\\8\end{pmatrix}
```
solve $Ax=b$ in two ways:

1. using $A^{-1}b$,
2. using Gaussian elimination.

Compare both solutions, the number of essential steps, and state which method was simpler in this example.

## Theoretical Background and Concepts

The inverse method uses $x=A^{-1}b$. Gaussian elimination works directly with the equations.

## Step-by-Step Solution

First $\det A=5$ and

```math
x=\frac15\begin{pmatrix}3&-1\\-1&2\end{pmatrix}\begin{pmatrix}7\\8\end{pmatrix}=\begin{pmatrix}13/5\\9/5\end{pmatrix}.
```

For elimination, subtract half of $2x+y=7$ from $x+3y=8$, giving $(5/2)y=9/2$, hence $y=9/5$, $x=13/5$. Elimination is shorter here because the inverse is not already given.

## Verification and Consistency Checks

$2(13/5)+9/5=7$ and $13/5+3(9/5)=8$.
