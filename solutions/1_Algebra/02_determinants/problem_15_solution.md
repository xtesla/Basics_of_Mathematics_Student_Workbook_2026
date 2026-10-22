# Exercise 15 - Combining Determinant Properties

## Problem Statement

Let $A$ and $B$ be invertible $2\times2$ matrices with
```math
\det A=-2,\qquad \det B=3.
```
Without finding the entries of the matrices, compute
```math
\det\left(B^{-1}A^TB\right).
```
State the determinant properties you use in order and explain why the factors involving $B$ eventually cancel.

## Theoretical Background and Concepts

Use $\det(XY)=\det X\det Y$, $\det(A^T)=\det A$, and $\det(B^{-1})=1/\det B$.

## Step-by-Step Solution

```math
\det(B^{-1}A^TB)=\frac1{\det B}\det(A^T)\det B=\frac13(-2)(3)=-2.
```

## Verification and Consistency Checks

The factors $1/3$ and $3$ cancel, leaving $\det A=-2$.
