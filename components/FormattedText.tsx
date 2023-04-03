import React from 'react';

interface Props {
    text: string;
}

function FormattedText({ text }: Props) {
    const maxLength = 30;

    if (text.length <= maxLength) {
        return <p>{text}</p>;
    }

    const truncatedText = text.slice(0, maxLength) + '...';
    return (
        <p title={text}>
            {truncatedText}
        </p>
    );
}

export default FormattedText;
