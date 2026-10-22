# Exercise 8 - Determinant of a Product

## Problem Statement

Let $A,B$ be square matrices such that $\det A=3$ and $\det B=-5$. Compute $\det(AB)$, $\det(BA)$ and, if it exists, $\det(A^{-1}B)$. Explain why the first two results are equal even though usually $AB\neq BA$.

## Theoretical Background and Concepts

The determinant of a product is the product of the determinants; an inverse has reciprocal determinant.

## Step-by-Step Solution

```math
\det(AB)=3(-5)=-15,\qquad\det(BA)=(-5)3=-15.
```

$A$ is invertible as $\det A=3\ne0$, so

```math
\det(A^{-1}B)=\frac1{3}(-5)=-\frac53.
```

The products may differ as matrices, but their determinants are equal.

## Verification and Consistency Checks

Both orders use the same two determinant factors, and multiplication of numbers is commutative.
