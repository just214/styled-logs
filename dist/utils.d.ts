declare type MaybeString = string[] | string;
declare type MaybeStringArray = string[] | Function[] | any[] | undefined[];
declare function reconstruct(strings: MaybeString, values: MaybeStringArray): string;
declare function init(methodName: string, style: string): {
    (strings: string | string[], ...values: any[] | string[] | Function[] | undefined[]): void;
    style: string;
    methodName: string;
};
