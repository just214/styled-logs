declare function reconstruct(literals: TemplateStringsArray | string, placeholders: any[]): string | TemplateStringsArray;
declare function init(methodName: string, style: string): {
    (literals: string | TemplateStringsArray, ...placeholders: any[]): void;
    style: string;
    methodName: string;
};
declare function styled<Styled>(previousStyle?: any): false | ((literals: TemplateStringsArray, ...placeholders: string[]) => {
    (literals: string | TemplateStringsArray, ...placeholders: any[]): void;
    style: string;
    methodName: string;
});
declare namespace styled {
    var log: (literals: TemplateStringsArray, ...placeholders: string[]) => {
        (literals: string | TemplateStringsArray, ...placeholders: any[]): void;
        style: string;
        methodName: string;
    };
    var warn: (literals: TemplateStringsArray, ...placeholders: string[]) => {
        (literals: string | TemplateStringsArray, ...placeholders: any[]): void;
        style: string;
        methodName: string;
    };
    var error: (literals: TemplateStringsArray, ...placeholders: string[]) => {
        (literals: string | TemplateStringsArray, ...placeholders: any[]): void;
        style: string;
        methodName: string;
    };
}
export { reconstruct, init };
export default styled;
