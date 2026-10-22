# Exercise 12 - Finding Inverses Without Starting from Scratch

## Problem Statement

It is known that
```math
A^{-1}=\begin{pmatrix}2&-1\\-3&2\end{pmatrix}.
```
Without finding $A$, compute $(3A)^{-1}$, $(A^T)^{-1}$, and $(A^2)^{-1}$. Justify each result using the appropriate property.

## Theoretical Background and Concepts

$(cA)^{-1}=c^{-1}A^{-1}$, $(A^T)^{-1}=(A^{-1})^T$, and $(A^2)^{-1}=(A^{-1})^2$.

## Step-by-Step Solution

```math
(3A)^{-1}=\begin{pmatrix}2/3&-1/3\\-1&2/3\end{pmatrix},\quad(A^T)^{-1}=\begin{pmatrix}2&-3\\-1&2\end{pmatrix}.
```

```math
(A^2)^{-1}=\begin{pmatrix}2&-1\\-3&2\end{pmatrix}^2=\begin{pmatrix}7&-4\\-12&7\end{pmatrix}.
```

## Verification and Consistency Checks

These formulas undo scaling, transposition, and multiplication without finding $A$ itself.
