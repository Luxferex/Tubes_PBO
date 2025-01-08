package models;

import java.sql.ResultSet;

public class Majalah extends Model<Majalah> {
    private int id; // ID of the magazine
    private String idMajalah; // Unique ID for the magazine
    private String judul; // Title of the magazine
    private String penerbit; // Publisher of the magazine
    private int tahun_terbit; // Year of publication
    private int stok_tersedia; // Available stock
    private int stok_dibutuhkan; // Required stock

    public Majalah() {
        this.table = "majalah"; // Name of the database table
        this.primaryKey = "id"; // Primary key
    }

    public Majalah(int id, String idMajalah, String judul, String penerbit, int tahun_terbit, int stok_dibutuhkan, int stok_tersedia) {
        this(); // Call the default constructor to set table and primary key
        this.id = id;
        this.idMajalah = idMajalah; // Set unique magazine ID
        this.judul = judul; // Set title of the magazine
        this.penerbit = penerbit; // Set publisher of the magazine
        this.tahun_terbit = tahun_terbit; // Set year of publication
        this.stok_dibutuhkan = stok_dibutuhkan; // Set required stock
        this.stok_tersedia = stok_tersedia; // Set available stock
    }

    @Override
    public Majalah toModel(ResultSet rs) {
        try {
            return new Majalah(
                rs.getInt("id"), // Get ID from the table
                rs.getString("idMajalah"), // Get unique magazine ID
                rs.getString("judul"), // Get title of the magazine
                rs.getString("penerbit"), // Get publisher of the magazine
                rs.getInt("tahun_terbit"), // Get year of publication
                rs.getInt("stok_dibutuhkan"), // Get required stock
                rs.getInt("stok_tersedia") // Get available stock
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

    public String getIdMajalah() {
        return idMajalah; // Return unique magazine ID
    }

    public void setIdMajalah(String idMajalah) {
        this.idMajalah = idMajalah; // Set unique magazine ID
    }

    public String getJudul() {
        return judul; // Return title of the magazine
    }

    public void setJudul(String judul) {
        this.judul = judul; // Set title of the magazine
    }

    public String getPenerbit() {
        return penerbit; // Return publisher of the magazine
    }

    public void setPenerbit(String penerbit) {
        this.penerbit = penerbit; // Set publisher of the magazine
    }

    public int getTahunTerbit() {
        return tahun_terbit; // Return year of publication
    }

    public void setTahunTerbit(int tahun_terbit) {
        this.tahun_terbit = tahun_terbit; // Set year of publication
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
