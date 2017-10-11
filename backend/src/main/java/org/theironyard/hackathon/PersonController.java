package org.theironyard.hackathon;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
public class PersonController {

    @Autowired
    PersonService personService;

    @RequestMapping(path = "/", method = RequestMethod.GET)
    public List<Person> getPeople() {
        return personService.findAll();
    }

    @RequestMapping(path = "/", method = RequestMethod.POST)
    public void addPerson(@RequestBody Person newPerson) {
        System.out.println(newPerson.getFirstName());

        personService.add(newPerson);

    }
}
