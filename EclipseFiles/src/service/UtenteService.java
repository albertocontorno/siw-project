package service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import model.Utente;
import repository.UtenteCrudRepository;

public class UtenteService {
	private EntityManager em;
	private EntityManagerFactory emf;
	private UtenteCrudRepository repository;
	private EntityTransaction tx;
	
	public UtenteService(){
		this.emf = Persistence.createEntityManagerFactory("esercitazione-unit");
		this.em = emf.createEntityManager();
		this.tx = em.getTransaction();
		
		this.repository = new UtenteCrudRepository(this.em);
	}
	
	public String inserisciUtente(Utente u){
		this.tx.begin();
		if(this.repository.findUtente(u.getEmail()) == null) {
			Utente utente = this.repository.save(u);
			this.tx.commit();
			return "utenteInserito";
		} else {
			return "utenteEsistente";
		}
	}
	
	public String autenticaUtente(Utente u){
		this.tx.begin();
		Utente utente = this.repository.findUtente(u.getEmail());
		if(utente!=null){

			if(utente.getPassword().equals(u.getPassword())){
				return utente.getRuolo();
			}
		}
		return "utente non trovato";
	}
	
	public List<Utente> getUtenti() {
		this.tx.begin();
		List<Utente> utenti = this.repository.findAll();
		this.tx.commit();
		this.em.close();
		this.emf.close();
		return utenti;		
	}
}
