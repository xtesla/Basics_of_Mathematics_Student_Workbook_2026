# Exercise 14 - Rotation Matrices

## Problem Statement

The matrix for a rotation through an angle $\theta$ is
```math
R(\theta)=\begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}.
```
Compute $R(\alpha)R(\beta)$ and, using the angle-sum formulas for sine and cosine, show that
```math
R(\alpha)R(\beta)=R(\alpha+\beta).
```
Explain the result geometrically.

## Theoretical Background and Concepts

Rotations compose by adding their angles. Use the sine and cosine addition formulas for a direct check.

## Step-by-Step Solution

Write $c_\alpha=\cos\alpha$ and $s_\alpha=\sin\alpha$. Multiplication gives

```math
R(\alpha)R(\beta)=\begin{pmatrix}
c_\alpha c_\beta-s_\alpha s_\beta&-(c_\alpha s_\beta+s_\alpha c_\beta)\\
s_\alpha c_\beta+c_\alpha s_\beta&c_\alpha c_\beta-s_\alpha s_\beta
\end{pmatrix}.
```

The angle-sum identities turn this into

```math
\begin{pmatrix}\cos(\alpha+\beta)&-\sin(\alpha+\beta)\\\sin(\alpha+\beta)&\cos(\alpha+\beta)\end{pmatrix}=R(\alpha+\beta).
```

Geometrically, rotating by $\beta$ and then by $\alpha$ gives a total rotation of $\alpha+\beta$.

## Verification and Consistency Checks

If $\alpha=\beta=90^\circ$, the product gives $R(180^\circ)=-I$, as expected.
