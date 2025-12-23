window.addEventListener("load", function() {
    MathJax.Hub.Config({
        tex2jax: {
            inlineMath: [['$', '$'], ['\\(', '\\)']],
            displayMath: [['$$', '$$'], ['\\[', '\\]']],
            processEscapes: true
        }
    });
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
});
