# Exercise 3 - When Does the Inverse Not Exist?

## Problem Statement

For
```math
A=\begin{pmatrix}2&4\\1&2\end{pmatrix}
```
explain in two ways why $A^{-1}$ does not exist: using the determinant and using dependence between the rows.

## Theoretical Background and Concepts

An inverse exists only when the determinant is not zero; proportional rows make a determinant zero.

## Step-by-Step Solution

$\det A=2(2)-4(1)=0$. Also the first row $(2,4)$ is twice the second row $(1,2)$. So $A^{-1}$ does not exist.

## Verification and Consistency Checks

The dependent rows mean that $A$ loses information and cannot be undone.
