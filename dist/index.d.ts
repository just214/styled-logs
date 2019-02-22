declare type MaybeStringArray = string[] | Function[] | any[] | undefined[];
declare function styled(previousStyle?: any): ((strings: TemplateStringsArray, ...values: MaybeStringArray) => {
    (strings: string | TemplateStringsArray, ...values: MaybeStringArray): void;
    style: string;
    methodName: string;
}) | undefined;
declare namespace styled {
    var log: (strings: TemplateStringsArray, ...values: MaybeStringArray) => {
        (strings: string | TemplateStringsArray, ...values: MaybeStringArray): void;
        style: string;
        methodName: string;
    };
    var info: (strings: TemplateStringsArray, ...values: MaybeStringArray) => {
        (strings: string | TemplateStringsArray, ...values: MaybeStringArray): void;
        style: string;
        methodName: string;
    };
    var warn: (strings: TemplateStringsArray, ...values: MaybeStringArray) => {
        (strings: string | TemplateStringsArray, ...values: MaybeStringArray): void;
        style: string;
        methodName: string;
    };
    var error: (strings: TemplateStringsArray, ...values: MaybeStringArray) => {
        (strings: string | TemplateStringsArray, ...values: MaybeStringArray): void;
        style: string;
        methodName: string;
    };
}
export default styled;
