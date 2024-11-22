import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    alert("Votre message a été envoyé avec succès !");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Contactez-nous</h1>
      <p>
        Si vous avez des questions, n'hésitez pas à nous contacter en utilisant
        le formulaire ci-dessous ou via nos coordonnées.
      </p>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {/* Formulaire de contact */}
        <form
          onSubmit={handleSubmit}
          style={{
            flex: 1,
            minWidth: "300px",
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <div style={{ marginBottom: "15px" }}>
            <label>
              Nom :
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  margin: "5px 0",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
                required
              />
            </label>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>
              Email :
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "10px",
                  margin: "5px 0",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
                required
              />
            </label>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>
              Message :
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                style={{
                  width: "100%",
                  padding: "10px",
                  margin: "5px 0",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
                required
              ></textarea>
            </label>
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Envoyer
          </button>
        </form>

        {/* Coordonnées */}
        <div
          style={{
            flex: 1,
            minWidth: "300px",
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h2>Nos coordonnées</h2>
          <p><strong>Adresse :</strong> 123 Rue Exemple, Casablanca, Maroc</p>
          <p><strong>Téléphone :</strong> +212 6 123 456 78</p>
          <p><strong>Email :</strong> contact@exemple.com</p>
          <p><strong>Heures d'ouverture :</strong></p>
          <ul>
            <li>Lundi - Vendredi : 9h00 - 18h00</li>
            <li>Samedi : 10h00 - 14h00</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
