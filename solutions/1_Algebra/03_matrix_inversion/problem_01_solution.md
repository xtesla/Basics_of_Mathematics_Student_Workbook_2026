# Exercise 1 - Definition of the Inverse

## Problem Statement

For
```math
A=\begin{pmatrix}2&1\\1&1\end{pmatrix},\qquad B=\begin{pmatrix}1&-1\\-1&2\end{pmatrix}
```
check, without using a formula, whether $B=A^{-1}$. Compute $AB$ and $BA$ and relate the result to the definition of the inverse.

## Theoretical Background and Concepts

$B=A^{-1}$ exactly when both $AB$ and $BA$ equal the identity matrix.

## Step-by-Step Solution

```math
AB=\begin{pmatrix}2&1\\1&1\end{pmatrix}\begin{pmatrix}1&-1\\-1&2\end{pmatrix}=\begin{pmatrix}1&0\\0&1\end{pmatrix}.
```

```math
BA=\begin{pmatrix}1&0\\0&1\end{pmatrix}.
```

Therefore $B=A^{-1}$.

## Verification and Consistency Checks

Both multiplication orders give the $2\times2$ identity.
