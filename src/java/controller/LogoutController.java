package controller;  
  
import java.io.IOException;  
import javax.servlet.ServletException;  
import javax.servlet.annotation.WebServlet;  
import javax.servlet.http.HttpServlet;  
import javax.servlet.http.HttpServletRequest;  
import javax.servlet.http.HttpServletResponse;  
  
@WebServlet(name = "LogoutServlet", urlPatterns = {"/logout"})  
public class LogoutController extends HttpServlet {  
    @Override  
    protected void doGet(HttpServletRequest request, HttpServletResponse response)  
            throws ServletException, IOException {  
        // Invalidasi sesi untuk menghapus semua atribut yang terkait
        if (request.getSession(false) != null) {
            request.getSession().invalidate(); // Menghapus sesi yang ada
            System.out.println("Session invalidated.");  
        }  
        
        // Redirect kembali ke halaman login
        response.sendRedirect("index.jsp");  
    }  
}  

