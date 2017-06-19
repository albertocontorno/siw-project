package model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Artista {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String nome;
	private String cognome;
	private String dataNascita;
	private String dataMorte;
	private String luogoNascita;
	private String descrizione;
	private String imgPath;
	@OneToMany(mappedBy = "artista", cascade = {CascadeType.REMOVE})
	private List<Opera> opere;
	
	public String toString(){
		String s ="";
		
		if(this.id != null){
			s+=this.id;
		}
		if(this.nome != null){s+=this.nome+" ";}
		if(this.cognome != null){s+=this.cognome+" ";}
		if(this.dataNascita != null){s+=this.dataNascita+" ";}
		if(this.dataMorte != null){s+=this.dataMorte+" ";}
		if(this.luogoNascita != null){s+=this.luogoNascita+" ";}
		if(this.descrizione != null){s+=this.descrizione+" ";}
		if(this.imgPath != null){s+=this.imgPath+" ";}
		s+="OPERE= ";
		for(int i=0; i<this.opere.size(); i++){
			s+=this.opere.get(i).getTitolo()+" ";
		}
		
		return s;
	}
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCognome() {
		return cognome;
	}
	public void setCognome(String cognome) {
		this.cognome = cognome;
	}
	public String getDataNascita() {
		return dataNascita;
	}
	public void setDataNascita(String dataNascita) {
		this.dataNascita = dataNascita;
	}
	public String getDataMorte() {
		return dataMorte;
	}
	public void setDataMorte(String dataMorte) {
		this.dataMorte = dataMorte;
	}
	public String getLuogoNascita() {
		return luogoNascita;
	}
	public void setLuogoNascita(String luogoNascita) {
		this.luogoNascita = luogoNascita;
	}
	public String getDescrizione() {
		return descrizione;
	}
	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}
	public String getImgPath() {
		return imgPath;
	}
	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
	}
	public List<Opera> getOpere() {
		return opere;
	}
	public void setOpere(List<Opera> opere) {
		this.opere = opere;
	}
}
