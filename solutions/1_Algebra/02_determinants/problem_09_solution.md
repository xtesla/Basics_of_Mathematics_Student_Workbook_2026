# Exercise 9 - Area and the Determinant

## Problem Statement

The vectors
```math
u=\begin{pmatrix}3\\1\end{pmatrix},\qquad v=\begin{pmatrix}1\\4\end{pmatrix}
```
span a parallelogram. Compute its area using a determinant. Then reverse the order of the vectors and explain what changes in the determinant and what does not change in the area.

## Theoretical Background and Concepts

The absolute value of the determinant of the matrix whose columns are two vectors gives the parallelogram area.

## Step-by-Step Solution

```math
\det\begin{pmatrix}3&1\\1&4\end{pmatrix}=12-1=11,\qquad\text{area}=|11|=11.
```

Reversing the columns gives determinant -11, but the area stays 11.

## Verification and Consistency Checks

Area is nonnegative, so taking the absolute value removes the sign difference.
