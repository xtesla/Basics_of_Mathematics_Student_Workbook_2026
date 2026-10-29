# Exercise 12 - A Parameter Revealed by a Row Operation

## Problem Statement

For
```math
A(t)=\begin{pmatrix}1&2&3\\2&4&t\\0&1&1\end{pmatrix}
```
find the values of $t$ for which the matrix is not invertible.

Before computing the determinant, perform the operation
```math
R_2\leftarrow R_2-2R_1
```
and use the resulting structure. At the end, explain what special thing happens to the rows for the value of the parameter you found.

## Theoretical Background and Concepts

A row replacement can reveal when rows are dependent. The determinant is zero exactly when the matrix is not invertible.

## Step-by-Step Solution

After $R_2\leftarrow R_2-2R_1$:

```math
\begin{pmatrix}1&2&3\\0&0&t-6\\0&1&1\end{pmatrix}.
```

Expanding along row 2 gives $\det A=-(t-6)=6-t$. Thus $t=6$ is the only noninvertible value.

The operation $R_2\leftarrow R_2-2R_1$ adds a multiple of another row, so it does not change the determinant. Expand the resulting determinant along row 2, where only the last entry is nonzero:

```math
\det A=(t-6)(-1)^{2+3}\det\begin{pmatrix}1&2\\0&1\end{pmatrix}=-(t-6)(1)=6-t.
```

The minus sign comes from the cofactor sign at position $(2,3)$.

## Verification and Consistency Checks

At $t=6$, row 2 of the original matrix equals twice row 1, so the determinant must vanish.
