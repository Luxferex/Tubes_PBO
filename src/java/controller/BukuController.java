package controllers;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import models.Buku;
import java.util.ArrayList;

@WebServlet(name = "BukuController", urlPatterns = {"/Buku"})
public class BukuController extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String menu = request.getParameter("menu");

        if ("list".equals(menu)) {
            ArrayList<Buku> bukuList = new Buku().get(); // Ambil data buku dari database
            request.setAttribute("bukuList", bukuList);
            request.getRequestDispatcher("BukuList.jsp").forward(request, response);
        } else if ("add".equals(menu)) {
            request.getRequestDispatcher("AddBuku.jsp").forward(request, response);
        } else if ("edit".equals(menu)) {
            int id = Integer.parseInt(request.getParameter("id"));
            Buku buku = new Buku().getById(id); // Ambil buku berdasarkan ID
            request.setAttribute("buku", buku);
            request.getRequestDispatcher("EditBuku.jsp").forward(request, response);
        } else {
            response.sendRedirect("Buku?menu=list"); // Default ke daftar
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
        String action = request.getParameter("action");

        if ("add".equals(action)) {
            addBuku(request, response);
        } else if ("edit".equals(action)) {
            editBuku(request, response);
        } else if ("delete".equals(action)) {
            deleteBuku(request, response);
        }
    }

    private void addBuku(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
        try {
            Buku buku = new Buku();
            buku.setIsbn(request.getParameter("isbn"));
            buku.setJudul(request.getParameter("judul"));
            buku.setPenulis(request.getParameter("penulis"));
            buku.setPenerbit(request.getParameter("penerbit"));
            buku.setTahunTerbit(Integer.parseInt(request.getParameter("tahun_terbit")));
            buku.setJumlah(Integer.parseInt(request.getParameter("jumlah")));
            buku.setStokDibutuhkan(Integer.parseInt(request.getParameter("stok_dibutuhkan")));
            buku.setStokTersedia(Integer.parseInt(request.getParameter("stok_tersedia")));
            buku.insert(); // Simpan buku ke database

            response.sendRedirect("AdminPage.jsp?menu=buku"); // Redirect ke AdminPage
        } catch (Exception e) {
            e.printStackTrace();
            request.setAttribute("errorMessage", "Error adding book: " + e.getMessage());
            request.getRequestDispatcher("AddBuku.jsp").forward(request, response);
        }
    }

    private void editBuku(HttpServletRequest request, HttpServletResponse response)  
        throws ServletException, IOException {  
        try {  
            Buku buku = new Buku();  
            buku.setId(Integer.parseInt(request.getParameter("id"))); // Ambil ID dari parameter  
            buku.setIsbn(request.getParameter("isbn"));  
            buku.setJudul(request.getParameter("judul"));  
            buku.setPenulis(request.getParameter("penulis"));  
            buku.setPenerbit(request.getParameter("penerbit"));  
            buku.setTahunTerbit(Integer.parseInt(request.getParameter("tahun_terbit")));  
            buku.setJumlah(Integer.parseInt(request.getParameter("jumlah")));  
            buku.setStokDibutuhkan(Integer.parseInt(request.getParameter("stok_dibutuhkan")));  
            buku.setStokTersedia(Integer.parseInt(request.getParameter("stok_tersedia")));  
            buku.update(); // Update buku di database  

            response.sendRedirect("AdminPage.jsp?menu=buku");  
        } catch (Exception e) {  
            e.printStackTrace();  
            request.setAttribute("errorMessage", "Error editing book: " + e.getMessage());  
            request.getRequestDispatcher("EditBuku.jsp?id=" + request.getParameter("id")).forward(request, response);  
        }  
    }  


    private void deleteBuku(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
        int id = Integer.parseInt(request.getParameter("id"));
        try {
            Buku buku = new Buku();
            buku.setId(id);
            buku.delete(); // Hapus buku dari database
            response.sendRedirect("AdminPage.jsp?menu=buku");
        } catch (Exception e) {
            e.printStackTrace();
            response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Error deleting book: " + e.getMessage());
        }
    }
}
