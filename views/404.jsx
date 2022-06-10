const React = require('react')
const Default = require('./layouts/Default')

function whereAmI ({bread}) {
     return (
        <Default>
            <h3>You idiot, it's a 404 page!!!</h3>
        </Default>
    )
}

module.exports = whereAmI