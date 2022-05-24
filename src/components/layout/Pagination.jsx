import './pagination.css';

const Pagination = ({postsPerPage, totalPosts, paginate, nextPage, prevPage, currentPage}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="paginate pagination">
            <ul>
                <span onClick={prevPage}>
                    Prev
                </span>
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <a className={currentPage === number ? 'active' : null} onClick={() => {paginate(number)}}>
                            {number}
                        </a>
                    </li>
                ))}
                <span onClick={nextPage}>
                    Next
                </span>
            </ul>
        </nav>
    );
};

export default Pagination;