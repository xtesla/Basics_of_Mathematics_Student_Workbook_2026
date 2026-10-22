# Exercise 10 - Inverse of a Diagonal Matrix

## Problem Statement

Given
```math
D=\begin{pmatrix}2&0&0\\0&-3&0\\0&0&5\end{pmatrix},\qquad E=\begin{pmatrix}2&0&0\\0&0&0\\0&0&5\end{pmatrix}.
```
Without using Gauss–Jordan elimination, decide which matrix is invertible. For the invertible matrix, give the inverse and check the result by multiplication.

## Theoretical Background and Concepts

A diagonal matrix is invertible only when every diagonal entry is nonzero. Then invert each diagonal entry.

## Step-by-Step Solution

```math
D^{-1}=\begin{pmatrix}\frac12&0&0\\0&-\frac13&0\\0&0&\frac15\end{pmatrix}.
```

$E$ has a zero on its diagonal, so it has no inverse.

## Verification and Consistency Checks

$DD^{-1}=I_3$ because each diagonal product is 1. $\det E=0$.
