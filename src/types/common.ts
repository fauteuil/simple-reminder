/**
 * Generic No Operation function with optional props
 * @description
 *    PropsType - defaults to void
 */
export type NoOpFunction<PropsType = any> = (props?: PropsType) => void;
