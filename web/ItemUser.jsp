<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="models.Buku"%>
<%@page import="models.Jurnal"%>
<%@page import="models.Majalah"%>
<%@page import="java.util.List"%>

<%
    List<Buku> bukuList = (List<Buku>) request.getAttribute("bukuList");
    List<Jurnal> jurnalList = (List<Jurnal>) request.getAttribute("jurnalList");
    List<Majalah> majalahList = (List<Majalah>) request.getAttribute("majalahList");
%>


<div class="grid grid-cols-4 gap-4">
    <%-- Display Books --%>
    <%
        if (bukuList != null) {
            for (Buku buku : bukuList) {
    %>
        <div class="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <div class="text-6xl mb-2">
                <i class="fas fa-book"></i> <!-- Book Icon -->
            </div>
            <h3 class="text-lg font-semibold mt-2"><%= buku.getJudul() %></h3>
            <p class="text-gray-600">Penulis: <%= buku.getPenulis() %></p>
            <p class="text-gray-600">Stok: <%= buku.getStokTersedia() %></p>
            <button class="mt-2 bg-blue-500 text-white py-1 px-2 rounded">Pinjam</button>
        </div>
    <%
            }
        }
    %>

    <%-- Display Journals --%>
    <%
        if (jurnalList != null) {
            for (Jurnal jurnal : jurnalList) {
    %>
        <div class="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <div class="text-6xl mb-2">
                <i class="fas fa-file-alt"></i> <!-- Journal Icon -->
            </div>
            <h3 class="text-lg font-semibold mt-2"><%= jurnal.getJudul() %></h3>
            <p class="text-gray-600">Penulis: <%= jurnal.getPenulis() %></p>
            <p class="text-gray-600">Stok: <%= jurnal.getStokTersedia() %></p>
            <button class="mt-2 bg-blue-500 text-white py-1 px-2 rounded">Pinjam</button>
        </div>
    <%
            }
        }
    %>

    <%-- Display Magazines --%>
    <%
        if (majalahList != null) {
            for (Majalah majalah : majalahList) {
    %>
        <div class="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
            <div class="text-6xl mb-2">
                <i class="fas fa-newspaper"></i> <!-- Magazine Icon -->
            </div>
            <h3 class="text-lg font-semibold mt-2"><%= majalah.getJudul() %></h3>
            <p class="text-gray-600">Penulis: <%= majalah.getPenerbit() %></p>
            <p class="text-gray-600">Stok: <%= majalah.getStokTersedia() %></p>
            <button class="mt-2 bg-blue-500 text-white py-1 px-2 rounded">Pinjam</button>
        </div>
    <%
            }
        }
    %>
</div>
