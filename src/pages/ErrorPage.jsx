import React from 'react';
import { useRouteError } from 'react-router';
import ErrorLayout from '../components/ErrorLayout.jsx'
import { useNavigate } from 'react-router-dom';
const ErrorPage = () => {
    const navigate = useNavigate();
    const error = useRouteError();
    let title = 'An error occurred';
    let message = 'Something went wrong';
    if (error.status === 500) {
        message = error.data.message;
    }
    if (error.status === 404) {
        title = 'NOT FOUND!';
        message = 'Could Not Found resource or page';
    }
    const closeHandler = () => {
        navigate("..");
    }
    return (
        <>
            <ErrorLayout title={title} onClose={closeHandler}>
                <p>{message}</p>
            </ErrorLayout>
        </>
    )
}

export default ErrorPage