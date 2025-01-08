package controllers;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import models.Majalah;
import java.util.ArrayList;

@WebServlet(name = "MajalahController", urlPatterns = {"/Majalah"})
public class MajalahController extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String menu = request.getParameter("menu");

        if ("list".equals(menu)) {
            ArrayList<Majalah> majalahList = new Majalah().get(); // Ambil data majalah dari database
            request.setAttribute("majalahList", majalahList);
            request.getRequestDispatcher("MajalahList.jsp").forward(request, response);
        } else if ("add".equals(menu)) {
            request.getRequestDispatcher("AddMajalah.jsp").forward(request, response);
        } else if ("edit".equals(menu)) {
            int id = Integer.parseInt(request.getParameter("id"));
            Majalah majalah = new Majalah().getById(id); // Ambil majalah berdasarkan ID
            request.setAttribute("majalah", majalah);
            request.getRequestDispatcher("EditMajalah.jsp").forward(request, response);
        } else {
            response.sendRedirect("Majalah?menu=list"); // Default ke daftar
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
        String action = request.getParameter("action");

        if ("add".equals(action)) {
            try {
                Majalah majalah = new Majalah();
                majalah.setIdMajalah(request.getParameter("idMajalah")); // ID Majalah
                majalah.setJudul(request.getParameter("judul"));
                majalah.setPenerbit(request.getParameter("penerbit"));
                majalah.setTahunTerbit(Integer.parseInt(request.getParameter("tahun_terbit"))); // Pastikan nama parameter sesuai
                majalah.setStokDibutuhkan(Integer.parseInt(request.getParameter("stok_dibutuhkan"))); // Pastikan nama parameter sesuai
                majalah.setStokTersedia(Integer.parseInt(request.getParameter("stok_tersedia"))); // Pastikan nama parameter sesuai
                majalah.insert(); // Simpan majalah ke database

                response.sendRedirect("AdminPage.jsp?menu=majalah");
            } catch (Exception e) {
                e.printStackTrace();
                request.setAttribute("errorMessage", "Error adding magazine: " + e.getMessage());
                request.getRequestDispatcher("AddMajalah.jsp").forward(request, response);
            }
        } else if ("edit".equals(action)) {
            try {
                Majalah majalah = new Majalah();
                majalah.setId(Integer.parseInt(request.getParameter("id"))); // Ambil ID dari parameter
                majalah.setIdMajalah(request.getParameter("idMajalah"));
                majalah.setJudul(request.getParameter("judul"));
                majalah.setPenerbit(request.getParameter("penerbit"));
                majalah.setTahunTerbit(Integer.parseInt(request.getParameter("tahun_terbit"))); // Pastikan nama parameter sesuai
                majalah.setStokDibutuhkan(Integer.parseInt(request.getParameter("stok_dibutuhkan"))); // Pastikan nama parameter sesuai
                majalah.setStokTersedia(Integer.parseInt(request.getParameter("stok_tersedia"))); // Pastikan nama parameter sesuai
                majalah.update(); // Update majalah di database

                response.sendRedirect("AdminPage.jsp?menu=majalah");
            } catch (Exception e) {
                e.printStackTrace();
                request.setAttribute("errorMessage", "Error editing magazine: " + e.getMessage());
                request.getRequestDispatcher("EditMajalah.jsp?id=" + request.getParameter("id")).forward(request, response);
            }
        } else if ("delete".equals(action)) {
            int id = Integer.parseInt(request.getParameter("id"));
            try {
                Majalah majalah = new Majalah();
                majalah.setId(id); // Set ID untuk dihapus
                majalah.delete(); // Hapus majalah dari database
                response.sendRedirect("AdminPage.jsp?menu=majalah"); // Redirect ke daftar majalah
            } catch (Exception e) {
                e.printStackTrace();
                response.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Error deleting magazine: " + e.getMessage());
            }
        }
    }
}
