import React from 'react'

function Categoria({ match }) {
    return (
      <div>
        Categoria: {match.params.id}
      </div>
    );
}

export default Categoria