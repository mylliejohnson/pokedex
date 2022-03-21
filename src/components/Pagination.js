import React from 'react';

function Pagination({ goToNext, goToPrev }) {
    return (
        <div className='page-btns'>
            {goToPrev && <button onClick={goToPrev}>Previous</button>}
            {/* {goToNext && <button onClick={goToNext}>Next</button>} */}
        </div >
    );
}

export default Pagination;





  // pagination
    // const goToNext = () => setCurrentUrl(nextPage)
    // const goToPrev = () => setCurrentUrl(prevPage)