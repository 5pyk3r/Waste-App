package pl.wasteApp.wasteData;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class WasteType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "wasteType", fetch = FetchType.EAGER)
    private Set<Waste> waste = new HashSet<>();

    public WasteType() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Waste> getWaste() {
        return waste;
    }

    public void setWaste(Set<Waste> waste) {
        this.waste = waste;
    }


}
