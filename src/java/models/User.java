package models;  
  
import java.sql.ResultSet;  
import java.util.ArrayList; // Import ArrayList  
  
public class User extends Model<User> {  
    private String name;  
    private String email;  
    private int nim; // Primary key  
    private String jurusan;  
    private String fakultas;  
    private String phone; // Changed to String to match the database schema  
    private String role;  
    private String password; // Password field  
  
    // Default constructor  
    public User() {  
        this.table = "users"; // Name of the database table  
        this.primaryKey = "nim"; // Primary key  
    }  
  
    // Parameterized constructor  
    public User(String name, String email, int nim, String jurusan, String fakultas, String phone, String role, String password) {  
        this(); // Call the default constructor to set table and primary key  
        this.name = name;  
        this.email = email;  
        this.nim = nim;  
        this.jurusan = jurusan;  
        this.fakultas = fakultas;  
        this.phone = phone; // Set phone  
        this.role = role;  
        this.password = password; // Set password  
    }  
  
    // Getters and Setters  
    public String getName() {  
        return name;  
    }  
  
    public void setName(String name) {  
        this.name = name;  
    }  
  
    public String getEmail() {  
        return email;  
    }  
  
    public void setEmail(String email) {  
        this.email = email;  
    }  
  
    public int getNim() {  
        return nim;  
    }  
  
    public void setNim(int nim) {  
        this.nim = nim;  
    }  
  
    public String getJurusan() {  
        return jurusan;  
    }  
  
    public void setJurusan(String jurusan) {  
        this.jurusan = jurusan;  
    }  
  
    public String getFakultas() {  
        return fakultas;  
    }  
  
    public void setFakultas(String fakultas) {  
        this.fakultas = fakultas;  
    }  
  
    public String getPhone() {  
        return phone;  
    }  
  
    public void setPhone(String phone) {  
        this.phone = phone;  
    }  
  
    public String getRole() {  
        return role;  
    }  
  
    public void setRole(String role) {  
        this.role = role;  
    }  
  
    public String getPassword() {  
        return password;  
    }  
  
    public void setPassword(String password) {  
        this.password = password;  
    }  
  
    // Method to convert ResultSet to User object  
    @Override  
    public User toModel(ResultSet rs) {  
        try {  
            System.out.println("Mapping ResultSet to User...");  
            return new User(  
                rs.getString("name"),  
                rs.getString("email"),  
                rs.getInt("nim"),  
                rs.getString("jurusan"),  
                rs.getString("fakultas"),  
                rs.getString("phone"), // Changed to String  
                rs.getString("role"),  
                rs.getString("password")  
            );  
        } catch (Exception e) {  
            setMessage("Error in toModel: " + e.getMessage());  
            e.printStackTrace();  
            return null;  
        }  
    }  
  
    // Method to fetch all users  
    public static ArrayList<User> getAllUsers() {  
        return new User().get(); // Use inherited get() method  
    }  
  
    // Method to fetch a user by nim  
    public static User getUserByNim(String nim) {  
        return new User().find(nim); // Use inherited find() method  
    }  
  
    // Method to delete a user by nim  
    public static void deleteUser(int nim) {  
        User user = new User();  
        user.setNim(nim);  
        user.delete(); // Use inherited delete() method  
    }  
  
    // Method to update user details  
    public void updateUser() {  
        update(); // Use inherited update() method  
    }  
  
    // Method to save a new user  
    public boolean save() {  
        insert(); // Call the insert method from the Model class  
        return true; // Return true if the insert was successful  
    }  
}  
