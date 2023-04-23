"use client";

import React, { use, useState } from "react";

const Counter = () => {
    const [value, setValue] = useState(0);

    return (
        <>
            <button
                className="text-3xl"
                onClick={() => setValue((prev) => prev + 1)}
            >
                +
            </button>
            <span className="text-4xl">{value}</span>
        </>
    );
};

export default Counter;
