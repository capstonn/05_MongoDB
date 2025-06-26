package org.scoula.ex06.controller;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet(name = "frontControllerServlet", value = "/")
public class FrontControllerServlet extends HttpServlet {
    @Override
    public void init() {
    }
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)) throws ServletException, IOException {
    }
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)) throws ServletException, IOException {
        doGet(req, resp);
    }
}