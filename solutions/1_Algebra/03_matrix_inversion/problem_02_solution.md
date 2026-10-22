# Exercise 2 - Formula for a 2×2 Matrix

## Problem Statement

Find the inverse of
```math
A=\begin{pmatrix}3&2\\5&4\end{pmatrix}
```
using the formula for a $2\times2$ matrix. At the end, check the result by computing one product with $A$.

## Theoretical Background and Concepts

For a $2\times2$ matrix $\begin{pmatrix}a&b\\c&d\end{pmatrix}$ with nonzero determinant, the inverse is $\frac1{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$.

## Step-by-Step Solution

The determinant is $3(4)-2(5)=2$, so

```math
A^{-1}=\frac12\begin{pmatrix}4&-2\\-5&3\end{pmatrix}.
```

## Verification and Consistency Checks

Multiplication gives $AA^{-1}=\begin{pmatrix}1&0\\0&1\end{pmatrix}$.
