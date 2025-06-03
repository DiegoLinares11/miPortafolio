const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Gracias! Tu mensaje ha sido enviado. Me pondré en contacto contigo pronto.");
  };

  return (
    <section id="contacto" className="section">
      <h2>¡Trabajemos Juntos!</h2>
      <div className="contact-form fade-in">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="cta-button">Enviar Mensaje</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
