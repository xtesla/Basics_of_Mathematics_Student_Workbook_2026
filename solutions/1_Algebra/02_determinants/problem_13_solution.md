# Exercise 13 - Determinant by Elimination

## Problem Statement

Compute the determinant
```math
A=\begin{pmatrix}1&2&3\\2&5&7\\1&0&2\end{pmatrix}
```
using elimination. Record the effect of every row operation used on the value of the determinant.

## Theoretical Background and Concepts

Row replacement keeps the determinant unchanged; elimination converts the matrix into triangular form.

## Step-by-Step Solution

Use $R_2\leftarrow R_2-2R_1$ and $R_3\leftarrow R_3-R_1$:

```math
\begin{pmatrix}1&2&3\\0&1&1\\0&-2&-1\end{pmatrix}.
```

Then $R_3\leftarrow R_3+2R_2$:

```math
\begin{pmatrix}1&2&3\\0&1&1\\0&0&1\end{pmatrix}.
```

All three operations preserve the determinant, so it is $1$.

The final matrix is upper triangular. Its determinant is the diagonal product $1\cdot1\cdot1=1$. Since every row replacement used preserves the determinant, the determinant of the starting matrix is also 1.

## Verification and Consistency Checks

Direct expansion of the original matrix also gives $10-2(4-7)+3(0-5)=1$, agreeing with elimination.
