package pl.wasteApp.wasteData.service;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.wasteApp.wasteData.Waste;

@Repository
public interface WasteRepository extends JpaRepository<Waste, Long> {

    Waste findByName(String name);
    boolean existsByName(String name);
}
