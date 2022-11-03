import * as React from 'react';

class SearchErrorBoundary extends React.Component {
    props: { children: React.ReactNode}
    state: { hasError: boolean };
    constructor(props: { children: React.ReactNode}) {
        super(props);
        this.state = { hasError: false };
    }

    
    static getDerivedStateFromError(error: Error): { hasError: boolean } {
        console.log(`error`, error);
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    } 

    render(): React.ReactNode {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

export default SearchErrorBoundary;