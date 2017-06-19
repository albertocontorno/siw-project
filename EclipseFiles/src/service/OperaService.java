package service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import model.Opera;
import repository.OperaCrudRepository;

public class OperaService {
	
	private EntityManager em;
	private EntityManagerFactory emf;
	private OperaCrudRepository repository;
	private EntityTransaction tx;
	
	public OperaService(){
		this.emf = Persistence.createEntityManagerFactory("esercitazione-unit");
		this.em = emf.createEntityManager();
		this.tx = em.getTransaction();
		
		this.repository = new OperaCrudRepository(this.em);
	}
	
	public List<Opera> getAllOpereOrdered(){
		this.tx.begin();
		List<Opera> opere = this.repository.findAllAlphabeticallyOrdered();
		this.tx.commit();
		return opere;
	}
	
	public Long inserisciOpera(Opera o){
		this.tx.begin();
		Opera opera = this.repository.save(o);
		this.tx.commit();
		return opera.getId();
	}
	
	public List<Opera> getOpere() {
		this.tx.begin();
		List<Opera> opere = this.repository.findAll();
		this.tx.commit();
		return opere;		
	}
	
	public Opera findOne(Long id){
		this.tx.begin();
		Opera o = this.repository.findOne(id);
		this.tx.commit();
		return o;
	}
	
	public void delete(Opera o){
		this.tx.begin();
		this.repository.delete(o);
		this.tx.commit();
	}
	
	public void closeEM(){
		this.em.close();
		this.emf.close();
	}
}
