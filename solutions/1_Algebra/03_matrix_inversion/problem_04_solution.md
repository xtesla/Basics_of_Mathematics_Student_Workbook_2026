# Exercise 4 - Gauss–Jordan

## Problem Statement

Find $A^{-1}$ using the Gauss–Jordan method for
```math
A=\begin{pmatrix}1&2\\3&5\end{pmatrix}.
```
Show the augmented matrix $[A\mid I]$ after successive operations and explain why obtaining $I$ on the left gives the inverse on the right.

## Theoretical Background and Concepts

Gauss–Jordan elimination applies the same row operations to $[A\mid I]$. When the left side becomes $I$, the right side is the inverse.

## Step-by-Step Solution

```math
\left[\begin{array}{cc|cc}1&2&1&0\\3&5&0&1\end{array}\right]\xrightarrow{R_2-3R_1}\left[\begin{array}{cc|cc}1&2&1&0\\0&-1&-3&1\end{array}\right]
```

```math
\xrightarrow{R_2\gets-R_2}\left[\begin{array}{cc|cc}1&2&1&0\\0&1&3&-1\end{array}\right]\xrightarrow{R_1\gets R_1-2R_2}\left[\begin{array}{cc|cc}1&0&-5&2\\0&1&3&-1\end{array}\right].
```

Hence $A^{-1}=\begin{pmatrix}-5&2\\3&-1\end{pmatrix}$.

## Verification and Consistency Checks

$AA^{-1}=I$; for example the top-left entry is $1(-5)+2(3)=1$.
