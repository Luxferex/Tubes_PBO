package controllers;

import models.Buku;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@WebServlet(name = "BorrowController", urlPatterns = {"/BorrowController"})
public class BorrowController extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        HttpSession session = request.getSession();

        // Ambil keranjang dari session  
        Map<String, List<Object>> keranjang = (Map<String, List<Object>>) session.getAttribute("keranjang");

        // Ambil daftar buku yang sudah dipinjam sebelumnya  
        List<Buku> borrowedBooks = (List<Buku>) session.getAttribute("borrowedBooks");
        List<String> statuses = (List<String>) session.getAttribute("statuses"); // Menyimpan status peminjaman  
        if (borrowedBooks == null) {
            borrowedBooks = new ArrayList<>();
        }
        if (statuses == null) {
            statuses = new ArrayList<>();
        }

        // Proses data dari keranjang jika ada  
        if (keranjang != null && keranjang.containsKey("buku")) {
            List<Object> bukuList = keranjang.get("buku");

            for (Object obj : bukuList) {
                if (obj instanceof Buku) {
                    Buku buku = (Buku) obj;
                    borrowedBooks.add(buku);
                    statuses.add("Menunggu Konfirmasi"); // Status awal  
                    // Anda bisa menambahkan logika penyimpanan ke database jika diperlukan  
                }
            }

            // Kosongkan keranjang setelah semua data diproses  
            keranjang.clear();
            session.setAttribute("keranjang", keranjang);
        }

        // Perbarui daftar buku yang dipinjam dan status ke session  
        session.setAttribute("borrowedBooks", borrowedBooks);
        session.setAttribute("statuses", statuses);

        // Redirect ke halaman laporan pinjam  
        response.sendRedirect("LaporanPinjam.jsp");
    }

}
