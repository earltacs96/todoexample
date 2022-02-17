import React, { FC } from 'react';

type Props = {
    children: React.ReactChild | React.ReactChild[]
}

const IconButton:FC<Props> = ({children}) => {
    return (
        <button>
            {children}
        </button>
    )
}

export default IconButton;
