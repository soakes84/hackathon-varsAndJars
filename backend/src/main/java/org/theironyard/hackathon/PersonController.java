package org.theironyard.hackathon;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PersonController {

    @Autowired
    PersonService personService;

    @RequestMapping(path = "/", method = RequestMethod.GET)
    public List<Person> getPeople() {
        return personService.findAll();
    }
}
