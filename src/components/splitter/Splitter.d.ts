import * as React from 'react';

interface SplitterProps {
    id?: string;
    className?: string;
    style?: object;
    layout?: string;
    gutterSize?: number;
    stateKey?: string;
    stateStorage?: string;
    onResizeEnd?(e: {originalEvent: Event, sizes: any}): void;
}

export class Splitter extends React.Component<SplitterProps,any> {}
