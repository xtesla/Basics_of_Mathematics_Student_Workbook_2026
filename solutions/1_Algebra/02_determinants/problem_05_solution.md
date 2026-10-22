# Exercise 5 - Row Operations

## Problem Statement

For
```math
A=\begin{pmatrix}1&2&3\\2&1&0\\-1&4&2\end{pmatrix}
```
find $\det A$ by simplifying the matrix with row operations. At each step, indicate whether and how the determinant changes.

## Theoretical Background and Concepts

Adding a multiple of one row to another does not change the determinant. Once triangular, multiply diagonal entries.

## Step-by-Step Solution

Use $R_2\leftarrow R_2-2R_1$ and $R_3\leftarrow R_3+R_1$:

```math
\begin{pmatrix}1&2&3\\0&-3&-6\\0&6&5\end{pmatrix}.
```

Then $R_3\leftarrow R_3+2R_2$:

```math
\begin{pmatrix}1&2&3\\0&-3&-6\\0&0&-7\end{pmatrix}.
```

Thus $\det A=1(-3)(-7)=21$. None of these row replacements changes the determinant.

## Verification and Consistency Checks

Expanding the original matrix along its first row also gives $2-8+27=21$.
