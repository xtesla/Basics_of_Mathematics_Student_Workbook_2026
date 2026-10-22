# Exercise 11 - Parameter and Invertibility

## Problem Statement

For
```math
A(t)=\begin{pmatrix}1&t\\t&1\end{pmatrix}
```
find all $t$ for which the matrix is invertible, and then give a formula for $A(t)^{-1}$. Explain what happens to this formula at the excluded values.

## Theoretical Background and Concepts

For a $2\times2$ matrix, invertibility requires a nonzero determinant.

## Step-by-Step Solution

```math
\det A(t)=1-t^2,\qquad t\ne\pm1.
```

For all other $t$:

```math
A(t)^{-1}=\frac1{1-t^2}\begin{pmatrix}1&-t\\-t&1\end{pmatrix}.
```

## Verification and Consistency Checks

At $t=\pm1$, the denominator becomes zero and the rows are dependent.
