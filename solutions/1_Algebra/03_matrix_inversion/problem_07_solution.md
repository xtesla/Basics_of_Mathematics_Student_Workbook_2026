# Exercise 7 - Inverse of a Product

## Problem Statement

For
```math
A=\begin{pmatrix}1&1\\0&1\end{pmatrix},\qquad B=\begin{pmatrix}2&0\\0&3\end{pmatrix}
```
compute $(AB)^{-1}$ and $B^{-1}A^{-1}$. Check that the results are the same and explain the meaning of the reversed order.

## Theoretical Background and Concepts

The inverse of a product reverses factor order: $(AB)^{-1}=B^{-1}A^{-1}$.

## Step-by-Step Solution

```math
AB=\begin{pmatrix}2&3\\0&3\end{pmatrix},\quad(AB)^{-1}=\begin{pmatrix}\frac12&-\frac12\\0&\frac13\end{pmatrix}.
```

```math
B^{-1}=\begin{pmatrix}\frac12&0\\0&\frac13\end{pmatrix},\quad A^{-1}=\begin{pmatrix}1&-1\\0&1\end{pmatrix}.
```

Their product is the same inverse. The order reverses because the last transformation has to be undone first.

Using the $2\times2$ formula, $\det A=1$, $\det B=6$ and $\det(AB)=6$. The products are

```math
AB=\begin{pmatrix}1(2)+1(0)&1(0)+1(3)\\0(2)+1(0)&0(0)+1(3)\end{pmatrix}=\begin{pmatrix}2&3\\0&3\end{pmatrix}.
```

The inverse formula gives $(AB)^{-1}=\frac16\begin{pmatrix}3&-3\\0&2\end{pmatrix}$. Separately it gives $A^{-1}=\begin{pmatrix}1&-1\\0&1\end{pmatrix}$ and $B^{-1}=\begin{pmatrix}1/2&0\\0&1/3\end{pmatrix}$.

```math
B^{-1}A^{-1}=\begin{pmatrix}\frac12(1)+0(0)&\frac12(-1)+0(1)\\0(1)+\frac13(0)&0(-1)+\frac13(1)\end{pmatrix}=\begin{pmatrix}\frac12&-\frac12\\0&\frac13\end{pmatrix}.
```

The independently found inverses agree entry by entry.

## Verification and Consistency Checks

$(AB)(B^{-1}A^{-1})=I$.
