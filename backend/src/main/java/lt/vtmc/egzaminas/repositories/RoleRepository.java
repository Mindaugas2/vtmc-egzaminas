package lt.vtmc.egzaminas.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import lt.vtmc.egzaminas.entities.ERole;
import lt.vtmc.egzaminas.entities.Role;

@CrossOrigin
public interface RoleRepository extends JpaRepository<Role, Long> {

	Optional<Role> findByName(ERole name);
}
