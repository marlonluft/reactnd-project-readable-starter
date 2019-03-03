import React from 'react'

function Editar({ match }) {
    return (
      <div>
        Editar: {match.params.id}
      </div>
    );
}

export default Editar