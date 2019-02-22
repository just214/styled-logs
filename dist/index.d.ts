declare type MaybeStringArray = string[] | Function[] | any[] | undefined[];
declare function styled(previousStyle?: any): ((strings: string | string[], ...values: MaybeStringArray) => {
    (strings: string | string[], ...values: MaybeStringArray): void;
    style: string;
    methodName: string;
}) | undefined;
declare namespace styled {
    var log: (strings: string | string[], ...values: MaybeStringArray) => {
        (strings: string | string[], ...values: MaybeStringArray): void;
        style: string;
        methodName: string;
    };
    var info: (strings: string | string[], ...values: MaybeStringArray) => {
        (strings: string | string[], ...values: MaybeStringArray): void;
        style: string;
        methodName: string;
    };
    var warn: (strings: string | string[], ...values: MaybeStringArray) => {
        (strings: string | string[], ...values: MaybeStringArray): void;
        style: string;
        methodName: string;
    };
    var error: (strings: string | string[], ...values: MaybeStringArray) => {
        (strings: string | string[], ...values: MaybeStringArray): void;
        style: string;
        methodName: string;
    };
}
export default styled;
