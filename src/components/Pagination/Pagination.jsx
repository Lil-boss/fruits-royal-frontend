import { useState } from "react";

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }
    const [page, setPage] = useState(1);
    const submit = (id) => {
        paginate(id);
        setPage(id);
    }
    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className='bg-gray-400'>
                    {
                        pageNumbers.map(number => <button onClick={() => submit(number)} className={page === number ? "bg-red-100 ml-2 p-4 " : "ml-2 p-4 bg-gray-400"} key={number}>{number}</button>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Pagination;