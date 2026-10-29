# Exercise 13 - Undoing a Composite Transformation

## Problem Statement

The matrices
```math
S=\begin{pmatrix}2&0\\0&1\end{pmatrix},\qquad H=\begin{pmatrix}1&1\\0&1\end{pmatrix}
```
describe nonuniform scaling and shear. For $T=HS$, find $T^{-1}$ in two ways:

1. first compute $T$, then its inverse,
2. use $(HS)^{-1}=S^{-1}H^{-1}$.

Compare the results. Additionally compute $H^{-1}S^{-1}$ and verify that the incorrect order gives a different matrix. Explain the rule: “when undoing a composition of operations, we undo them from the end.”

## Theoretical Background and Concepts

To undo a composition $HS$, first undo $H$, then undo $S$, so the inverse is $S^{-1}H^{-1}$.

## Step-by-Step Solution

```math
T=HS=\begin{pmatrix}2&1\\0&1\end{pmatrix},\qquad T^{-1}=\begin{pmatrix}\frac12&-\frac12\\0&1\end{pmatrix}.
```

```math
S^{-1}H^{-1}=\begin{pmatrix}\frac12&0\\0&1\end{pmatrix}\begin{pmatrix}1&-1\\0&1\end{pmatrix}=\begin{pmatrix}\frac12&-\frac12\\0&1\end{pmatrix}.
```

But $H^{-1}S^{-1}=\begin{pmatrix}1/2&-1\\0&1\end{pmatrix}$, which is different.

First, $HS$ uses these dot products:

```math
HS=\begin{pmatrix}1(2)+1(0)&1(0)+1(1)\\0(2)+1(0)&0(0)+1(1)\end{pmatrix}=\begin{pmatrix}2&1\\0&1\end{pmatrix}.
```

Here $\det T=2$, so the $2\times2$ inverse formula gives $T^{-1}=\frac12\begin{pmatrix}1&-1\\0&2\end{pmatrix}$. Separately,

```math
S^{-1}H^{-1}=\begin{pmatrix}\frac12(1)+0(0)&\frac12(-1)+0(1)\\0(1)+1(0)&0(-1)+1(1)\end{pmatrix}=\begin{pmatrix}\frac12&-\frac12\\0&1\end{pmatrix}.
```

But the wrong order gives

```math
H^{-1}S^{-1}=\begin{pmatrix}1(\frac12)+(-1)(0)&1(0)+(-1)(1)\\0(\frac12)+1(0)&0(0)+1(1)\end{pmatrix}=\begin{pmatrix}\frac12&-1\\0&1\end{pmatrix}.
```

The correct two methods agree; the upper-right entry in the wrong order is $-1$ instead of $-1/2$.

## Verification and Consistency Checks

$TT^{-1}=I$, but the wrong-order candidate does not undo $T$.
