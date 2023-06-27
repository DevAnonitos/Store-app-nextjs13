import React from 'react';

function FormattedDate(props: any) {
    const date = new Date(props.date);


    const formattedDate = date.toLocaleDateString();

    return (
        <>
            The current date update is: {formattedDate}
        </>
    );
}

export default FormattedDate;
