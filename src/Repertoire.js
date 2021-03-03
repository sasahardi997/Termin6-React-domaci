import React from 'react';

const Repertoire = (props) => {
    return (
        <div>
              <div>
                {props.children}
             </div>
             <div className="button">
                <button>Like</button>
                <button>Dislike</button>
             </div>
        </div>
    )
}

export default Repertoire;