import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ url,  body, onSubmit, onChange }) => (
  <form onSubmit={onSubmit}>
    <label>
      URL
      <input type='text' value={url} onChange={onChange}/>
    </label>
    <br></br>
    <section>
      <br></br>
      <label>
        GET
        <input type='radio' value='get' name='method'></input>
      </label>
      <br></br>
      <label>
        POST
        <input type='radio' value='post' name='method'></input>
      </label>
      <br></br>
      <label>
        PUT
        <input type='radio' value='put' name='method'></input>
      </label>
      <br></br>
      <label>
        DELETE
        <input type='radio' value='delete' name='method'></input>
      </label>
      <br></br>
      <label>Input</label>
      <textarea type='text' value={body} name='input'></textarea>
    </section>
    <button>Submit</button>
  </form>
);

Display.propTypes = {
  url: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequred,
  onChange: PropTypes.func.isRequired
};

export default Display;
