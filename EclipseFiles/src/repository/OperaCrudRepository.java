package repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import model.Opera;

public class OperaCrudRepository extends CrudRepositoryJPA<Opera> {

	public OperaCrudRepository(EntityManager em) {
		super(em, Opera.class);
	}
	
	public List<Opera> findAllAlphabeticallyOrdered() {
		TypedQuery<Opera> query = super.getEm().createQuery("SELECT o FROM "+ this.getClassName() +" o ORDER BY o.titolo", this.getEntityClass());
		return query.getResultList();
	}
	

}