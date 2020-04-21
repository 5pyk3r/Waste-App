package pl.wasteApp.wasteData.service;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.wasteApp.wasteData.WasteType;

@Repository
public interface WasteTypeRepository extends JpaRepository<WasteType, Long> {
}
