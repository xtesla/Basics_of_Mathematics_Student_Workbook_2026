# Exercise 14 - A Matrix That Is Its Own Inverse

## Problem Statement

Assume that a square matrix $A$ satisfies
```math
A^2=I.
```
Show that
```math
A^{-1}=A.
```
Then give an example of a $2\times2$ matrix different from $I$ and $-I$ that satisfies this condition, and verify it by multiplication.

## Theoretical Background and Concepts

If $A^2=I$, then $A$ is its own inverse because multiplication by $A$ gives the identity.

## Step-by-Step Solution

Since $AA=I$, the definition of inverse gives $A^{-1}=A$. For example,

```math
A=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad A^2=\begin{pmatrix}1&0\\0&1\end{pmatrix}.
```

Expanding all four entries in the example gives

```math
A^2=\begin{pmatrix}0(0)+1(1)&0(1)+1(0)\\1(0)+0(1)&1(1)+0(0)\end{pmatrix}=\begin{pmatrix}1&0\\0&1\end{pmatrix}.
```

Thus both diagonal entries equal 1 and both off-diagonal entries equal 0.

## Verification and Consistency Checks

This matrix is neither $I$ nor $-I$, and squaring it gives $I$.
