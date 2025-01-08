<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="models.User"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PBO - Sistem Informasi Perpustakaan</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body>
    <%
        User loggedInUser = (User) request.getSession().getAttribute("user");
        if (loggedInUser != null) {
            // Jika pengguna sudah login, arahkan berdasarkan peran
            if ("admin".equals(loggedInUser.getRole())) {
                response.sendRedirect("AdminPage.jsp"); // Halaman admin
            } else {
                response.sendRedirect("userPage.jsp"); // Halaman user
            }
            return; // Menghentikan eksekusi lebih lanjut
        }
    %>
    <h2 class="text-center mt-10">Selamat Datang di Sistem Informasi Perpustakaan</h2>
    <div class="flex justify-center mt-5">
        <a href="User?menu=login" class="bg-blue-500 text-white px-4 py-2 rounded">Login</a>
    </div>
</body>
</html>
