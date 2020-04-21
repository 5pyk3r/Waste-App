package pl.wasteApp.wasteData;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.wasteApp.wasteData.service.WasteRepository;
import pl.wasteApp.wasteData.service.WasteTypeRepository;


import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class WasteResource {


    private WasteRepository wasteRepository;
    private WasteTypeRepository wasteTypeRepository;

    public WasteResource(WasteRepository wasteRepository, WasteTypeRepository wasteTypeRepository) {
        this.wasteRepository = wasteRepository;
        this.wasteTypeRepository = wasteTypeRepository;
    }

    @GetMapping("/admin/wasteTypes")
    public List<WasteType> getAllWasteTypes(){
        return wasteTypeRepository.findAll();
    }

    @GetMapping("/admin/waste")
    public List<Waste> getAllWaste(){
        System.out.println("getAllWaste called");
        return wasteRepository.findAll();
    }

     @GetMapping("/admin/wasteById/{id}")
    public ResponseEntity<Waste> getWasteById(@PathVariable("id") long id) {
        Waste waste = wasteRepository.findById(id).get();
        return ResponseEntity.ok().body(waste);
    }

    @GetMapping("/search/{name}")
    public Waste getWasteByName(@PathVariable String name){
        System.out.println("find waste by name called: " + name);
        return wasteRepository.findByName(name);
    }
    @GetMapping("/exists/{name}")
    public boolean existsWasteByName(@PathVariable String name){
        System.out.println("existByName method called: " + name);
        return wasteRepository.existsByName(name);
    }

    @PostMapping("/admin/waste")
    public Waste createWaste(@RequestBody Waste waste){
        return wasteRepository.save(waste);
    }

    @PutMapping("/admin/waste/{id}")
    public Waste updateWaste(@RequestBody Waste waste, @PathVariable long id){
        return wasteRepository.save(waste);
    }

    @DeleteMapping("/admin/waste/{id}")
    public void deleteById(@PathVariable Long id) {
        wasteRepository.deleteById(id);
        System.out.println("deleteById method called with id: " + id);
    }

}
