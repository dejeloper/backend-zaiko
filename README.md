# Zaiko Backend

### Herramienta hecha en Node, Express y Postgres(Adding)

- Para correr el contenedor de docker en local:
  <pre>docker-compose up -d postgres</pre>
- Para ejecutar el bash del componente es:
  <pre>winpty docker-compose exec postgres bash</pre>
- Para accede a la base de datos:
  <pre>psql -h localhost -d zaiko_db -U zaiko_admin</pre>
- Para correr el contenedor de docker en local:
  <pre>docker-compose up -d pgadmin</pre>
- Para correr el pgadmin en local:
  <pre>
  - http://localhost:5050/login?next=%2F
  - admin@mail.com
  - root 
  </pre>
- Para saber que IP está usando postgres:
  <pre>
  - docker ps (Se obtiene el id del contenedor/ tambien está en el docker desktop)
  - docker inspect #####
  - Usar el campo: "IPAddress": "172.21.0.2"
  </pre>
- Para crear server en el pgadmin:
  <pre>
	- HOST: IPAddress
  - DB=zaiko_db
  - USER=zaiko_admin
  - PASSWORD=zaiko_pass
	- Guardar la password
</pre>

Desarrollado por @dejeloper
