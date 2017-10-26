import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { addList,deleteList } from './actions';
import { connect } from "redux-zero/react";
const App = ({ list }) => {
  const onClick = e =>{
    e.preventDefault();
    console.log(e.target.id);
    deleteList(e.target.id);
  };
  const listsComments = list.map((item, index) => {
    return (
      <li key={index}>
        <div className="comentario">
          <div className="cajaimg">
            <img
              src="https://image.freepik.com/iconos-gratis/buscar-simbolo-de-interfaz-de-usuario_318-65798.jpg"
              className="image"
            />
          </div>
          <div className="cajatext">
            @{item.name}
            <hr className="linea"/>
            {item.comment}
            <div>
              <button className="btn btn-link" onClick={onClick} id={index}>Delete comment</button>
            </div>
          </div>
        </div>
      </li>
    );
  });
  const onSubmit = e => {
    e.preventDefault();
    let user = this.inputName.value;
    let opinion = this.textComent.value
    addList(user,opinion);
  };

  return (
    <div className="container">
      <div className="row">
        <form onSubmit={onSubmit} className="formulario">
          <h3>Foro-Comment</h3>
          <input
            type="text"
            className="form-control"
            id="nombre"
            placeholder="Ingrese su nombre"
            ref={e => (this.inputName = e)}
          />
          <textarea
            className="form-control"
            rows="4"
            id="comentarios"
            placeholder="Ingrese comentario"
            ref={e => (this.textComent = e)}
          />
          <button
            type="submit"
            className="btn btn-lg btn-success"
            id="btnGuardar"
            value="Guardar Datos"
          >
            POST COMMENT
          </button>
        </form>
        <div>
          <div>
            <h2>COMMENT</h2>
            <ul>{listsComments}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapToProps = ({ list }) => ({ list });
export default connect(mapToProps)(App);
