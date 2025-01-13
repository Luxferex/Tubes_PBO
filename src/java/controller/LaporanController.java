package controllers;

import models.Buku;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "LaporanController", urlPatterns = {"/Laporan", "/processAction"})
public class LaporanController extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        HttpSession session = request.getSession();

        // Ambil daftar buku yang dipinjam dari session    
        List<Buku> borrowedBooks = (List<Buku>) session.getAttribute("borrowedBooks");

        // Forward ke halaman laporan pinjam    
        request.setAttribute("borrowedBooks", borrowedBooks);
        request.getRequestDispatcher("LaporanPinjam.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String action = request.getParameter("action");
        String isbn = request.getParameter("isbn");
        HttpSession session = request.getSession();

        // Ambil daftar buku yang dipinjam dan status dari session    
        List<Buku> borrowedBooks = (List<Buku>) session.getAttribute("borrowedBooks");
        List<String> statuses = (List<String>) session.getAttribute("statuses");

        if (borrowedBooks != null && isbn != null) {
            // Temukan peminjaman berdasarkan ISBN    
            for (int i = 0; i < borrowedBooks.size(); i++) {
                if (borrowedBooks.get(i).getIsbn().equals(isbn)) {
                    if ("accept".equals(action)) {
                        // Logika untuk menerima peminjaman buku    
                        statuses.set(i, "Diterima");
                        session.setAttribute("notification", "Permintaan peminjaman buku '" + borrowedBooks.get(i).getJudul() + "' diterima.");
                    } else if ("reject".equals(action)) {
                        // Logika untuk menolak peminjaman buku    
                        statuses.set(i, "Ditolak");
                        session.setAttribute("notification", "Permintaan peminjaman buku '" + borrowedBooks.get(i).getJudul() + "' ditolak.");
                    }
                    break;
                }
            }
        }

        // Setelah memproses, forward kembali ke halaman laporan pinjam    
        request.setAttribute("borrowedBooks", borrowedBooks);
        request.setAttribute("statuses", statuses);
        request.getRequestDispatcher("LaporanPinjam.jsp").forward(request, response);
    }

}
