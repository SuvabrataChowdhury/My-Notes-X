# Math notes

This repo is for Math notes and exercise solutions for future references.

## Table of Contents

1. [Trigonometry](./src/trigonometry/notes/contents.md)
2. Analytical Geometry

## Required VS Code Extensions:

1. [Markdown+Math](https://marketplace.visualstudio.com/items?itemName=goessner.mdmath) for VS Code Math preview of latex. Example:

$$
\begin{align*}
e^{i\pi} &= -1 \\
a + ar + ar^2 + ar^3 + \ldots &= \frac{a}{1+r} \quad ; \quad r < 1
\end{align*}
$$

3. [Math Snippets](https://marketplace.visualstudio.com/items?itemName=thomanq.math-snippets) for autocomplete of math symbols.

4. [Markdown Preview Mermaid Support](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-mermaid) for built in text diagrams like,

```mermaid
flowchart TD
    A --> B
    A --> C
    B --> D
    C --> D
```

5. [Draw.io Integration](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio) for complex diagrams like,
<img src="./example-diagram.drawio.svg" alt="Example Diagram" width="100%"/>

## mdbook setup:
1. Install mdbook by
```bash
brew install mdbook
```

2. To build static page use,
```bash
mdbook build
```

3. To spin-up live server use,
```bash
mdbook serve # Access it at localhost:3000. It will react to changes to .mds
```