package controllers;

import models.Buku;
import models.Majalah;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@WebServlet(name = "KeranjangController", urlPatterns = {"/KeranjangController"})
public class KeranjangController extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String tipe = request.getParameter("tipe"); // Jenis item (buku, majalah)
        String id = request.getParameter("id");     // ID item
        String action = request.getParameter("action"); // Aksi yang akan dilakukan (add, remove)

        HttpSession session = request.getSession();
        Map<String, List<Object>> keranjang = (Map<String, List<Object>>) session.getAttribute("keranjang");

        if (keranjang == null) {
            keranjang = new HashMap<>();
            keranjang.put("buku", new ArrayList<>());
            keranjang.put("jurnal", new ArrayList<>());
            keranjang.put("majalah", new ArrayList<>());
        }

        // Menambah buku ke dalam keranjang
        if ("buku".equals(tipe) && id != null && !id.isEmpty() && "add".equals(action)) {
            Buku buku = new Buku().getById(Integer.parseInt(id));
            if (buku != null) {
                List<Object> bukuList = keranjang.get("buku");
                boolean exists = bukuList.stream().anyMatch(b -> ((Buku) b).getId() == buku.getId());
                if (!exists) {
                    bukuList.add(buku);
                    session.setAttribute("keranjang", keranjang);
                    System.out.println("Buku dengan ID " + buku.getId() + " ditambahkan ke keranjang.");
                } else {
                    System.out.println("Buku sudah ada di keranjang.");
                }
            }
        }

        // Menambah majalah ke dalam keranjang
        if ("majalah".equals(tipe) && id != null && !id.isEmpty() && "add".equals(action)) {
            Majalah majalah = new Majalah().getById(Integer.parseInt(id)); // Pastikan Majalah ada di model
            if (majalah != null) {
                List<Object> majalahList = keranjang.get("majalah");
                boolean exists = majalahList.stream().anyMatch(m -> ((Majalah) m).getId() == majalah.getId());
                if (!exists) {
                    majalahList.add(majalah);
                    session.setAttribute("keranjang", keranjang);
                    System.out.println("Majalah dengan ID " + majalah.getId() + " ditambahkan ke keranjang.");
                } else {
                    System.out.println("Majalah sudah ada di keranjang.");
                }
            }
        }

        // Menghapus item (buku atau majalah) dari keranjang
        if ("remove".equals(action) && id != null && !id.isEmpty()) {
            List<Object> bukuList = keranjang.get("buku");
            List<Object> majalahList = keranjang.get("majalah");
            if (bukuList != null) {
                try {
                    int itemIdToRemove = Integer.parseInt(id);
                    boolean removedBuku = bukuList.removeIf(buku -> ((Buku) buku).getId() == itemIdToRemove);
                    boolean removedMajalah = majalahList.removeIf(m -> ((Majalah) m).getId() == itemIdToRemove);
                    if (removedBuku || removedMajalah) {
                        System.out.println("Item dengan ID " + itemIdToRemove + " telah dihapus.");
                    } else {
                        System.out.println("Item dengan ID " + itemIdToRemove + " tidak ditemukan.");
                    }
                } catch (NumberFormatException e) {
                    e.printStackTrace();
                }
            }
        }

        session.setAttribute("keranjang", keranjang);

        // Redirect kembali ke halaman Keranjang.jsp
        response.sendRedirect("UserPage.jsp?menu=keranjang");
    }
    
}

