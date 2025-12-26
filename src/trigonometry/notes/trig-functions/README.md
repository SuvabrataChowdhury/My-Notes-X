# Trigonometric Functions

## Triangle Definitions
Given a right-angled triangle $\triangle ABC$, we label it as follows,
![Right Triangle](./images/right-triangle.drawio.svg)


In $\triangle ABC$ we have vertices $A$, $B$, $C$ and sides as $a$, $b$, $c$. The angle opposite to the right angle i.e, **opposite of  $\angle ACB$** is denoted as $\theta $.
> **Note:** It's a generic convention to denote vertices of the triangle with capital letters and the sides with small letters.

Each of the edges respective to the right angle are referred with several names.
|Edge|Common referred terms|
|---|---|
|$a$|Height, Opposite, Perpendicular|
|$b$|Base, Adjacent|
|$c$|Hypotenuse|

With $3$ sides we **_define_** the following $6$ ratios,

|Ratio Name|Ratio|
|---|---:|
|$\sin{\theta}$|$\frac{Opposite}{Hypotenuse} = \frac{a}{c}$|
|$\cos{\theta}$|$\frac{Adjacent}{Hypotenuse} = \frac{b}{c}$|
|$\tan{\theta}$|$\frac{Opposite}{Adjacent} = \frac{a}{b}$|
|$\csc{\theta}$|$\frac{Hypotenuse}{Opposite} = \frac{c}{a}$|
|$\sec{\theta}$|$\frac{Hypotenuse}{Adjacent} = \frac{c}{b}$|
|$\cot{\theta}$|$\frac{Adjacent}{Opposite} = \frac{b}{a}$|

>**Note:** Only these 6 trigonometric functions are possible as there are ${}^3P_2 = 6$ ways to permutate the 2 selected sides out of the 3 triangle's sides.

## Identities from the ratio definition

From the ratio definitions we see that,

$$
\begin{align}
    \tan \theta &= \frac{\sin \theta }{\cos \theta } \label{eq:tan_trig_ratio} \\\\
    \csc \theta &= \frac{1}{\sin \theta } \label{eq:csc_trig_ratio} \\\\
    \sec \theta &= \frac{1}{\cos \theta } \label{eq:sec_trig_ratio} \\\\
    \cot \theta &= \frac{1}{\tan \theta } = \frac{\cos \theta}{\sin \theta} \label{eq:cot_trig_ratio}
\end{align}    
$$

From the Pythagorean theorem for $\triangle ABC$ we get,
 
$$
\begin{align}
a^2 + b^2 = c^2 \label{eq:pythagoras}
\end{align}
$$

Dividing both side of $\eqref{eq:pythagoras}$ by $c^2$ we get,

$$
\begin{align}
    &\frac{a^2}{c^2} + \frac{b^2}{c^2} = 1 \notag \\\\
    \implies &\left( \frac{a}{c} \right)^2 + \left( \frac{b}{c} \right)^2 = 1 \notag \\\\
    \implies &\boxed{ \sin ^2 \theta + \cos ^2 \theta = 1 } \label{eq:sinsq_cossq}
\end{align}
$$

Dividing both side of $\eqref{eq:pythagoras}$ by $b^2$ we get,

$$
\begin{align}
    &\frac{a^2}{b^2} + 1 = \frac{c^2}{b^2} \notag \\\\
    \implies &\left( \frac{a}{b} \right)^2 + 1 = \left( \frac{c}{b} \right)^2 \notag \\\\
    \implies &\tan ^2 \theta + 1 = \sec ^2 \theta  \notag \\\\
    \implies & \boxed{\sec ^2 \theta - \tan ^2 \theta = 1} \label{eq:secsq_tansq}
\end{align}
$$

Dividing both side of $\eqref{eq:pythagoras}$ by $a^2$ we get,

$$ 
\begin{align}
    &1 + \frac{b^2}{a^2} = \frac{c^2}{a^2} \notag \\\\
    \implies &1 + \left( \frac{b}{a} \right)^2 = \left( \frac{c}{a} \right)^2 \notag \\\\
    \implies &1 + \cot ^2 \theta = \csc ^2 \theta  \notag \\\\
    \implies &\boxed{\csc ^2 \theta - \cot ^2 \theta = 1} \label{eq:cscsq_cotsq}
\end{align}
$$

>**Note:** Identities $\eqref{eq:secsq_tansq}$ and $\eqref{eq:cscsq_cotsq}$ can be derived with the help of $\eqref{eq:tan_trig_ratio}$, $\eqref{eq:csc_trig_ratio}$, $\eqref{eq:sec_trig_ratio}$ and $\eqref{eq:cot_trig_ratio}$ by dividing both sides of $\eqref{eq:sinsq_cossq}$ by $\cos ^2 \theta $ and $\sin ^2 \theta$ respectively.

> **Note:** This definition of trigonometric functions are only defined in the domain $0^\circ \lt \theta \lt 90^\circ$ or $\theta \in \left[0 , \frac{\pi}{2} \right]$. It is due to the fact that $\theta$ has to be acute i.e., between the given domain for $\triangle ABC$ to exist!