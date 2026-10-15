# Exercise 2 - Addition and Scalar Multiplication

## Problem Statement

Given the matrices

```math
A=\begin{pmatrix}1&2\\-1&3\end{pmatrix},
\qquad
B=\begin{pmatrix}4&-2\\0&5\end{pmatrix}
```

Calculate $A+B$, $A-B$ and $3A-2B$. Explain why matrix addition is possible only for matrices of the same size.

## Theoretical Background and Concepts

For matrix addition and subtraction, we work with the entries in the same positions. This is why the matrices must have the same number of rows and columns.

Scalar multiplication means multiplying every entry of a matrix by a number. For example, in $3A$ we multiply each entry of $A$ by 3.

## Step-by-Step Solution

Both matrices have 2 rows and 2 columns, so they have the same size ($2\times2$).

**1. Addition**

Add the entries in matching positions:

```math
A+B=\begin{pmatrix}
1+4&2+(-2)\\
-1+0&3+5
\end{pmatrix}
=\begin{pmatrix}5&0\\-1&8\end{pmatrix}.
```

**2. Subtraction**

Subtract the entries of $B$ from the matching entries of $A$:

```math
A-B=\begin{pmatrix}
1-4&2-(-2)\\
-1-0&3-5
\end{pmatrix}
=\begin{pmatrix}-3&4\\-1&-2\end{pmatrix}.
```

**3. Scalar multiplication and subtraction**

First multiply every entry of $A$ by 3 and every entry of $B$ by 2:

```math
3A=\begin{pmatrix}3&6\\-3&9\end{pmatrix},
\qquad
2B=\begin{pmatrix}8&-4\\0&10\end{pmatrix}.
```

Now subtract:

```math
3A-2B=
\begin{pmatrix}3-8&6-(-4)\\-3-0&9-10\end{pmatrix}
=\begin{pmatrix}-5&10\\-3&-1\end{pmatrix}.
```

## Verification and Consistency Checks

We can check the last answer by adding $2B$ back. It should give us $3A$:

```math
\begin{pmatrix}-5&10\\-3&-1\end{pmatrix}
+\begin{pmatrix}8&-4\\0&10\end{pmatrix}
=\begin{pmatrix}3&6\\-3&9\end{pmatrix}=3A.
```

The result matches, so the calculation is consistent. All the resulting matrices are also $2\times2$, as expected.
