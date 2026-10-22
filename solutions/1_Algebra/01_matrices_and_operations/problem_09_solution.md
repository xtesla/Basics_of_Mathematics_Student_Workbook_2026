# Exercise 9 - Composing Transformations

## Problem Statement

Let
```math
S=\begin{pmatrix}2&0\\0&1\end{pmatrix},\qquad R=\begin{pmatrix}0&-1\\1&0\end{pmatrix}.
```
The matrix $S$ describes nonuniform scaling, while $R$ describes a $90^\circ$ counterclockwise rotation.
For
```math
x=\begin{pmatrix}1\\2\end{pmatrix}
```
compute $RSx$ and $SRx$. Compare the results and explain geometrically why the order of these transformations matters.

## Theoretical Background and Concepts

For $RSx$, the rightmost operation happens first: scale, then rotate. For $SRx$, rotate first, then scale.

## Step-by-Step Solution

Scale first:

```math
Sx=\begin{pmatrix}2\\2\end{pmatrix},\quad RSx=R(Sx)=\begin{pmatrix}-2\\2\end{pmatrix}.
```

Rotate first:

```math
Rx=\begin{pmatrix}-2\\1\end{pmatrix},\quad SRx=S(Rx)=\begin{pmatrix}-4\\1\end{pmatrix}.
```

The order matters because $S$ stretches only the horizontal direction.

## Verification and Consistency Checks

The resulting vectors $(-2,2)^T$ and $(-4,1)^T$ are different.
