import React from 'react'

function Detalhe({ match }) {
    return (
      <div>
        Detalhe: {match.params.id}
      </div>
    );
}

export default Detalhe