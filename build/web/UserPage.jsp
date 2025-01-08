<%@page contentType="text/html" pageEncoding="UTF-8"%>    
<%@page import="models.Buku"%>    
<%@page import="models.Jurnal"%>    
<%@page import="models.Majalah"%>    
<%@page import="java.util.List"%>    
<%@page import="models.User"%>    
<%@page import="javax.servlet.http.HttpSession"%>    
  
<!DOCTYPE html>    
<html lang="en">    
<head>    
    <meta charset="UTF-8">    
    <title>PBO - Sistem Informasi Perpustakaan - User Page</title>    
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">    
    <script>    
        function toggleDropdown() {    
            const dropdown = document.getElementById('dropdown-menu');    
            dropdown.classList.toggle('hidden');    
        }    
    
        // Automatically open the dropdown and load data if the menu is 'pinjam'    
        window.onload = function() {    
            const urlParams = new URLSearchParams(window.location.search);    
            const menu = urlParams.get('menu');    
            if (menu) {    
                document.getElementById('dropdown-menu').classList.remove('hidden');    
                loadData(menu); // Load data based on the menu parameter    
            }    
        };    
    </script>    
</head>    
<body class="bg-gray-100">    
    <header class="flex justify-between items-center p-3 bg-blue-900 text-white fixed top-0 left-0 right-0 z-10 h-20">    
        <div class="flex items-center space-x-4">    
            <div class="text-xl font-bold">PBO - Sistem Informasi Perpustakaan</div>    
        </div>    
    </header>    
    
    <div class="flex mt-[80px]">    
        <div class="bg-gray-800 text-white p-4 fixed h-full w-64 overflow-y-auto pt-40">    
            <div>  
                <img src="images/default.png" alt="Administrator" class="w-10 h-10 rounded-full">  
                <%  
                    User user = (User) request.getSession().getAttribute("user"); // Ambil user dari session  
                    if (user != null) {  
                %>  
                    <div class="font-semibold"><%= user.getName() %></div>  
                    <div class="text-sm text-gray-400"><%= user.getRole() %></div>  
                <%  
                    } else {  
                %>  
                    <div class="font-semibold">Guest</div>  
                    <div class="text-sm text-gray-400">No Role</div>  
                <%  
                    }  
                %>  
            </div>     
                   
            <div class="space-y-4 pt-8">    
                <div>    
                    <button class="w-full text-left text-gray-200 hover:bg-gray-700 p-2 rounded" onclick="toggleDropdown()">    
                        <i class="fas fa-book align-middle"></i> Pinjam Buku <i class="fas fa-chevron-down float-right"></i>    
                    </button>    
                    <div id="dropdown-menu" class="hidden pl-4 space-y-2">    
                        <button class="w-full text-left text-gray-200 hover:bg-gray-700 p-2 rounded" onclick="loadData('buku')">    
                            <i class="fas fa-book-open align-middle"></i> Buku    
                        </button>    
                        <button class="w-full text-left text-gray-200 hover:bg-gray-700 p-2 rounded" onclick="loadData('majalah')">    
                            <i class="fas fa-newspaper align-middle"></i> Majalah    
                        </button>    
                        <button class="w-full text-left text-gray-200 hover:bg-gray-700 p-2 rounded" onclick="loadData('jurnal')">    
                            <i class="fas fa-file-alt align-middle"></i> Jurnal    
                        </button>    
                    </div>    
                </div>    
                <div>    
                    <button class="w-full text-left text-gray-200 hover:bg-gray-700 p-2 rounded" onclick="loadData('keranjang')">    
                        <i class="fas fa-shopping-cart align-middle"></i> Keranjang    
                    </button>    
                </div>    
                <!-- Menu Settings -->    
                <div class="mt-8">    
                    <button class="w-full text-left text-gray-200 hover:bg-gray-700 p-2 rounded" onclick="toggleSettings()">    
                        <i class="fas fa-cog align-middle"></i> Settings <i class="fas fa-chevron-down float-right"></i>    
                    </button>    
                    <div id="settings-menu" class="hidden pl-4 space-y-2">    
                        <button class="w-full text-left text-gray-200 hover:bg-gray-700 p-2 rounded" onclick="logout()">    
                            <i class="fas fa-sign-out-alt align-middle"></i> Logout    
                        </button>    
                    </div>    
                </div>    
            </div>    
        </div>    
    
        <div class="flex-1 p-4" style="margin-left: 280px;">    
            <h2 class="text-4xl text-orange-600 font-bold mb-4" id="page-title">    
                Selamat Datang    
            </h2>    
            <div class="grid grid-cols-4 gap-4" id="content-area">    
                <!-- Konten akan dimuat di sini -->    
            </div>    
        </div>    
    </div>    
    
    <script>    
        function loadData(menu) {    
            const titleElement = document.getElementById('page-title');    
            const contentArea = document.getElementById('content-area');    
    
            if (menu === 'buku') {    
                titleElement.innerText = 'Pinjam Buku';    
                fetch('UserItem?menu=list&type=buku') // Fetch data from UserItem controller for books    
                    .then(response => {    
                        if (!response.ok) {    
                            throw new Error('Network response was not ok');    
                        }    
                        return response.text();    
                    })    
                    .then(data => {    
                        contentArea.innerHTML = data; // Insert the fetched HTML into the content area    
                    })    
                    .catch(error => {    
                        console.error('Error fetching data:', error);    
                        contentArea.innerHTML = '<p class="text-red-500">Error loading data.</p>';    
                    });    
            } else if (menu === 'majalah') {    
                titleElement.innerText = 'Pinjam Majalah';    
                fetch('UserItem?menu=list&type=majalah') // Fetch data from UserItem controller for magazines    
                    .then(response => {    
                        if (!response.ok) {    
                            throw new Error('Network response was not ok');    
                        }    
                        return response.text();    
                    })    
                    .then(data => {    
                        contentArea.innerHTML = data; // Insert the fetched HTML into the content area    
                    })    
                    .catch(error => {    
                        console.error('Error fetching data:', error);    
                        contentArea.innerHTML = '<p class="text-red-500">Error loading data.</p>';    
                    });    
            } else if (menu === 'jurnal') {    
                titleElement.innerText = 'Pinjam Jurnal';    
                fetch('UserItem?menu=list&type=jurnal') // Fetch data from UserItem controller for journals    
                    .then(response => {    
                        if (!response.ok) {    
                            throw new Error('Network response was not ok');    
                        }    
                        return response.text();    
                    })    
                    .then(data => {    
                        contentArea.innerHTML = data; // Insert the fetched HTML into the content area    
                    })    
                    .catch(error => {    
                        console.error('Error fetching data:', error);    
                        contentArea.innerHTML = '<p class="text-red-500">Error loading data.</p>';    
                    });    
            }    
        }    
    
        function toggleSettings() {    
            const settingsMenu = document.getElementById('settings-menu');    
            settingsMenu.classList.toggle('hidden');    
        }    
    
        function logout() {    
            window.location.href = 'logout'; // Redirect to logout servlet    
        }    
    </script>    
</body>    
</html>    
