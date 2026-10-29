# Exercise 4 - Matrix Multiplication and Noncommutativity

## Problem Statement

For
```math
A=\begin{pmatrix}1&2\\0&1\end{pmatrix},\qquad B=\begin{pmatrix}2&0\\3&1\end{pmatrix}
```
compute $AB$ and $BA$. Is $AB=BA$? Use this example to explain what noncommutativity of matrix multiplication means.

## Theoretical Background and Concepts

Matrix multiplication uses rows of the first matrix and columns of the second. Changing the order may change the result.

## Step-by-Step Solution

Multiply row by column:

```math
AB=\begin{pmatrix}1(2)+2(3)&1(0)+2(1)\\0(2)+1(3)&0(0)+1(1)\end{pmatrix}=\begin{pmatrix}8&2\\3&1\end{pmatrix}.
```

```math
BA=\begin{pmatrix}2&4\\3&7\end{pmatrix}.
```

Since $AB\ne BA$, matrix multiplication is not generally commutative.

For $BA$ I also calculate every entry by row and column:

```math
BA=\begin{pmatrix}
2(1)+0(0)&2(2)+0(1)\\
3(1)+1(0)&3(2)+1(1)
\end{pmatrix}=\begin{pmatrix}2&4\\3&7\end{pmatrix}.
```

The two products have different top-left entries, so their order matters.

## Verification and Consistency Checks

The top-left entries are 8 and 2, already showing that $AB$ and $BA$ differ.
