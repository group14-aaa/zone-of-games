import React from "react"
import { Link } from "react-router-dom";

export default function LinksSidebar() {
    return (
        <>
                <Link to="/streams/">
                    <div className="p-5 hover:bg-accent hover:text-white ">
                        <h2 className="text-2xl font-bold">Top Games Streaming</h2>
                    </div>
                </Link>

                <Link to="/streams/most-viewed">
                    <div className="p-5 hover:bg-accent hover:text-white ">
                        <h2 className="text-2xl font-bold">Top 100 Streams</h2>
                    </div>
                </Link>

                <Link to="/games/top">
                    <div className="p-5 hover:bg-accent hover:text-white">
                        <h2 className="text-2xl font-bold ">Top Rated Games</h2>
                    </div>
                </Link>
        </>
    )
}
