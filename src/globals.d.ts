declare module '*.module.css';
declare module '*.module.sass';
declare module '*.svg' {
    const content: string;
    export default content;
}
