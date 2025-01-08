<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="models.Majalah"%>
<%@page import="java.util.List"%>

<%
    List<Majalah> daftarMajalah = (List<Majalah>) request.getAttribute("daftarMajalah");
%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Daftar Majalah</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <div class="grid grid-cols-4 gap-4 p-4">
        <%
            for (Majalah majalah : daftarMajalah) {
        %>
            <div class="bg-gray-200 p-4 rounded-lg shadow-md flex flex-col items-center">
                <div class="text-6xl mb-2">
                    <i class="fas fa-newspaper"></i>
                </div>
                <h3 class="text-lg font-semibold">"<%= majalah.getJudul() %>"</h3>
                <div class="flex space-x-2 mt-2">
                    <button class="bg-blue-500 text-white p-2 rounded">
                        <i class="fas fa-info-circle"></i>
                    </button>
                    <button class="bg-green-500 text-white p-2 rounded">
                        <i class="fas fa-download"></i>
                    </button>
                </div>
            </div>
        <%
            }
        %>
    </div>
</body>
</html>
