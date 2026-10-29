# Exercise 6 - Transpose

## Problem Statement

For
```math
A=\begin{pmatrix}1&2&3\\4&5&6\end{pmatrix},\qquad B=\begin{pmatrix}1&0\\2&1\\-1&3\end{pmatrix}
```
compute $A^T$, $B^T$, and $AB$. Then verify in this example that
```math
(AB)^T=B^TA^T.
```

## Theoretical Background and Concepts

A transpose switches rows and columns. Matrix products can be transposed by reversing the order of the factors.

## Step-by-Step Solution

The transposes are

```math
A^T=\begin{pmatrix}1&4\\2&5\\3&6\end{pmatrix},\quad B^T=\begin{pmatrix}1&2&-1\\0&1&3\end{pmatrix}.
```

Multiply the original matrices:

```math
AB=\begin{pmatrix}2&11\\8&23\end{pmatrix},\quad (AB)^T=\begin{pmatrix}2&8\\11&23\end{pmatrix}.
```

Multiply in reversed order:

```math
B^TA^T=\begin{pmatrix}2&8\\11&23\end{pmatrix}.
```

Here are the actual row-by-column calculations for the product:

```math
AB=\begin{pmatrix}
1(1)+2(2)+3(-1)&1(0)+2(1)+3(3)\\
4(1)+5(2)+6(-1)&4(0)+5(1)+6(3)
\end{pmatrix}=\begin{pmatrix}2&11\\8&23\end{pmatrix}.
```

For the reversed product of the transposes:

```math
B^TA^T=\begin{pmatrix}
1(1)+2(2)-1(3)&1(4)+2(5)-1(6)\\
0(1)+1(2)+3(3)&0(4)+1(5)+3(6)
\end{pmatrix}=\begin{pmatrix}2&8\\11&23\end{pmatrix}.
```

This is exactly $(AB)^T$, since transposing $AB$ switches its rows and columns.

## Verification and Consistency Checks

Both $(AB)^T$ and $B^TA^T$ are the same $2\times2$ matrix.
