import model.Artista;
import model.Opera;
import service.ArtistaService;

import java.util.*;

import com.google.gson.Gson;

public class test {

	public static void main(String[] args){
		
		List<Opera> opere = new ArrayList<>();
		Opera o1 = new Opera();
		o1.setDescrizione("o1 o1");
		o1.setTitolo("o1 Titolo");
		Artista a = new Artista();
		a.setCognome("asd");
		o1.setArtista(a);
		Opera o2 = new Opera();
		o2.setDescrizione("o2 o2");
		o2.setTitolo("o2 Titolo");
		opere.add(o1);
		opere.add(o2);
		
		Opera[] opereArr = opere.toArray(new Opera[opere.size()]);
		
		for(int i = 0; i<opereArr.length; i++){
			System.out.println(opereArr[i].getTitolo());
		}
		
		Gson gson = new Gson();
		//Type typeOfSrc = new TypeToken<List<Artista>>(){}.getType();
		//String artistiJson = gson.toJson(artisti, typeOfSrc); 
		String opereJson = gson.toJson(opereArr); 
		System.out.println(opereJson);
		
		ArtistaService service = new ArtistaService();
		List<Artista> artisti = service.getArtisti();
		System.out.println("ARTISTI LISTA");
		for(int i = 0; i<artisti.size(); i++){
			System.out.println(artisti.get(i).getCognome()+" "+artisti.get(i).getId());
		}
		Artista[] artistiArr = artisti.toArray(new Artista[artisti.size()]);
		System.out.println("ARTISTI ARRAY");
		
		for(int i = 0; i<artistiArr.length; i++){
			System.out.println(artistiArr[i].toString()); 
		}
		String artistiJson;
		artistiJson = vaffanculo(artistiArr); //>>>TOCCA FA IL DATABASE FATO BENEEEEE!!!<<< PROVA A CARICARE LE OPERE MA NON C'E' LA TABELLAAAAAAAAAAAA
		System.out.println(artistiJson);
	}
	
	public static String vaffanculo(Artista[] arr){
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
	
}
