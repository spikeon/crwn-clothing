import React from 'react';
import {SpinnerContainer, SpinnerOverlay} from './with-spinner.styles';

const WithSpinner = WrappedComponent => ({isLoading, children, ...props}) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : <WrappedComponent {...props}>{children}</WrappedComponent>;
};

export default WithSpinner;

