import React, { useState } from "react";
import PageLayout from "../HOC/PageLayout";


const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const data = ["item 1", "item 2", "item 3", "item 4", "item 5", "item 6", "item 7", "item 8", "item 9", "item 10", "item 11", "item 12","item 13"]
    const perPage = 5
    const startIndx = (currentPage - 1) * perPage //1-1=0  0*4=0
    const paginatedData = data.slice(startIndx, startIndx + perPage)//0, 0+4=4  
    console.log(data.length/perPage)
    const pageCount=Math.ceil(data.length/perPage)
    return (
        <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center", height: "50vh", width: "100%" }}>

            <h1>Pagination</h1>

            {
                paginatedData.map((ele) => {
                    return <div key={ele}>{ele}</div>
                })
            }
            <button disabled={currentPage===1} onClick={() => {
                setCurrentPage(currentPage - 1)
            }}>prev</button>
            <button disabled={currentPage===pageCount} onClick={() => {
                setCurrentPage(currentPage + 1)
            }}>next</button>
        </div>
    )
}

export default PageLayout(Pagination);
