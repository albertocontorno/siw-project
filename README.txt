In AngularFiles ci sono i file di Angular4 non compattati nei file distribution (quelli che vanno su tomcat) per il deploy sulla piattaforma di Heroku.

In EclipseFiles ci sono i file da importare su eclipse per vedere le classi e i package usati (vanno re-importate le librerie).

In TomcatFiles ci sono i file risultati dal .war completi di tutti i files (classi java e file distribution di Angular) per il deploy sulla piattaforma di Heroku

N.B.
In tutti i files le richieste http fanno riferimento all'applicazione su Heroku, quindi in locale non funzionerebbero e 
andrebbero cambiati (es. http://localhost:8080/nomeApp/routeServlet).

NOTE SULL'ESPERIENZA
Abbiamo deciso di usare Angular4 per il frontEnd e Tomcat/servlet/PostgreSQL per il backEnd. La scelta di angular è stata dovuta al fatto che avevamo interesse
nello sviluppare una "single page application" oltre al fatto che ci sembrava una tecnologia molto utile da apprendere; non è stato facile apprenderne le sottigliezze
in cosi "poco" tempo ma siamo entrambi d'accordo sul fatto che ne sia valsa la pena. Purtroppo il cloud server che usiamo è gratutito e quindi l'applicazione
non rimane cosi performante come in locale ma resta comunque responsiva chiaramente senza mai ricaricare la pagina. Per accedere come amministratore Le abbiamo creato
un account (gli account admin possono essere solo creati con query al DB) con email: admin@gmail.com e password: admin. Per quanto riguarda gli account degli utenti 
comuni ne puo o creare Lei o usare email:test@test.com pwd:test.
Se vuole i file per farlo girare in locale le inviamo un'altra mail.
Gli errori 404 in console sono del tutto normali, in quanto usando Angular abbiamo una sola pagina effettiva, quindi tutte le volte che l'url non è trovato si viene reindirizzati alla singola
pagina che poi effettua il routing.
La parte grafica è stata curata un po' di meno soprattutto per cause temporali, in quanto ci siamo soffermati maggiormente sulla parte applicativa.
Un'ultima nota: abbiamo notato che Heroku ci mette un po' a rilasciare le connessioni del DB quindi essendo esse limitate (causa free service) è meglio evitare troppe 
richieste (soprattutto login) in un breve lasso di tempo.

LINK:

https://siw-project.herokuapp.com/   
