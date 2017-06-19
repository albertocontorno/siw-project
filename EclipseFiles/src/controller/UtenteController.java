package controller;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.Utente;
import service.UtenteService;

@WebServlet("/UtenteController")
public class UtenteController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public UtenteController() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
	    UtenteService service = new UtenteService();
	    
		if(request.getParameter("comando").equals("login")){
		    Utente u = new Utente();
		    u.setPassword(request.getParameter("password"));
		    u.setEmail(request.getParameter("email"));
		    u.setRuolo("utente");
		    out.println(service.autenticaUtente(u));
		    
		}
		
		if(request.getParameter("comando").equals("signup")){
		    Utente u = new Utente();
		    u.setPassword(request.getParameter("password"));
		    u.setEmail(request.getParameter("email"));
		    u.setRuolo("utente");
		    String risultato = service.inserisciUtente(u);
		    out.println(risultato);
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

}
