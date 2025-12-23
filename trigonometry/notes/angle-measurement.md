# Angle Measurement
**Problem**: Given a circle of radius $r$ and a randomly chosen point $P$ on the circumference of the circle, find a quantity(s) that can uniquely refer to $P$.

![Circle angle](./images/circle-angle.drawio.svg)

As a circle is symmetric (8-way to be precise), to uniquely refer $P$, we need some reference. So, as reference axis we draw two perpendicular lines through the circle's center labeled $XX^\prime$ and $YY^\prime$. $OX$ and $OY$ are considered positive and $OX^\prime$, $OY^\prime$ are considered negative. The circle intersects positive $X$-axis at $M$.

So, reaching $P$ can be thought of as starting from $M$ if we **move some amount along the circle's circumference**, then we can reach $P$.

This quantity is referred to as **angle** of rotation and mostly is denoted by the greek symbol $\theta$.

> **Note:** This movement/ rotation is by convention anti-clockwise. If the movement is done clock-wise then $\theta$ is considered negative, else positive.

### Desirable Properties for the measurement: 
To derive an expression for $\theta$ with respect to the circle it must follow the following properties,
- Be an invariant under scaling i.e., applicable to all circles.
- Increase linearly as we move along the circle.
- Be additive under successful rotations.
- Works locally i.e., small rotation means small $\theta$

### Possible Solutions:
1. **Arc Length:**
    The Arc Length ( $\widehat{PM}$ in above example ) literally describes the distance traversed along the circumference of the circle to reach $P$.
    So by this approach we can declare,

$$
\theta = s \quad [s = \widehat{PM} ]
$$

But, this assertion is problematic as if we have a different sized-circle the same amount of distance rotated will be different.

![Circle Bigger Circle](./images/circle-bigger-circle.drawio.svg)

In the above example definitely $\widehat{QN}$ is greater than $\widehat{PM}$ even though same amount rotation is done. This violates the invariant property.

2. **Proportional Distance**:
    As we need a quantity that must be invariant of scaling of the circle we can consider the following,
   
$$
\theta = \frac{s}{2 \pi r} \quad [s = \widehat{PM}]
$$

This actually captures the invariance as this ratio must be same for any circle. Reason being it's a proportion between the arc length covered to the full length i.e., the circumference that can be covered.

### Actual Expression:
The [Proportional Distance](#possible-solutions) definition satisfies all of the properties mentioned [here](#desirable-properties-for-the-measurement) but if we see the expression we can extract a constant term out namely $\frac{1}{2\pi}$ which does not depend on the circle or $P$. This way we get the true expression of the anglement measurement,

$$ 
\boxed{\therefore \quad \theta = \frac{s}{r} \quad [s = \widehat{PM}]}
$$

This is the **minimal invariant** which satisfies all [desired properties](#desirable-properties-for-the-measurement).

> **Note:** For an unit circle i.e., $r = 1$ we have $\boxed{\theta = s}$

So the quantity that is required to uniquely identify a point on the circumference of a circle of radius $r$ is $\theta$ whose expression is given [here](#actual-expression).

> **Note:** It can be seen that any point in the $XY$ plane can be uniquely referenced using the pair $(r,\theta)$ where $r$ is the distance from origin of that point and $\theta$ is the angle that line makes with positive $X$-axis. This forms the basis of **Polar Coordinate System**.

## Radian:
As $\theta$ is an **angle measurement**, it must have some unit to make sense.

> **One Radian** is the angle suspended at the center of a circle by an arc whose length is same as the circle's radius. It's the SI unit for angles.
![Radian](./images/circle-radian.drawio.svg)

If we put $s=r$ in the expression of $\theta$ then we get,
$$\theta = \frac{r}{r} = 1$$
Therefore, $\frac{s}{r}$ gives then angle in radian.

As any circle can be obtained by scaling up the unit circle we can concentrate on unit circle from now on.

For a full rotation, by the above definition of radian, we can write,
$$
\boxed{\theta = \frac{2 \pi r}{r} \; Rad= 2 \pi \; Rad}
$$

Similarly a half rotation is,
$$ \boxed{\theta = \frac{\pi r}{r} \; Rad = \pi \; Rad} $$

## Radian vs Degree:
One more common unit for angle measurement is Degree which is defined as,
> One degree is $\frac{1}{360}^{th}$ of a full rotation of a circle. It's denoted by symbol $\degree$.

Though, this is also a general enough definition for an angle of measurement, it has it's limitations. One of the major limitation being, by definition, a degree as a measurement of angle, can not be more than $360\degree$ which is a desired property to accurately describe rotation.

Due to this, instead of degrees, radians are widely used in Maths and related fields to describe rotation and angles. 

Due to degrees' popularity it is worth mentioning the conversion.

$$\boxed{1 \degree = \frac{2 \pi }{360} \; Rad = \frac{\pi}{180} \; Rad}$$

> **Note:** As Radian is used as a standard unit, whenever the unit is missing in an angle measurement then it is considered to be in radians.
