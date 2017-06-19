package repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import model.Artista;
import model.Opera;

public class ArtistaCrudRepository extends CrudRepositoryJPA<Artista>{
	
	public ArtistaCrudRepository(EntityManager em) {
		super(em, Artista.class);
	}

	public List<Artista> getArtistiOrdered() {
		TypedQuery<Artista> query = super.getEm().createQuery("SELECT a FROM "+ this.getClassName() +" a ORDER BY a.cognome", this.getEntityClass());
		return query.getResultList();
	}

}
