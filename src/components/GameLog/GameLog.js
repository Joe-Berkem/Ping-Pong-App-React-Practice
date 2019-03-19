import React from 'react';

const GameLog = ({ 
    history
}) => (
      
      <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">History</th>
            </tr>
        </thead>
        <tbody>
        { history.map(index => (
            <tr>
                <th scope="row">#</th>
                        <td>{ index }</td>      
            </tr>
            ))}  
        </tbody>
    </table>
)

export default GameLog;