# Exercise 1 - Matrix Size and Entries

## Problem

Given

```math
A=\begin{pmatrix}2&-1&3\\0&4&5\end{pmatrix},
\qquad
B=\begin{pmatrix}1&0\\-2&3\\4&1\end{pmatrix}.
```

Find the size of each matrix, the entries $a_{12}$, $a_{23}$, $b_{21}$ and $b_{32}$, the second row of $A$, and the first column of $B$.

## How it works

The size of a matrix is rows $\times$ columns. In $a_{ij}$, the first number tells us the row and the second tells us the column.

## Solution

**1. Matrix sizes**

$A$ has 2 rows and 3 columns, so its size is $2\times3$.

$B$ has 3 rows and 2 columns, so its size is $3\times2$.

**2. Matrix entries**

```math
a_{12}=-1,\quad a_{23}=5,\quad b_{21}=-2,\quad b_{32}=1.
```

**3. Row and column vectors**

The second row of $A$ is

```math
\begin{pmatrix}0&4&5\end{pmatrix}.
```

The first column of $B$ is

```math
\begin{pmatrix}1\\-2\\4\end{pmatrix}.
```

## Check

For example, $a_{23}$ means row 2, column 3 in $A$, which is 5. Also, $b_{32}$ means row 3, column 2 in $B$, which is 1. The row and column vectors have three entries, as expected.
