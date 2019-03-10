import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class NovaPostagem extends Component {

    render() {

        return (
            <Card body>
                <Link to='/cadastrar'>
                    <Button variant="primary" block>
                        Nova Postagem
                    </Button>
                </Link>
            </Card>
        )
    }
}

export default NovaPostagem