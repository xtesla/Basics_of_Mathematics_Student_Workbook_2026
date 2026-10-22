# Exercise 5 - A 3×3 Matrix

## Problem Statement

Use Gauss–Jordan elimination to find the inverse of
```math
A=\begin{pmatrix}1&1&0\\0&1&1\\1&0&1\end{pmatrix}.
```
Check the result by multiplication.

## Theoretical Background and Concepts

Use row operations to transform $[A\mid I]$ into $[I\mid A^{-1}]$. The same steps must be applied to both sides.

## Step-by-Step Solution

Start with $[A\mid I]$. Use $R_3\leftarrow R_3-R_1$, then $R_3\leftarrow R_3+R_2$, then $R_3\leftarrow\frac12R_3$. Next use $R_2\leftarrow R_2-R_3$, $R_1\leftarrow R_1-R_2$, and finally $R_1\leftarrow R_1-R_3$.

The augmented matrix becomes

```math
\left[\begin{array}{ccc|ccc}1&0&0&\frac12&-\frac12&\frac12\\0&1&0&\frac12&\frac12&-\frac12\\0&0&1&-\frac12&\frac12&\frac12\end{array}\right].
```

So the right block is $A^{-1}$.

## Verification and Consistency Checks

Multiplying the stated inverse by $A$ gives $I_3$.
