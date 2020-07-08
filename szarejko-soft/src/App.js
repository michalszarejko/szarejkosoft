import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Quality Assurance</h1>
      <h2>Michał Szarejko Soft</h2>

      <div className="form-container">
        <p className="form-header">Kontakt</p>
        <form className="form">

          <label className="form-label" for="name">Imię</label>
          <input required className="form-input" type="text" id="name" name="firstname" placeholder="Imię..." />

          <label className="form-label" for="surname">Nazwisko</label>
          <input required className="form-input" type="text" id="surname" name="surname" placeholder="Nazwisko..." />

          <label className="form-label" for="email">Adres email</label>
          <input required className="form-input" type="email" id="email" name="email" placeholder="Email..." />

          <label className="form-label" for="subject">Temat</label>
          <input required className="form-input" type="text" id="subject" name="subject" placeholder="Temat..." />

          <label className="form-label" for="message">Wiadomość</label>
          <textarea required id="subject" name="message" placeholder="Treść..."></textarea>

          <input className="button" type="submit" value="Wyślij" />

        </form>
      </div>
    </div>
  );
}

export default App;
