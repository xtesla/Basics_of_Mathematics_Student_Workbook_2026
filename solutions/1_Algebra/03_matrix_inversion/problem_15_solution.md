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

The inverse formula uses $\det A=2(3)-1(1)=5$, so $A^{-1}=\frac15\begin{pmatrix}3&-1\\-1&2\end{pmatrix}$. Multiplying on the left works because $A^{-1}(Ax)=(A^{-1}A)x=x$.

```math
A^{-1}b=\frac15\begin{pmatrix}3(7)-1(8)\\-1(7)+2(8)\end{pmatrix}=\begin{pmatrix}13/5\\9/5\end{pmatrix}.
```

For Gaussian elimination, $y=9/5$ comes from eliminating $x$. Back-substituting into $2x+y=7$ gives $x=(7-y)/2=(7-9/5)/2=13/5$.

Counting one determinant evaluation, one inverse construction and one matrix-vector product as the main stages, the inverse route has three stages. Counting elimination and back-substitution as the main stages, the elimination route has two. For this single small system, elimination is simpler.

## Verification and Consistency Checks

$2(13/5)+9/5=7$ and $13/5+3(9/5)=8$.
