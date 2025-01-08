package models;

import java.sql.ResultSet;

public class Jurnal extends Model<Jurnal> {
    private int id; // ID of the journal
    private String idJurnal; // Unique ID for the journal
    private String judul; // Title of the journal
    private String penulis; // Author of the journal
    private String penerbit; // Publisher of the journal
    private int tahun_terbit; // Year of publication
    private int stok_tersedia; // Available stock
    private int stok_dibutuhkan; // Required stock

    public Jurnal() {
        this.table = "jurnal"; // Name of the database table
        this.primaryKey = "id"; // Primary key
    }

    public Jurnal(int id, String idJurnal, String judul, String penulis, String penerbit, int tahun_terbit, int stok_dibutuhkan, int stok_tersedia) {
        this(); // Call the default constructor to set table and primary key
        this.id = id;
        this.idJurnal = idJurnal; // Set unique journal ID
        this.judul = judul; // Set title of the journal
        this.penulis = penulis; // Set author of the journal
        this.penerbit = penerbit; // Set publisher of the journal
        this.tahun_terbit = tahun_terbit; // Set year of publication
        this.stok_dibutuhkan = stok_dibutuhkan; // Set required stock
        this.stok_tersedia = stok_tersedia; // Set available stock
    }

    @Override
    public Jurnal toModel(ResultSet rs) {
        try {
            return new Jurnal(
                rs.getInt("id"), // Get ID from the table
                rs.getString("idJurnal"), // Get unique journal ID
                rs.getString("judul"), // Get title of the journal
                rs.getString("penulis"), // Get author of the journal
                rs.getString("penerbit"), // Get publisher of the journal
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

    public String getIdJurnal() {
        return idJurnal; // Return unique journal ID
    }

    public void setIdJurnal(String idJurnal) {
        this.idJurnal = idJurnal; // Set unique journal ID
    }

    public String getJudul() {
        return judul; // Return title of the journal
    }

    public void setJudul(String judul) {
        this.judul = judul; // Set title of the journal
    }

    public String getPenulis() {
        return penulis; // Return author of the journal
    }

    public void setPenulis(String penulis) {
        this.penulis = penulis; // Set author of the journal
    }

    public String getPenerbit() {
        return penerbit; // Return publisher of the journal
    }

    public void setPenerbit(String penerbit) {
        this.penerbit = penerbit; // Set publisher of the journal
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
