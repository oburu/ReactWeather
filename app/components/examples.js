import React from 'react';
import {Link} from 'react-router';

const Examples = props =>{
  return(
    <div>
      <h1 className="text-center"> Examples</h1>
      <p>Here ara a few example locations to try out</p>
      <ol>
        <li>
          <Link to='/?location=Manchester'>Manchester, UK</Link>
        </li>
        <li>
          <Link to='/?location=Tarquinia'>Tarquinia, IT</Link>
        </li>
      </ol>
    </div>

  )
}

export default Examples;
