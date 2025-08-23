import React from "react"
import "./Badge.css"

export default function Badge({ color, shape }) {
    return (
        <span className={`${color}-${shape}`}>
            Badge
        </span>
    )
}