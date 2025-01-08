    package controllers;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import models.Jurnal;
import java.util.ArrayList;

@WebServlet(name = "JurnalController", urlPatterns = {"/Jurnal"})
public class JurnalController extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String menu = request.getParameter("menu");

        if ("list".equals(menu)) {
            ArrayList<Jurnal> jurnalList = new Jurnal().get(); // Ambil data jurnal dari database
            request.setAttribute("jurnalList", jurnalList);
            request.getRequestDispatcher("JurnalList.jsp").forward(request, response);
        } else if ("add".equals(menu)) {
            request.getRequestDispatcher("AddJurnal.jsp").forward(request, response);
        } else if ("edit".equals(menu)) {
            int id = Integer.parseInt(request.getParameter("id"));
            Jurnal jurnal = new Jurnal().getById(id); // Ambil jurnal berdasarkan ID
            request.setAttribute("jurnal", jurnal);
            request.getRequestDispatcher("EditJurnal.jsp").forward(request, response);
        } else {
            response.sendRedirect("Jurnal?menu=list"); // Default ke daftar
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
        String action = request.getParameter("action");

        if ("add".equals(action)) {
            try {
                Jurnal jurnal = new Jurnal();
                jurnal.setIdJurnal(request.getParameter("idJurnal")); // ID Jurnal
                jurnal.setJudul(request.getParameter("judul"));
                jurnal.setPenulis(request.getParameter("penulis"));
                jurnal.setPenerbit(request.getParameter("penerbit"));
                jurnal.setTahunTerbit(Integer.parseInt(request.getParameter("tahun_terbit"))); // Pastikan nama parameter sesuai
                jurnal.setStokDibutuhkan(Integer.parseInt(request.getParameter("stok_dibutuhkan"))); // Pastikan nama parameter sesuai
                jurnal.setStokTersedia(Integer.parseInt(request.getParameter("stok_tersedia"))); // Pastikan nama parameter sesuai
                jurnal.insert(); // Simpan jurnal ke database

                response.sendRedirect("AdminPage.jsp?menu=jurnal");
            } catch (Exception e) {
                e.printStackTrace();
                request.setAttribute("errorMessage", "Error adding journal: " + e.getMessage());
                request.getRequestDispatcher("AddJurnal.jsp").forward(request, response);
            }
        } else if ("edit".equals(action)) {
            try {
                Jurnal jurnal = new Jurnal();
                jurnal.setId(Integer.parseInt(request.getParameter("id"))); // Ambil ID dari parameter
                jurnal.setIdJurnal(request.getParameter("idJurnal"));
                jurnal.setJudul(request.getParameter("judul"));
                jurnal.setPenulis(request.getParameter("penulis"));
                jurnal.setPenerbit(request.getParameter("penerbit"));
                jurnal.setTahunTerbit(Integer.parseInt(request.getParameter("tahun_terbit"))); // Pastikan nama parameter sesuai
                jurnal.setStokDibutuhkan(Integer.parseInt(request.getParameter("stok_dibutuhkan"))); // Pastikan nama parameter sesuai
                jurnal.setStokTersedia(Integer.parseInt(request.getParameter("stok_tersedia"))); // Pastikan nama parameter sesuai
                jurnal.update(); // Update jurnal di database

                response.sendRedirect("AdminPage.jsp?menu=jurnal");
            } catch (Exception e) {
                e.printStackTrace();
                request.setAttribute("errorMessage", "Error editing journal: " + e.getMessage());
                request.getRequestDispatcher("EditJurnal.jsp?id=" + request.getParameter("id")).forward(request, response);
            }
        } else if ("delete".equals(action)) {
            int id = Integer.parseInt(request.getParameter("id"));
            try {
                Jurnal jurnal = new Jurnal();
                jurnal.setId(id); // Set ID untuk dihapus
                jurnal.delete(); // Hapus jurnal dari database
                response.sendRedirect("AdminPage.jsp?menu=majalah"); // Redirect ke daftar jurnal
            } catch (Exception e) {
                e.printStackTrace();
                response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Error deleting journal: " + e.getMessage());
            }
        }
    }
}
