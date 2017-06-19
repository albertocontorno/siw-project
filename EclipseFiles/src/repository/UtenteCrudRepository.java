package repository;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import model.Utente;

public class UtenteCrudRepository extends CrudRepositoryJPA<Utente>{

	public UtenteCrudRepository(EntityManager em) {
		super(em, Utente.class);
	}
	
	public Utente findUtente(String email){
		TypedQuery<Utente> query = super.getEm().createQuery("SELECT u FROM "+ this.getClassName() +" u WHERE u.email= '"+ email + "'",this.getEntityClass());
		Utente u;
		try {
			u = query.getSingleResult();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			u = null;
		}
		return u;
	}


}
