package controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.Artista;
import model.Opera;
import service.ArtistaService;

@WebServlet("/ArtistaController")
public class ArtistaController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public ArtistaController() {
        super();
    }
    
    
	public static String artistiToJson(Artista[] arr){
		String s = "[";
		for(int i = 0; i<arr.length; i++){
			s=s+"{\"nome\":\""+arr[i].getNome()+
				"\", \"cognome\":\""+arr[i].getCognome()+
				"\", \"dataNascita\":\""+arr[i].getDataNascita()+
				"\", \"dataMorte\":\""+arr[i].getDataMorte()+
				"\", \"luogoNascita\":\""+arr[i].getLuogoNascita()+
				"\", \"descrizione\":\""+arr[i].getDescrizione()+
				"\", \"imgPath\":\""+arr[i].getImgPath()+
				"\", \"id\":\""+arr[i].getId()+
				"\"},";
			if(i==arr.length-1){
				s = s.substring(0, s.length()-1);
				s = s+"]";
			}
		}
		return s;
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
	    ArtistaService service = new ArtistaService();
	    
		if(request.getParameter("comando").equals("creaArtista")){
		    Artista a = new Artista();
		    a.setNome(request.getParameter("nome"));
		    a.setCognome(request.getParameter("cognome"));
		    a.setDataNascita(request.getParameter("dataNascita"));
		    a.setDataMorte(request.getParameter("dataMorte"));
		    a.setLuogoNascita(request.getParameter("luogoNascita"));
		    a.setDescrizione(request.getParameter("descrizione"));
		    a.setImgPath(request.getParameter("imgPath"));
		    a.setOpere(new ArrayList<Opera>());
		    Long id = service.inserisciArtista(a);
		    out.println(id);
		} else if (request.getParameter("comando").equals("getArtisti")){
			List<Artista> artisti = service.getArtistiOrdered();
			Artista[] artistiArr = artisti.toArray(new Artista[artisti.size()]);
			String artistiJson = artistiToJson(artistiArr); 
			out.println(artistiJson);
		} else if (request.getParameter("comando").equals("deleteArtista")){
			Long id = Long.parseLong(request.getParameter("id"));
			Artista a= service.findOne(id);
			service.delete(a);
		}
		
		service.closeEM();
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

}
