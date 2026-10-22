# Exercise 7 - Using Properties Instead of Recomputing

## Problem Statement

Suppose that for a $3\times3$ matrix, $\det A=-4$. Compute
```math
\det(2A),\qquad \det(A^T),\qquad \det(A^2),\qquad \det(-A).
```
Justify each answer using the appropriate property.

## Theoretical Background and Concepts

For an $n\times n$ matrix, $\det(cA)=c^n\det A$. Also $\det(A^T)=\det A$ and $\det(A^2)=(\det A)^2$.

## Step-by-Step Solution

Since $n=3$ and $\det A=-4$:

```math
\det(2A)=2^3(-4)=-32,\quad\det(A^T)=-4.
```

```math
\det(A^2)=(-4)^2=16,\quad\det(-A)=(-1)^3(-4)=4.
```

## Verification and Consistency Checks

The minus sign in $-A$ reverses the determinant for odd-sized matrices, so its determinant is 4.
