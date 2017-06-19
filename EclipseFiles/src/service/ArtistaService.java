package service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import model.Artista;
import model.Opera;
import repository.ArtistaCrudRepository;

public class ArtistaService {
	private EntityManager em;
	private EntityManagerFactory emf;
	private ArtistaCrudRepository repository;
	private EntityTransaction tx;

	public ArtistaService(){
		this.emf = Persistence.createEntityManagerFactory("esercitazione-unit");
		this.em = emf.createEntityManager();
		this.tx = em.getTransaction();
		
		this.repository = new ArtistaCrudRepository(this.em);
	}
	
	public Long inserisciArtista(Artista a){
		this.tx.begin();
		Artista artista = this.repository.save(a);
		this.tx.commit();
		return artista.getId();
	}
	
	public List<Artista> getArtisti() {
		this.tx.begin();
		List<Artista> artisti = this.repository.findAll();
		this.tx.commit();
		return artisti;		
	}
	
	public List<Artista> getArtistiOrdered() {
		this.tx.begin();
		List<Artista> artisti = this.repository.getArtistiOrdered();
		this.tx.commit();
		return artisti;		
	}
	
	public Artista getArtista(Long id){
		this.tx.begin();
		Artista a = this.repository.findOne(id);
		this.tx.commit();
		return a;
	}
	
	public Artista findOne(Long id){
		this.tx.begin();
		Artista a = this.repository.findOne(id);
		this.tx.commit();
		return a;
	}
	
	public void delete(Artista a){
		this.tx.begin();
		this.repository.delete(a);
		this.tx.commit();
	}
	
	public void closeEM(){
		this.em.close();
		this.emf.close();
	}
}
