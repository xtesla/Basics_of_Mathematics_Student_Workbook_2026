# Exercise 1 - Matrix Size and Entries

## Problem Statement

Given the matrices

```math
A=\begin{pmatrix}2&-1&3\\0&4&5\end{pmatrix},
\qquad
B=\begin{pmatrix}1&0\\-2&3\\4&1\end{pmatrix}.
```

1. State the sizes of matrices $A$ and $B$.
2. Find $a_{12}$, $a_{23}$, $b_{21}$ and $b_{32}$.
3. Write the second row of $A$ and the first column of $B$ as vectors.

## Theoretical Background and Concepts

A matrix is a table of numbers. Rows go horizontally and columns go vertically.

The size of a matrix is **number of rows $\times$ number of columns**.

In $a_{ij}$, $i$ is the row number and $j$ is the column number. For example, $a_{12}$ means row 1, column 2 of matrix $A$.

A row vector is written horizontally, while a column vector is written vertically.

## Step-by-Step Solution

**1. Matrix sizes**

$A$ has two horizontal rows, and each row contains three numbers. So its size is $2\times3$.

$B$ has three rows, with two numbers in each row. So its size is $3\times2$.

**2. Matrix entries**

I use the first index for the row and the second for the column:

- $a_{12}=-1$ (row 1, column 2 of $A$).
- $a_{23}=5$ (row 2, column 3 of $A$).
- $b_{21}=-2$ (row 2, column 1 of $B$).
- $b_{32}=1$ (row 3, column 2 of $B$).

**3. Row and column vectors**

The second row of $A$ is $0,4,5$, so the row vector is

```math
\begin{pmatrix}0&4&5\end{pmatrix}.
```

The first column of $B$ is $1,-2,4$, so the column vector is

```math
\begin{pmatrix}1\\-2\\4\end{pmatrix}.
```

## Verification and Consistency Checks

I checked the positions against the original matrices. In $A$, row 2 is $(0,4,5)$, so $a_{23}=5$. In $B$, row 3 is $(4,1)$, so $b_{32}=1$.

The row vector has three entries, the same as the number of columns in $A$. The column vector has three entries, the same as the number of rows in $B$. Everything matches.
