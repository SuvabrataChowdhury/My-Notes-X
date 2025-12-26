# Unit Circle Definitions of Trigonometric Functions

To treat the trigonometric ratios as functions they should be able to take in any real value of $\theta$ so that they are to be applied in the context of rotation not just triangles. Therefore, it is desired that the functions' domain is $\theta \in \mathbb{R}$ not just $\theta \in \left[0, \frac{\pi}{2} \right]$.

We do the following construction,

An unit circle is drawn centered at $O\left(0,0\right)$ on the $XY$ cartesian plane. We choose a random point $P$ on the circumference of the circle. $PO$ are joined by a line and it makes $\theta$ angle with respect to $X$-axis anti-clockwise. $PM$ is perpendicular to $X$-axis.

![Circle Triangle](./images/circle_triangle_sin_cos.drawio.svg)

## $\sin{\theta}$ and $\cos{\theta}$ definitions

We **define**,

$$
\begin{align}
    &\boxed{\sin \theta = PM} \label{eq:sin_def} \\\\
    &\boxed{\cos \theta = OM} \label{eq:cos_def}
\end{align}    
$$

i.e, the **perpendicular** is **defined** to be $\sin \theta$ and **base** is **defined** as $\cos \theta$.

We can also **define**,

$$
\begin{align}
    \tan \theta &= \frac{\sin \theta }{\cos \theta } \label{eq:tan_trig_ratio} \\\\
    \csc \theta &= \frac{1}{\sin \theta } \label{eq:csc_trig_ratio} \\\\
    \sec \theta &= \frac{1}{\cos \theta } \label{eq:sec_trig_ratio} \\\\
    \cot \theta &= \frac{1}{\tan \theta } = \frac{\cos \theta}{\sin \theta} \label{eq:cot_trig_ratio}
\end{align}    
$$


> **Note:** From the triangle definition also same definition can be obtained as $\sin \theta = \frac{PM}{PO} = \frac{PM}{1} = PM$. Same can be derived for $\cos \theta$.

> **Note:** The major difference is that in this unit circle definition **the angle is measured with respect to the positive $X$-axis anti-clockwise** as compared to measuring the angle between adjacent and hypotenuse in triangle definition. This enables the trigonometric functions to take in any values of $\theta$.

Just like $\eqref{eq:sin_def}$ and $\eqref{eq:cos_def}$, the other trigonometric functions can also be placed on the circle and visualized geometrically.

## $\tan{\theta}$ and $\sec{\theta}$ visualization

We take the same diagram of unit circle and add some more constructions. A perpendicular on $XX^\prime$ is drawn at $N$ and $OP$ is extended until it hits the perpendicular at $Q$.

![Tan Sec Circle](./images/circle_triangle_tan_sec.drawio.svg)
> **Note:** Only the first quadrant is taken due to spacing and clarity of the diagram. It can be proven same for other quadrants.

In this new construction we have two unknown lengths which are, $OQ$ and $QN$.

From the above construction we see that,

$$
\begin{align*}
    &\angle POM = \angle QON \\\\
    &\angle PMO = \angle QNO = \frac{\pi}{2} \\\\
    &\angle OPM = \angle OQN \\\\
    &\boxed{\therefore \triangle OMP \cong \triangle ONQ}
\end{align*}
$$

As the triangles are similar and from the diagram also, it can be derived that $\triangle ONQ$ is a scaled up variant of $\triangle OMP$.

$$ 
\begin{align*}
    \therefore \text{The Scalar Factor} \quad s = \frac{ON}{OM} = \frac{1}{\cos \theta} \\\\
\end{align*}
$$

$$ 
\begin{align*}
    \therefore QN = s \cdot PM &= \frac{1}{\cos \theta} \cdot \sin \theta \quad \text{[From } \eqref{eq:sin_def} \text{ and } \eqref{eq:cos_def} \text{]}\\\\
    &\implies \boxed{QN = \tan \theta}
\end{align*}
$$

Now from pythagoras we find that,

$$
\begin{align*}
    &ON^2 + QN^2 = OQ^2 \\\\
    &\implies 1 + \tan^2 \theta = OQ^2 \\\\
    &\implies \sec^2 \theta = OQ^2 \\\\
    &\implies \boxed{OQ = \sec \theta} \\\\
\end{align*}
$$

## $\csc{\theta}$ and $\cot{\theta}$ visualization

From L we draw a tangent parallel to $XX^\prime$. $OQ$ is extended until it hits that tangent and we name the intersection point $R$. Also one more perpendicular is drawn from $R$ onto $XX^\prime$ and we name the intersection point as $S$. We get the following figure,

![Csc Cot Circle](./images/circle_triangle_csc_cot.drawio.svg)

It is evident that $RS = 1$.

The unknown components of this figure are, $OR$ and $OS$.

From the construction we see that,

$$ 
\begin{align*}
    &\angle POM = \angle ROS \\\\
    &\angle OPM = \angle ORS \\\\
    &\angle PMO = \angle RSO = \frac{\pi}{2} \\\\
    &\boxed{\therefore \triangle OMP \cong \triangle OSR}
\end{align*}
$$

As the triangles are similar and from the diagram also, it can be derived that $\triangle OSR$ is a scaled up variant of $\triangle OMP$.

$$ 
\begin{align*}
    \therefore \text{The Scalar Factor} \quad s_2 = \frac{RS}{PM} = \frac{1}{\sin \theta} \\\\
\end{align*}
$$

$$ 
\begin{align*}
    \therefore OR = s_2 \cdot OP &= \frac{1}{\sin \theta} \cdot 1 \quad \text{[From } \eqref{eq:sin_def} \text{ and } \eqref{eq:cos_def} \text{]}\\\\
    &\implies \boxed{OR = \csc \theta}
\end{align*}
$$

Now from pythagoras we find that,

$$
\begin{align*}
    &OS^2 + RS^2 = OR^2 \\\\
    &\implies OS^2 + 1 = \csc^2 \theta \\\\
    &\implies OS^2 = \csc^2 \theta - 1 \\\\
    &\implies OS^2 = \cot^2 \theta \\\\
    &\implies \boxed{OS = \cot \theta} \\\\
\end{align*}
$$

## All functions on Unit Circle

![All Trig functions on Unit Circle](https://upload.wikimedia.org/wikipedia/commons/e/ec/TrigFunctionDiagram.svg)