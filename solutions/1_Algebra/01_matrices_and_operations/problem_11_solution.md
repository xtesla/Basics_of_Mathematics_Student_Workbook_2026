# Exercise 11 - When Do Matrices Commute?

## Problem Statement

Given
```math
A=\begin{pmatrix}1&1\\0&1\end{pmatrix},\qquad B=\begin{pmatrix}a&b\\c&d\end{pmatrix}.
```
Find the conditions on $a,b,c,d$ under which $AB=BA$. Describe the general form of all such matrices $B$.

## Theoretical Background and Concepts

Two matrices commute if their products are equal in both orders. Equate corresponding entries of $AB$ and $BA$.

## Step-by-Step Solution

Compute

```math
AB=\begin{pmatrix}a+c&b+d\\c&d\end{pmatrix},\qquad BA=\begin{pmatrix}a&a+b\\c&c+d\end{pmatrix}.
```

Comparing entries gives $c=0$ and $d=a$; $b$ is arbitrary.

```math
B=\begin{pmatrix}a&b\\0&a\end{pmatrix}.
```

## Verification and Consistency Checks

For this form, both products equal $\begin{pmatrix}a&a+b\\0&a\end{pmatrix}$.
