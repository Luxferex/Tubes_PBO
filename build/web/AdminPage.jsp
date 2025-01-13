<%@page contentType="text/html" pageEncoding="UTF-8"%>  
<%@page import="models.Buku"%>  
<%@page import="models.Jurnal"%>  
<%@page import="models.Majalah"%>  
<%@page import="models.User"%>  
<%@page import="java.util.List"%>  

<!DOCTYPE html>  
<html lang="en">  
    <head>  
        <meta charset="UTF-8">  
        <title>PBO - Sistem Informasi Perpustakaan</title>  
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">  
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">  
        <script>
            function toggleDropdown() {
            const dropdown = document.getElementById('dropdown-menu');
            dropdown.classList.toggle('hidden');
            }

            // Automatically open the dropdown and load data if the menu is specified  
            window.onload = function () {
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
                <div class="flex items-center space-x-4 mb">    
                    <div class="">    
                        <img src="images/default.png" alt="Administrator" class="w-20 h-20 rounded-full mb-5 mx-16">    
                        <%
                            User user = (User) request.getSession().getAttribute("user"); // Ambil user dari session    
                            if (user != null) {
                        %>    
                        <div class="font-bold mx-20"><%= user.getName()%></div>    
                        <div class="text-sm text-gray-400 mx-20"><%= user.getRole()%></div>    
                        <div class="font-semibold mx-2">ID : <%= user.getNim()%></div>    

                        <%
                        } else {
                        %>    
                        <div class="font-semibold">Guest</div>    
                        <div class="text-sm text-gray-400">No Role</div>    
                        <%
                            }
                        %>    
                    </div>    
                </div>    
                <div class="space-y-4 pt-8">  
                    <div>  
                        <button class="w-full text-left text-gray-200 hover:bg-gray-700 p-2 rounded" onclick="toggleDropdown()">  
                            <i class="fas fa-book align-middle"></i> Data Item <i class="fas fa-chevron-down float-right"></i>  
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
                        <button class="w-full text-left text-gray-200 hover:bg-gray-700 p-2 rounded" onclick="loadData('user')">  
                            <i class="fas fa-users align-middle"></i> Data Anggota  
                        </button>  
                    </div>  
                    <div>  
                        <button class="w-full text-left text-gray-200 hover:bg-gray-700 p-2 rounded" onclick="loadData('laporan')">  
                            <i class="fas fa-chart-line align-middle"></i> Laporan  
                        </button>  
                    </div>  
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
                <div class="overflow-auto bg-gray-50 p-4 rounded-md shadow-sm" id="content-area">  
                    <!-- Konten akan dimuat di sini -->  
                </div>  
            </div>  
        </div>  

        <script>
            function loadData(menu) {
            const titleElement = document.getElementById('page-title');
            const contentArea = document.getElementById('content-area');
            if (menu === 'buku') {
            titleElement.innerText = 'Data Buku';
            fetch('Buku?menu=list') // Fetch data from Buku controller  
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
            titleElement.innerText = 'Data Majalah';
            fetch('Majalah?menu=list') // Fetch data from Majalah controller  
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
            titleElement.innerText = 'Data Jurnal';
            fetch('Jurnal?menu=list') // Fetch data from Jurnal controller  
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
            } else if (menu === 'user') {
            titleElement.innerText = 'Data Anggota';
            fetch('User?menu=list') // Fetch data from User controller    
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
            }else if (menu === 'laporan') {
            titleElement.innerText = 'Laporan';
            fetch('Laporan') // Fetch data from Laporan controller    
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
