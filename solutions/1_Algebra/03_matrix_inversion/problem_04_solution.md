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

The row operations can be viewed as multiplication on the left by an invertible matrix $E$. Applying them to $[A\mid I]$ changes it to $[EA\mid EI]$. When the left side becomes $EA=I$, we get $E=A^{-1}$. Therefore the right block is $EI=A^{-1}$. This explains why the Gauss–Jordan method works.

## Verification and Consistency Checks

$AA^{-1}=I$; for example the top-left entry is $1(-5)+2(3)=1$.
