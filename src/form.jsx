// Import React untuk membuat komponen
import React from "react";
// Import createRoot dari React 18 untuk me-render ke DOM
import { createRoot } from "react-dom/client";

// Mendefinisikan class component bernama MyForm
class MyForm extends React.Component {
  constructor(props) {
    super(props); // Memanggil constructor parent (React.Component)

    // Menentukan state awal
    this.state = {
      name: "", // Menyimpan nilai input nama
      email: "", // Menyimpan nilai input email
      gender: "Man", // Menyimpan nilai default select gender
    };

    // Binding fungsi agar `this` di dalamnya merujuk ke instance class
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Fungsi untuk menangani perubahan di semua input
  handleChange(event) {
    // Ambil atribut 'name' dan 'value' dari elemen input yang sedang berubah
    // Misalnya: <input name="email" value="abc@email.com" />
    // Maka: name = "email", value = "abc@email.com"
    const { name, value } = event.target;

    // Gunakan nilai 'name' sebagai kunci (key) untuk memperbarui state
    // Contoh hasil: this.setState({ email: "abc@email.com" });
    // Jadi, nama input menentukan bagian state mana yang diubah
    this.setState({ [name]: value });
  }

  // Fungsi untuk menangani form submit
  handleSubmit(event) {
    event.preventDefault(); // Mencegah reload halaman saat submit
    const { name, email, gender } = this.state; // Ambil data dari state

    // Tampilkan data dalam alert
    alert(`Name: ${name}\nEmail: ${email}\nGender: ${gender}`);
  }

  // Fungsi render: menentukan tampilan komponen
  render() {
    const { name, email, gender } = this.state; // Destructuring state

    return (
      <div>
        <h1>Register Form</h1>

        {/* Form dengan onSubmit handler */}
        <form onSubmit={this.handleSubmit}>
          {/* Input untuk Name */}
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name" // harus cocok dengan key di state
            value={name} // nilai input dikontrol oleh state
            onChange={this.handleChange} // handler perubahan input
          />
          <br />

          {/* Input untuk Email */}
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <br />

          {/* Select untuk Gender */}
          <label htmlFor="gender">Gender: </label>
          <select
            id="gender"
            name="gender"
            value={gender}
            onChange={this.handleChange}
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

// Cari elemen root dari HTML
const root = createRoot(document.getElementById("root"));
// Render komponen MyForm ke dalam elemen root
root.render(<MyForm />);
