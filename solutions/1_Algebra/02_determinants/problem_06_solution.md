# Exercise 6 - Parameter and Invertibility

## Problem Statement

For
```math
A(t)=\begin{pmatrix}t&1\\2&t\end{pmatrix}
```
find all values of $t$ for which the matrix is not invertible. Explain how your answer is related to the determinant being zero.

## Theoretical Background and Concepts

A matrix loses its inverse when its determinant becomes zero.

## Step-by-Step Solution

```math
\det A(t)=t^2-2=0\quad\Rightarrow\quad t=\pm\sqrt 2.
```

So $A(t)$ is not invertible at these two values.

For a $2\times2$ matrix, $\det\begin{pmatrix}a&b\\c&d\end{pmatrix}=ad-bc$. Applying it here:

```math
\det A(t)=t\cdot t-1\cdot2=t^2-2.
```

Set it to zero: $t^2=2$, so $t=\sqrt2$ or $t=-\sqrt2$. Exactly these values make the determinant zero and prevent inversion.

## Verification and Consistency Checks

At $t=\pm\sqrt2$ the determinant is zero; at any other $t$ it is nonzero.
