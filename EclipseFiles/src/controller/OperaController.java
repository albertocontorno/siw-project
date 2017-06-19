package controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.Opera;
import service.ArtistaService;
import service.OperaService;

@WebServlet("/OperaController")
public class OperaController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public OperaController() {
        super();
    }
    
	public static String opereToJson(Opera[] arr){
		String s = "[";
		for(int i = 0; i<arr.length; i++){
			s=s+"{\"titolo\":\""+arr[i].getTitolo()+
				"\", \"descrizione\":\""+arr[i].getDescrizione()+
				"\", \"tecnica\":\""+arr[i].getTecnica()+
				"\", \"anno\":\""+arr[i].getAnno()+
				"\", \"larghezza\":\""+arr[i].getLarghezza()+
				"\", \"altezza\":\""+arr[i].getAltezza()+
				"\", \"imgPath\":\""+arr[i].getImgPath()+
				"\", \"id\":\""+arr[i].getId()+
				"\", \"artistaNome\":\""+arr[i].getArtista().getNome()+
				"\", \"artistaCognome\":\""+arr[i].getArtista().getCognome()+
				"\", \"artistaId\":\""+arr[i].getArtista().getId()+
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
	    OperaService service = new OperaService();
	    ArtistaService Aser = new ArtistaService();
	    
		if(request.getParameter("comando").equals("creaOpera")){
		    Opera o = new Opera();
		    o.setTitolo(request.getParameter("titolo"));
		    o.setDescrizione(request.getParameter("descrizione"));
		    o.setTecnica(request.getParameter("tecnica"));
		    o.setAnno(request.getParameter("anno"));
		    o.setLarghezza(Double.parseDouble(request.getParameter("larghezza")));
		    o.setAltezza(Double.parseDouble(request.getParameter("altezza")));
		    o.setImgPath(request.getParameter("imgPath"));
		    o.setArtista(Aser.getArtista(Long.parseLong(request.getParameter("id"))));
		    Long id = service.inserisciOpera(o);
		    out.println(id);
		} else if (request.getParameter("comando").equals("getOpere")){
			List<Opera> opere = service.getAllOpereOrdered();
			Opera[] operaArr = opere.toArray(new Opera[opere.size()]);
			String opereJson = opereToJson(operaArr); 
			out.println(opereJson);
		} else if (request.getParameter("comando").equals("deleteOpera")){
			Long id = Long.parseLong(request.getParameter("id"));
			Opera o= service.findOne(id);
			service.delete(o);
		}
		service.closeEM();
		Aser.closeEM();
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

}
