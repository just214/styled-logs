declare type MaybeStringArray = string[] | Function[] | any[] | undefined[];
declare function styled(previousStyle?: any): ((strings: string | string[], ...values: MaybeStringArray) => any) | undefined;
declare namespace styled {
    var log: (strings: string | string[], ...values: MaybeStringArray) => any;
    var info: (strings: string | string[], ...values: MaybeStringArray) => any;
    var warn: (strings: string | string[], ...values: MaybeStringArray) => any;
    var error: (strings: string | string[], ...values: MaybeStringArray) => any;
}
export default styled;
