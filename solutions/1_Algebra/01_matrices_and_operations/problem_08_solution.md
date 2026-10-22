# Exercise 8 - Row Operations and Their Reversibility

## Problem Statement

For
```math
A=\begin{pmatrix}1&2&-1\\2&4&1\\-1&1&3\end{pmatrix}
```
perform, in order:
1. $R_2\leftarrow R_2-2R_1$,
2. $R_3\leftarrow R_3+R_1$,
3. interchange $R_2$ and $R_3$.

Write the matrix after each step. Then, for each of the three operations, state an operation that reverses it.

## Theoretical Background and Concepts

A row replacement adds a multiple of one row to another; it can be undone by using the opposite multiple. A row swap can be undone by swapping again.

## Step-by-Step Solution

Start with $A$. After $R_2\leftarrow R_2-2R_1$:

```math
\begin{pmatrix}1&2&-1\\0&0&3\\-1&1&3\end{pmatrix}.
```

After $R_3\leftarrow R_3+R_1$:

```math
\begin{pmatrix}1&2&-1\\0&0&3\\0&3&2\end{pmatrix}.
```

After swapping rows 2 and 3:

```math
\begin{pmatrix}1&2&-1\\0&3&2\\0&0&3\end{pmatrix}.
```

The inverse operations are: swap $R_2,R_3$ again, then $R_3\leftarrow R_3-R_1$, then $R_2\leftarrow R_2+2R_1$.

## Verification and Consistency Checks

Undoing these in reverse order gives the original rows $(1,2,-1)$, $(2,4,1)$ and $(-1,1,3)$.
