# Exercise 9 - Matrix Equation

## Problem Statement

Given
```math
A=\begin{pmatrix}1&2\\0&1\end{pmatrix},\qquad B=\begin{pmatrix}3&1\\2&4\end{pmatrix}.
```
Solve the equation $AX=B$ for $X$. Before calculating, decide on which side of the equation $A^{-1}$ must be used. Then check the result by computing $AX$.

## Theoretical Background and Concepts

For $AX=B$, multiply on the left by $A^{-1}$, giving $X=A^{-1}B$. Order matters.

## Step-by-Step Solution

```math
A^{-1}=\begin{pmatrix}1&-2\\0&1\end{pmatrix}.
```

```math
X=A^{-1}B=\begin{pmatrix}1&-2\\0&1\end{pmatrix}\begin{pmatrix}3&1\\2&4\end{pmatrix}=\begin{pmatrix}-1&-7\\2&4\end{pmatrix}.
```

## Verification and Consistency Checks

$AX=\begin{pmatrix}3&1\\2&4\end{pmatrix}=B$.
