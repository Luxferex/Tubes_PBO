package controllers;

import java.io.IOException;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import models.User;

@WebServlet(name = "UserController", urlPatterns = {"/User"})
public class UserController extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String menu = request.getParameter("menu");

        if ("logout".equals(menu)) {
            request.getSession().invalidate();
            response.sendRedirect(request.getContextPath());
        } else if ("login".equals(menu)) {
            request.getRequestDispatcher("login.jsp").forward(request, response);
        } else if ("signup".equals(menu)) {
            request.getRequestDispatcher("register.jsp").forward(request, response);
        } else if ("list".equals(menu)) {
            ArrayList<User> userList = new User().get(); // Retrieve the list of users from database
            request.setAttribute("userList", userList);
            request.getRequestDispatcher("UserList.jsp").forward(request, response);
        } else if ("edit".equals(menu)) {
            String nimParam = request.getParameter("nim");

            if (nimParam != null && !nimParam.isEmpty()) {
                int nim = Integer.parseInt(nimParam); // Safely parse the integer after checking
                User user = new User().getById(nim); // Retrieve user by ID
                request.setAttribute("user", user);
                request.getRequestDispatcher("EditAnggota.jsp").forward(request, response);
            } else {
                // Handle error if ID is missing or invalid
                request.getSession().setAttribute("error", "Invalid user ID");
                response.sendRedirect("User?menu=list");
            }
        } else {
            response.sendRedirect("User?menu=login");
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String action = request.getParameter("action");

        if ("add".equals(action)) {
            User user = new User();
            user.setName(request.getParameter("name"));
            user.setEmail(request.getParameter("email"));
            user.setNim(Integer.parseInt(request.getParameter("nim"))); // Set NIM  
            user.setJurusan(request.getParameter("jurusan")); // Set Jurusan  
            user.setFakultas(request.getParameter("fakultas")); // Set Fakultas  
            user.setPhone(request.getParameter("phone")); // Set Phone as String  
            user.setRole("user"); // Default role  
            user.setPassword(request.getParameter("password")); // Set Password  

            user.insert(); // Save the new user to the database  
            request.getSession().setAttribute("msg", "User berhasil ditambahkan");
            response.sendRedirect("AdminPage.jsp?menu=user");
        } else if ("login".equals(action)) {
            String nim = request.getParameter("nim"); // Get NIM  
            String password = request.getParameter("password");

            if (nim != null && password != null) {
                User user = new User();
                user = user.find(nim);// Fetch user by NIM  
                if (user != null) {
                    if (user.getRole().equals("admin")) {
                        if (user.getPassword().equals(password)) {
                            request.getSession().setAttribute("currNim", user.getNim());
                            request.getSession().setAttribute("currName", user.getName());
                            request.getSession().setAttribute("user", user); // Store user object in session  

                            response.sendRedirect("AdminPage.jsp"); // Redirect to admin dashboard  
                        } else {
                            request.setAttribute("error", "NIM or password incorrect");
                            request.getRequestDispatcher("login.jsp").forward(request, response);
                        }
                    } else {
                        if (user.getPassword().equals(password)) {
                            request.getSession().setAttribute("currNim", user.getNim());
                            request.getSession().setAttribute("currName", user.getName());
                            request.getSession().setAttribute("user", user); // Store user object in session  

                            response.sendRedirect("UserPage.jsp"); // Redirect to user dashboard  
                        } else {
                            request.setAttribute("error", "NIM or password incorrect");
                            request.getRequestDispatcher("login.jsp").forward(request, response);
                        }
                    }
                } else {
                    request.setAttribute("error", "User not found");
                    request.getRequestDispatcher("login.jsp").forward(request, response);
                }
            }
        } else if ("edit".equals(action)) {
            int nim = Integer.parseInt(request.getParameter("nim"));
            User user = new User().getById(nim);

            if (user != null) {
                user.setName(request.getParameter("name"));
                user.setEmail(request.getParameter("email"));
                user.setNim(Integer.parseInt(request.getParameter("nim")));
                user.setJurusan(request.getParameter("jurusan"));
                user.setFakultas(request.getParameter("fakultas"));
                user.setPhone(request.getParameter("phone"));
                user.setPassword(request.getParameter("password"));

                // Updating user information
                user.update(); // Update the user in the database

                request.getSession().setAttribute("msg", "User successfully updated");
                response.sendRedirect("AdminPage.jsp?menu=user"); // Redirect to user list page
            } else {
                request.getSession().setAttribute("error", "User not found");
                request.getRequestDispatcher("EditAnggota.jsp").forward(request, response);
            }
        } else {
            response.sendRedirect("User");
        }
    }
}
