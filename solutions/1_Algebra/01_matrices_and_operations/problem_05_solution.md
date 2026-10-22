# Exercise 5 - Matrix Times Vector

## Problem Statement

Let
```math
A=\begin{pmatrix}2&-1\\1&3\end{pmatrix},\qquad x=\begin{pmatrix}4\\2\end{pmatrix}.
```
Compute $Ax$. Then express $Ax$ as a linear combination of the columns of $A$, with coefficients coming from the vector $x$.

## Theoretical Background and Concepts

Multiplication by a column vector takes the dot product of each matrix row with the vector. The result can also be written as a combination of the columns.

## Step-by-Step Solution

```math
Ax=\begin{pmatrix}2(4)+(-1)(2)\\1(4)+3(2)\end{pmatrix}=\begin{pmatrix}6\\10\end{pmatrix}.
```

Using the columns:

```math
4\begin{pmatrix}2\\1\end{pmatrix}+2\begin{pmatrix}-1\\3\end{pmatrix}=\begin{pmatrix}8-2\\4+6\end{pmatrix}=\begin{pmatrix}6\\10\end{pmatrix}.
```

## Verification and Consistency Checks

Both ways give the same vector $(6,10)^T$.
