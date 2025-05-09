// Mengimpor React untuk menggunakan komponen dan fitur React
import React from "react";
// Mengimpor createRoot dari React DOM untuk merender aplikasi ke elemen HTML
import { createRoot } from "react-dom/client";

// Membuat class component bernama MyForm yang mewarisi dari React.Component
class MyForm extends React.Component {
  constructor(props) {
    super(props); // Memanggil constructor parent (React.Component)

    // Inisialisasi state awal
    this.state = {
      name: "", // Menyimpan input nama
      email: "", // Menyimpan input email
      gender: "Man", // Menyimpan pilihan gender (default: 'Man')
    };

    // Binding method agar `this` tetap merujuk ke instance class ini
    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
    this.onGenderChangeEventHandler =
      this.onGenderChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  // Method untuk menangani saat form disubmit
  onSubmitEventHandler(event) {
    event.preventDefault(); // Mencegah form dari reload halaman

    // Menyusun data dari state untuk ditampilkan dalam alert
    const message = `
    Name: ${this.state.name}
    Email: ${this.state.email}
    Gender: ${this.state.gender}
    `;

    alert(message); // Menampilkan data dalam alert popup
  }

  // Method untuk menangani perubahan pada input name
  onNameChangeEventHandler(event) {
    this.setState(() => {
      return {
        name: event.target.value, // Meng-update state name dengan nilai dari input
      };
    });
  }

  // Method untuk menangani perubahan pada input email
  onEmailChangeEventHandler(event) {
    this.setState(() => {
      return {
        email: event.target.value, // Meng-update state email dengan nilai dari input
      };
    });
  }

  // Method untuk menangani perubahan pada select gender
  onGenderChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        gender: event.target.value, // Meng-update state gender
      };
    });
  }

  // Method render untuk menampilkan UI
  render() {
    return (
      <div>
        <h1> Register Form</h1>
        {/* Form dengan event handler onSubmit */}
        <form onSubmit={this.onSubmitEventHandler}>
          {/* Input untuk nama */}
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={this.state.name}
            onChange={this.onNameChangeEventHandler}
          />
          <br />

          {/* Input untuk email */}
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={this.state.email}
            onChange={this.onEmailChangeEventHandler}
          />
          <br />

          {/* Dropdown untuk gender */}
          <label htmlFor="gender">Gender: </label>
          <select
            id="gender"
            value={this.state.gender}
            onChange={this.onGenderChangeEventHandler}
          >
            <option value="Man">Man</option>
            <option value="Woman">Woman</option>
          </select>
          <br />

          {/* Tombol submit */}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

// Menemukan elemen HTML dengan id 'root' dan merender komponen MyForm ke dalamnya
const root = createRoot(document.getElementById("root"));
root.render(<MyForm />);
