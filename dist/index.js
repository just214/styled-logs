const reconstruct = (literals, placeholders) => {
    if (typeof literals === 'string') {
        return literals;
    }
    let result = [];
    literals.forEach((str, i) => {
        if (str)
            result.push(str);
        if (placeholders && placeholders[i])
            result.push(typeof placeholders[i] === "function" ? placeholders[i]() : placeholders[i]);
        return false;
    });
    return result.join(" ");
};
const init = (methodName, style) => {
    const executionFunction = Object.assign((literals, ...placeholders) => {
        const text = reconstruct(literals, placeholders);
        let Console = console || window.console;
        Console[methodName]("%c%s", style, text);
    }, {
        style,
        methodName
    });
    return executionFunction;
};
const styled = Object.assign((previousStyle) => {
    if (previousStyle) {
        return (literals, ...placeholders) => {
            return init(previousStyle.methodName, `${previousStyle.style} ${reconstruct(literals, placeholders)}`);
        };
    }
}, {
    log: (literals, ...placeholders) => {
        return init("log", `${reconstruct(literals, placeholders)}`);
    },
    warn: (literals, ...placeholders) => {
        return init("warn", `${reconstruct(literals, placeholders)}`);
    },
    error: (literals, ...placeholders) => {
        return init("error", `${reconstruct(literals, placeholders)}`);
    }
});

module.exports = styled;
