# Exercise 11 - Shortening the Calculation with Row Operations

## Problem Statement

Compute
```math
\det\begin{pmatrix}1&2&3\\1&3&4\\1&4&6\end{pmatrix}
```
by first performing row operations that create as many zeros as possible. State which operations do not change the determinant.

## Theoretical Background and Concepts

Adding a multiple of one row to another keeps the determinant unchanged.

## Step-by-Step Solution

Use $R_2\leftarrow R_2-R_1$ and $R_3\leftarrow R_3-R_1$:

```math
\begin{pmatrix}1&2&3\\0&1&1\\0&2&3\end{pmatrix}.
```

Then $R_3\leftarrow R_3-2R_2$:

```math
\begin{pmatrix}1&2&3\\0&1&1\\0&0&1\end{pmatrix}.
```

All operations preserve the determinant, so $\det A=1(1)(1)=1$.

The last matrix is upper triangular, so its determinant is the product of diagonal entries: $1\cdot1\cdot1=1$. Since the row replacements do not change the determinant, the original determinant is also 1.

## Verification and Consistency Checks

Direct expansion gives $2-4+3=1$.
