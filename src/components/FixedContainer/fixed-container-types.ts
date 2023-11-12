export interface FixedContainerProps
    extends React.HTMLAttributes<HTMLDivElement> {
    position: 'topLeft' | 'bottomLeft' | 'topRight' | 'bottomRight';
}
