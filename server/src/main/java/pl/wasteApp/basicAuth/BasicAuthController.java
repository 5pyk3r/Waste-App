package pl.wasteApp.basicAuth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BasicAuthController {

    @GetMapping(path = "/basicauth")
    public AuthenticationBean helloWorldBean() {
        System.out.println("Authenticated");
        return new AuthenticationBean("You are authenticated");
    }
}

