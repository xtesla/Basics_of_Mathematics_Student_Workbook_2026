# Exercise 8 - Inverse of a Transformation

## Problem Statement

The matrix
```math
S=\begin{pmatrix}2&0\\0&\frac12\end{pmatrix}
```
describes a scaling of the plane. Find $S^{-1}$ and explain geometrically what the inverse transformation does. Check the action of the pair $S,S^{-1}$ on one simple vector.

## Theoretical Background and Concepts

A scaling matrix with nonzero diagonal entries is inverted by taking reciprocals of those entries.

## Step-by-Step Solution

```math
S^{-1}=\begin{pmatrix}\frac12&0\\0&2\end{pmatrix}.
```

It halves the horizontal coordinate and doubles the vertical coordinate, undoing the original scaling.

## Verification and Consistency Checks

For $v=(2,4)^T$, $Sv=(4,2)^T$ and $S^{-1}(Sv)=(2,4)^T$.
