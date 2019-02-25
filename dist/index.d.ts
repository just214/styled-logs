declare type StyledLog = (literals: TemplateStringsArray, ...placeholders: string[]) => Function;
interface Styled {
    (previousStyle?: any): any;
    log: StyledLog;
    warn: StyledLog;
    error: StyledLog;
}
declare const styled: Styled;
export default styled;
