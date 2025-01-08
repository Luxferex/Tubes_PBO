package models;

import java.sql.ResultSet;

public class Buku extends Model<Buku> {
    private int id; // ID of the book
    private String isbn; // Unique ID for the book (ISBN)
    private String judul; // Title of the book
    private String penulis; // Author of the book
    private String penerbit; // Publisher of the book
    private int tahun_terbit; // Year of publication
    private int jumlah; // Total number of copies
    private int stok_tersedia; // Available stock
    private int stok_dibutuhkan; // Required stock

    public Buku() {
        this.table = "buku"; // Name of the database table
        this.primaryKey = "id"; // Primary key
    }

    public Buku(int id, String isbn, String judul, String penulis, String penerbit, int tahun_terbit, int jumlah, int stok_dibutuhkan, int stok_tersedia) {
        this(); // Call the default constructor to set table and primary key
        this.id = id;
        this.isbn = isbn;
        this.judul = judul;
        this.penulis = penulis;
        this.penerbit = penerbit;
        this.tahun_terbit = tahun_terbit;
        this.jumlah = jumlah;
        this.stok_dibutuhkan = stok_dibutuhkan;
        this.stok_tersedia = stok_tersedia;
    }

    @Override
    public Buku toModel(ResultSet rs) {
        try {
            return new Buku(
                rs.getInt("id"), // ID from the table
                rs.getString("isbn"), // Unique ID for the book
                rs.getString("judul"), // Title of the book
                rs.getString("penulis"), // Author of the book
                rs.getString("penerbit"), // Publisher of the book
                rs.getInt("tahun_terbit"), // Year of publication
                rs.getInt("jumlah"), // Total number of copies
                rs.getInt("stok_dibutuhkan"), // Required stock
                rs.getInt("stok_tersedia") // Available stock
            );
        } catch (Exception e) {
            setMessage("Error in toModel: " + e.getMessage());
            return null; // Return null if an error occurs
        }
    }

    // Getters and Setters
    public int getId() {
        return id; // Return ID
    }

    public void setId(int id) {
        this.id = id; // Set ID
    }

    public String getIsbn() {
        return isbn; // Return unique ID for the book
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn; // Set unique ID for the book
    }

    public String getJudul() {
        return judul; // Return title of the book
    }

    public void setJudul(String judul) {
        this.judul = judul; // Set title of the book
    }

    public String getPenulis() {
        return penulis; // Return author of the book
    }

    public void setPenulis(String penulis) {
        this.penulis = penulis; // Set author of the book
    }

    public String getPenerbit() {
        return penerbit; // Return publisher of the book
    }

    public void setPenerbit(String penerbit) {
        this.penerbit = penerbit; // Set publisher of the book
    }

    public int getTahunTerbit() {
        return tahun_terbit; // Return year of publication
    }

    public void setTahunTerbit(int tahun_terbit) {
        this.tahun_terbit = tahun_terbit; // Set year of publication
    }

    public int getJumlah() {
        return jumlah; // Return total number of copies
    }

    public void setJumlah(int jumlah) {
        this.jumlah = jumlah; // Set total number of copies
    }

    public int getStokDibutuhkan() {
        return stok_dibutuhkan; // Return required stock
    }

    public void setStokDibutuhkan(int stok_dibutuhkan) {
        this.stok_dibutuhkan = stok_dibutuhkan; // Set required stock
    }

    public int getStokTersedia() {
        return stok_tersedia; // Return available stock
    }

    public void setStokTersedia(int stok_tersedia) {
        this.stok_tersedia = stok_tersedia; // Set available stock
    }
}
